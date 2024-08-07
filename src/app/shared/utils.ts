export function formatDate(date: Date): string {
  // Format the date as per application requirement
  // Example implementation:
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function truncateText(text: string, maxLength: number): string {
  // Truncate text if it exceeds the maxLength
  // Example implementation:
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}
