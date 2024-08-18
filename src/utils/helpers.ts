const locale: string = "en-AU"
const currencyCode: string = "AUD"

const number = (number: string | number) => {
  return number.toLocaleString(locale)
}

const price = (amount: string | number | bigint, decimalPlaces: number = 2) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currencyDisplay: "symbol",
    currency: currencyCode,
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(Number(amount))
}

export { number, price }
