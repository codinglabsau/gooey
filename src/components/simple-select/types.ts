/** `value` is a string unless widened, e.g. `SelectOption<number | null>` for numeric or null options. */
export interface SelectOption<T extends string | number | null = string> {
  value: T
  label: string
  disabled?: boolean
}
