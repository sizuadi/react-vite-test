export function truncateText(text, maxLength = 20) {
  const words = text.split(" ");
  return words.length > maxLength
    ? words.slice(0, maxLength).join(" ") + "..."
    : text;
}
