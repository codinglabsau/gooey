/**
 * Composable for managing sticky columns and sticky header in the datatable
 * Adapted from InertiaUI Table package implementation
 */

/**
 * Debounce helper using requestAnimationFrame for smooth visual updates
 * Based on: https://pqina.nl/blog/applying-styles-based-on-the-user-scroll-position-with-smart-css/
 */
function debounce(fn: Function) {
  let frame: number | null = null
  return (...args: any[]) => {
    if (frame) {
      cancelAnimationFrame(frame)
    }
    frame = requestAnimationFrame(() => {
      fn(...args)
    })
  }
}

/**
 * Detects the device's actual frame rate for optimal scroll animation timing
 * Returns a Promise resolving to fps (capped between 30-240)
 */
function detectFramerate(): Promise<number> {
  return new Promise((resolve) => {
    if (!window?.requestAnimationFrame) {
      return resolve(60)
    }

    const timestamps: number[] = []
    let rafId: number

    function animate(now: number) {
      timestamps.unshift(now)

      if (timestamps.length > 10) {
        const lastTime = timestamps.pop()!
        const fps = Math.floor((1000 * 10) / (now - lastTime))

        // Cleanup
        cancelAnimationFrame(rafId)

        // Cap at reasonable values (30-240 fps range)
        resolve(Math.min(Math.max(fps, 30), 240))
        return
      }

      rafId = window.requestAnimationFrame(animate)
    }

    rafId = window.requestAnimationFrame(animate)

    // Safety timeout after 1 second
    setTimeout(() => {
      cancelAnimationFrame(rafId)
      resolve(60)
    }, 1000)
  })
}

/**
 * Manages sticky column behavior with dynamic width calculation
 * Uses CSS custom properties for offsets and data attributes for scroll state
 */
export function useStickyColumns(tableContainerResolver: () => HTMLElement | null) {
  const handleTableScroll = debounce(() => {
    // const tableContainer = tableContainerResolver()
    //
    // if (!tableContainer) {
    //   return
    // }
    //
    // const scrollLeft = tableContainer.scrollLeft
    //
    // if (scrollLeft) {
    //   tableContainer.dataset.scrollX = "true"
    // } else {
    //   delete tableContainer.dataset.scrollX
    // }
  })

  const setWidthOfStickyColumns = debounce(() => {
    const tableContainer = tableContainerResolver()

    if (!tableContainer) {
      return
    }

    let offset = 0

    // First, check if there's a select column (without data-column attribute) and account for its width
    const allHeaders = tableContainer.querySelectorAll("th")
    const firstHeader = allHeaders[0]
    if (firstHeader && !firstHeader.getAttribute("data-column")) {
      // This is the select column - add its width to the initial offset
      offset += firstHeader.getBoundingClientRect().width
    }

    // Query all th elements with data-column and calculate cumulative offsets
    tableContainer.querySelectorAll("th[data-column]").forEach((column) => {
      const columnKey = column.getAttribute("data-column")
      if (columnKey) {
        // Set CSS variable for this column's offset
        tableContainer.style.setProperty(`--column-${columnKey}-offset`, `${offset}px`)
        offset += column.getBoundingClientRect().width
      }
    })
  })

  let tableContainerObserver: MutationObserver | null = null

  return {
    add: () => {
      const tableContainer = tableContainerResolver()

      if (!tableContainer) {
        return
      }

      // Watch for DOM changes to recalculate offsets
      tableContainerObserver = new MutationObserver(() => {
        setWidthOfStickyColumns()
        handleTableScroll()
      })

      // Set up event listeners
      tableContainer.addEventListener("scroll", handleTableScroll, { passive: true })
      tableContainerObserver.observe(tableContainer, { childList: true, subtree: true })
      window.addEventListener("resize", setWidthOfStickyColumns, { passive: true })

      // Initial calculation
      setWidthOfStickyColumns()
      handleTableScroll()
    },

    remove: () => {
      const tableContainer = tableContainerResolver()

      window.removeEventListener("resize", setWidthOfStickyColumns)
      tableContainerObserver?.disconnect()
      tableContainer?.removeEventListener("scroll", handleTableScroll)
    },
  }
}

/**
 * Manages sticky header behavior on vertical scroll
 * Uses CSS transform to animate header position during scroll
 */
export function useStickyHeader(
  tableContainerResolver: () => HTMLElement | null,
  theadResolver: () => HTMLElement | null
) {
  let scrollTimeout: ReturnType<typeof setTimeout> | null = null
  let timeoutMs = Math.ceil(1000 / 60) // Default to 60fps

  // Detect actual frame rate for optimal timing
  detectFramerate().then((fps) => (timeoutMs = Math.ceil(1000 / fps)))

  const updateHeaderTransform = debounce((tableContainer: HTMLElement, translateY: number) => {
    tableContainer.style.setProperty(`--header-offset`, `${translateY}px`)
  })

  function handleWindowScroll() {
    const tableContainer = tableContainerResolver()
    const thead = theadResolver()

    if (!tableContainer || !thead) {
      return
    }

    tableContainer.dataset.isScrollingY = "true"

    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    const containerRect = tableContainer.getBoundingClientRect()
    const theadHeight = thead.offsetHeight

    let translateY: number | false = false
    const threshold = containerRect.top + theadHeight / 2

    if (threshold < 0 && containerRect.bottom > theadHeight) {
      // While scrolling, hide the header above the viewport
      translateY =
        Math.min(-containerRect.top, containerRect.bottom - theadHeight - containerRect.top) -
        theadHeight
    }

    updateHeaderTransform(tableContainer, translateY || 0)

    scrollTimeout = window.setTimeout(() => {
      // After scrolling, show the header at the top of the viewport
      const finalTranslateY = !translateY ? 0 : translateY + theadHeight
      updateHeaderTransform(tableContainer, finalTranslateY)

      if (finalTranslateY) {
        tableContainer.dataset.scrollY = "true"
      } else {
        delete tableContainer.dataset.scrollY
      }

      delete tableContainer.dataset.isScrollingY
    }, timeoutMs)
  }

  let scrollTarget: Window | HTMLElement | null = null

  return {
    add: () => {
      const container = tableContainerResolver()
      const scrollRegion = container?.closest("[scroll-region]") as HTMLElement | null
      scrollTarget = scrollRegion || window

      scrollTarget.addEventListener("scroll", handleWindowScroll as EventListener, {
        passive: true,
      })
      window.addEventListener("resize", handleWindowScroll, { passive: true })

      handleWindowScroll()
    },

    remove: () => {
      window.removeEventListener("resize", handleWindowScroll)
      if (scrollTarget) {
        scrollTarget.removeEventListener("scroll", handleWindowScroll as EventListener)
      }

      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    },
  }
}
