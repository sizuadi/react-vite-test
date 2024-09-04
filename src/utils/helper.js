import { jwtDecode } from "jwt-decode";

export function truncateText(text, maxLength = 17) {
  const words = text.split(" ");
  return words.length > maxLength
    ? words.slice(0, maxLength).join(" ") + "..."
    : text;
}
export function truncateTitle(text, maxLength = 6) {
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

export function getUsername(token) {
  return jwtDecode(token, { complete: true }).user ?? "";
}
