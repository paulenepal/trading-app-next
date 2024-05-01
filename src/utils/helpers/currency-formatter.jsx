// format currency to dollar

export const formatToDollar = (value) => {
  value = parseFloat(value);
  if (value === null || value === undefined || value === 0.0) {
    return '$0.00';
  } else {
    return `$${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }
}