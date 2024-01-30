export const generateSlug = (text: string): string =>
  text.toLowerCase().replace(/\s+/g, '-');