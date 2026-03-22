import { type Locale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { programCategories } from "@/data/programs";
import ProgramPageLayout from "@/components/ProgramPageLayout";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function BuildersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "en" ? "en" : "ko") as Locale;
  const t = getDictionary(lang);
  const category = programCategories.find((c) => c.path === "builders")!;

  return <ProgramPageLayout lang={lang} t={t} category={category} />;
}
