import type { Locale } from "./config";
import ko from "./ko";
import en from "./en";

const dictionaries = { ko, en } as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.ko;
}

export type Dictionary = ReturnType<typeof getDictionary>;
