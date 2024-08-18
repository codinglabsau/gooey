import type { ButtonHTMLAttributes } from "vue"

declare global {
  type ButtonType = ButtonHTMLAttributes["type"]

  interface PaginatorLink {
    url: string | null | undefined
    label: string | number
    active: boolean
  }

  interface PaginatorMeta {
    current_page: number
    first_page_url: string
    from: number | null
    last_page: number
    last_page_url: string
    next_page_url: ?string
    path: string
    per_page: number
    prev_page_url: ?string
    to: number | null
    total: number
    links: PaginatorLink[]
  }

  interface Paginator<T> extends PaginatorMeta {
    data: T[]
  }
}
