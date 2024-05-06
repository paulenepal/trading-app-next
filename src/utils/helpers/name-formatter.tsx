export function capitalize(str: string): string {
  return str.toUpperCase();
}

export function firstLetter(name: string): string {
  if (typeof name === 'string' && name.length > 0) {
    return name.charAt(0).toUpperCase();
  } else {
    return '-';
  }
}