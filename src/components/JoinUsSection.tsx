import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { getDictionary } from "@/i18n";
import { programCategories, FALLBACK_CONTACT, type ProgramStatus } from "@/data/programs";

function StatusBadge({ status, lang }: { status: ProgramStatus; lang: Locale }) {
  const labels: Record<ProgramStatus, { ko: string; en: string }> = {
    recruiting: { ko: "모집중", en: "Open" },
    planning: { ko: "준비중", en: "Coming Soon" },
  };

  const colors: Record<ProgramStatus, string> = {
    recruiting: "bg-ds-accent text-ds-primary",
    planning: "bg-white/10 text-white/60",
  };

  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[status]}`}>
      {labels[status][lang]}
    </span>
  );
}

export default function JoinUsSection({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <section id="join-us" className="py-16 md:py-24">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <p className="text-ds-text-muted font-heading font-semibold text-sm tracking-wider uppercase mb-4">
          {t.joinUs.label}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">{t.joinUs.title}</h2>

        <div className="space-y-20">
          {programCategories.map((category) => (
            <div key={category.id}>
              {/* Category header */}
              <div className="mb-8">
                <span className="text-2xl mb-2 block" aria-hidden="true">{category.icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {category.tagline[lang]}
                </h3>
                <p className="text-ds-text-body text-base">
                  {category.description[lang]}
                </p>
              </div>

              {/* Program cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.programs.map((program) => (
                  <div
                    key={program.id}
                    className="border border-ds-primary/10 rounded-xl p-6 hover:border-ds-spark transition-colors flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold">{program.name[lang]}</h4>
                        <p className="text-ds-text-muted text-sm">{program.subtitle[lang]}</p>
                      </div>
                      <StatusBadge status={program.status} lang={lang} />
                    </div>

                    <p className="text-ds-text-body text-sm leading-relaxed mb-6 flex-1">
                      {program.copy[lang]}
                    </p>

                    {program.status === "recruiting" && (
                      <a
                        href={program.ctaUrl || `mailto:${FALLBACK_CONTACT}?subject=${encodeURIComponent(program.name[lang])}`}
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
            </div>
          ))}

          {/* Block 4: Contact + Events link */}
          <div className="border-t border-ds-primary/10 pt-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {t.joinUs.contactTitle}
            </h3>
            <p className="text-ds-text-body text-base mb-8 max-w-lg">
              {t.joinUs.contactDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${FALLBACK_CONTACT}`}
                className="inline-flex items-center justify-center gap-2 bg-ds-primary text-white px-8 py-3 font-heading font-semibold rounded-md hover:bg-ds-primary-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
              >
                {t.joinUs.contactCta}
              </a>
              <a
                href="https://lu.ma/deltasociety"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-ds-primary/20 text-ds-primary px-8 py-3 font-heading font-semibold rounded-md hover:bg-ds-primary/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
              >
                {t.joinUs.eventsCta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
