import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import type { ProgramCategory } from "@/data/programs";
import { FALLBACK_CONTACT } from "@/data/programs";
import StatusBadge from "./StatusBadge";
import { NewsletterForm } from "./NewsletterForm";

interface ProgramPageLayoutProps {
  lang: Locale;
  t: Dictionary;
  category: ProgramCategory;
}

export default function ProgramPageLayout({ lang, t, category }: ProgramPageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-ds-primary text-white" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6 py-24 md:py-32 w-full">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-6" aria-hidden="true">
            {category.icon}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-[-0.03em] mb-6">
            {category.label}
          </h1>
          <p className="text-xl md:text-2xl text-ds-accent font-heading font-medium mb-4">
            {category.tagline[lang]}
          </p>
          <p className="text-lg text-white/70 max-w-lg leading-relaxed">
            {category.description[lang]}
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24 bg-ds-secondary">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <p className="text-ds-text-muted font-heading font-semibold text-sm tracking-wider uppercase mb-4">
            {t.programs.label}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {category.programs.map((program) => (
              <div
                key={program.id}
                className="border border-ds-primary/10 rounded-xl p-6 hover:border-ds-spark transition-colors flex flex-col bg-white"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-lg font-bold">{program.name[lang]}</h2>
                    <p className="text-ds-text-muted text-sm">{program.subtitle[lang]}</p>
                  </div>
                  <StatusBadge status={program.status} lang={lang} />
                </div>

                <p className="text-ds-text-body text-sm leading-relaxed mb-6 flex-1">
                  {program.copy[lang]}
                </p>

                {program.status === "recruiting" && (
                  <a
                    href={
                      program.ctaUrl ||
                      `mailto:${FALLBACK_CONTACT}?subject=${encodeURIComponent(program.name[lang])}`
                    }
                    target={program.ctaUrl ? "_blank" : undefined}
                    rel={program.ctaUrl ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center gap-2 bg-ds-primary text-white px-5 py-2.5 text-sm font-semibold rounded-md hover:bg-ds-primary-light transition-colors w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
                  >
                    {program.ctaLabel[lang]}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Newsletter note */}
          <p className="mt-8 text-sm text-ds-text-muted">
            * {t.programs.newsletterNote}
          </p>

          {/* Contact fallback */}
          <p className="mt-3 text-sm text-ds-text-muted">
            {t.programs.contact}:{" "}
            <a
              href={`mailto:${FALLBACK_CONTACT}`}
              className="underline hover:text-ds-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
            >
              {FALLBACK_CONTACT}
            </a>
          </p>
        </div>
      </section>

      {/* Join section */}
      <section className="py-16 md:py-24 bg-ds-primary text-white">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
              {t.join.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.join.title}</h2>
            <p className="text-white/70 text-lg mb-8">{t.join.newsletterDesc}</p>
            <NewsletterForm t={t} />
          </div>
        </div>
      </section>
    </>
  );
}
