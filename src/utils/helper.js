export function truncateText(text, maxLength = 20) {
  const words = text.split(" ");
  return words.length > maxLength
    ? words.slice(0, maxLength).join(" ") + "..."
    : text;
}

/* currency indonesia helper function */
export function currencyIDR(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
