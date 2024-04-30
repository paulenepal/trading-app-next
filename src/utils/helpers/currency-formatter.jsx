// format currency to dollar

export const formatToDollar = (value) => {
  return `$${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}