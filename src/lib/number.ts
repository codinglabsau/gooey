/**
 * Coerces a Number/Price model value for NumberField. Empty and whitespace-only strings become
 * undefined; any other string must be a plain numeric string such as "1234.56".
 */
export function toNumberOrUndefined(value: number | string | null | undefined): number | undefined {
  if (typeof value === "number") {
    return Number.isNaN(value) ? undefined : value
  }

  if (value === null || value === undefined || value.trim() === "") {
    return undefined
  }

  const number = Number(value)

  if (Number.isNaN(number)) {
    // eslint-disable-next-line no-console
    console.warn(
      `[gooey] Cannot read "${value}" as a number, so the field is shown empty. Pass a number or a plain numeric string such as "1234.56".`,
    )

    return undefined
  }

  return number
}
