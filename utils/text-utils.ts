/*
 * Normalizes the white space in text by collapsing multiple spaces,
 * newlines, and tabs into single spaces and trimming edges.
 * Useful for comparing text from HTML that may have formatting.
 *
 */
export function normalizeWhiteSpace(text: string | null): string {
  if (text === null) {
    return '';
  }

  return text.replace(/\s+/g, ' ').trim();
}
