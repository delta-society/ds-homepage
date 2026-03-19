import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "ko";
  const isKo = lang === "ko";
  return {
    title: "Delta Society — Where Outliers Connect & Build",
    description: isKo
      ? "변화의 최전선에 있는 아웃라이어들이 모여 지식을 나누고 함께 만드는 커뮤니티."
      : "A knowledge-driven community where outliers at the frontier of change connect and build together.",
    openGraph: {
      title: "Delta Society — Where Outliers Connect & Build",
      description: isKo
        ? "변화의 최전선에 있는 아웃라이어들이 모여 지식을 나누고 함께 만드는 커뮤니티."
        : "A knowledge-driven community where outliers at the frontier of change connect and build together.",
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "en" ? "en" : "ko") as Locale;
  const t = getDictionary(lang);

  return (
    <html lang={lang}>
      <body className="antialiased">
        <Header lang={lang} t={t} />
        <main>{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
