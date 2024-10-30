
export function getFullYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}
export function getFooterCopy() {
  const isIndex = true;
  if (isIndex) {
    return "Holberton School"
  } else {
    return "Holberton School main dashboard"
  }
}
 
