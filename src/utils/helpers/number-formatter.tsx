export function formatNum(number: number | undefined | null): string {
  if (number !== undefined && number !== null) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "k"; 
    } else {
      return number.toString();
    }
  } else {
    return "";
  }
}
