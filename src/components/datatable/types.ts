import type { DatatableState } from "@/components/datatable/useDatatable"

export interface ColumnConfig {
  id: string

  label: string

  headerCellClasses?: string

  headerContentClasses?: string

  cellClasses?: string

  cellContentClasses?: string
}

export interface ActionConfig {
  id: string

  label: string

  bulk?: boolean

  visible?: (row: Record<string, any>) => boolean

  handler: (rows: Record<string, any>[]) => void | Promise<void>
}

export interface SortingConfig {
  defaultSort: string | null
}

export interface FullPaginationResponse<T = Record<string, any>> {
  current_page: number
  data: T[]
  first_page_url: string
  from: number | null
  last_page: number
  last_page_url: string
  links: Array<{
    url: string | null
    label: string
    page: number | null
    active: boolean
  }>
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number | null
  total: number
}

export interface SimplePaginationResponse<T = Record<string, any>> {
  current_page: number
  current_page_url?: string
  data: T[]
  first_page_url: string
  from: number | null
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number | null
}

export interface CursorPaginationResponse<T = Record<string, any>> {
  data: T[]
  path: string
  per_page: number
  next_cursor: string | null
  next_page_url: string | null
  prev_cursor: string | null
  prev_page_url: string | null
}

export type PaginationResponse<T = Record<string, any>> =
  | FullPaginationResponse<T>
  | SimplePaginationResponse<T>
  | CursorPaginationResponse<T>

export interface DatatableProps {
  table: DatatableState
}
