export function toMkt(locale: string): string {
  const { language, region } = new Intl.Locale(locale).maximize()
  return `${language}-${region}`
}
