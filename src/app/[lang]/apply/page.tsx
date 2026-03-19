import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export const metadata: Metadata = {
  title: "Join Delta Society — Apply for Club Membership",
};

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "en" ? "en" : "ko") as Locale;
  const t = getDictionary(lang);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
            {t.apply.label}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 whitespace-pre-line">
            {t.apply.title}
          </h1>
          <p className="text-lg text-ds-text-body leading-relaxed">
            {t.apply.description}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="border border-ds-primary/10 rounded-xl overflow-hidden bg-white">
            <div className="p-12 text-center text-ds-text-muted">
              <p className="text-sm mb-4">{t.apply.formPlaceholder}</p>
              <p className="text-xs text-ds-text-muted">{t.apply.formHelp}</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-sm text-ds-text-muted">
            {t.apply.contact}{" "}
            <a
              href="mailto:hello@deltasociety.xyz"
              className="text-ds-primary font-medium underline underline-offset-4 hover:text-ds-accent transition-colors"
            >
              hello@deltasociety.xyz
            </a>
            {t.apply.contactLink}
          </p>
        </div>
      </div>
    </section>
  );
}
