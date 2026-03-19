export const defaultLocale = "ko" as const;
export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}
