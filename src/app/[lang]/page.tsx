import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { NewsletterForm } from "@/components/NewsletterForm";

const categoryCards = [
  {
    key: "camp" as const,
    icon: "△",
    path: "camp",
  },
  {
    key: "builders" as const,
    icon: "◇",
    path: "builders",
  },
  {
    key: "research" as const,
    icon: "◈",
    path: "research",
  },
];

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "en" ? "en" : "ko") as Locale;
  const t = getDictionary(lang);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-ds-primary text-white">
        <div className="max-w-[var(--container-max)] mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-6 animate-fade-in-up">
            {t.hero.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-[-0.03em] mb-6 animate-fade-in-up animate-delay-100">
            {t.hero.title1}
            <br />
            <span className="text-ds-accent">{t.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-lg mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#programs"
              className="bg-ds-secondary text-ds-primary px-8 py-4 font-heading font-semibold rounded-md hover:bg-white transition-colors text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#newsletter"
              className="border-2 border-white/30 text-white px-8 py-4 font-heading font-semibold rounded-md hover:bg-white/10 transition-colors text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* ── Three Paths ── */}
      <section id="programs" className="py-16 md:py-24 bg-ds-secondary">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <p className="text-ds-text-muted font-heading font-semibold text-sm tracking-wider uppercase mb-4">
            {t.programs.label}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {categoryCards.map((card) => {
              const prog = t.programs[card.key];
              return (
                <Link
                  key={card.key}
                  href={`/${lang}/${card.path}`}
                  className="group border border-ds-primary/10 rounded-xl p-8 hover:border-ds-spark transition-colors flex flex-col bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
                >
                  <span className="text-3xl mb-4 block" aria-hidden="true">{card.icon}</span>
                  <h2 className="text-xl font-bold mb-2">{prog.title}</h2>
                  <p className="text-ds-accent font-medium text-sm mb-3">{prog.tagline}</p>
                  <p className="text-ds-text-body text-sm leading-relaxed flex-1">{prog.desc}</p>
                  <div className="mt-6 flex items-center gap-1 text-ds-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>{prog.title}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section id="newsletter" className="py-16 md:py-24 bg-ds-primary text-white">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
              {t.newsletter.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.newsletter.title}</h2>
            <p className="text-white/70 text-lg mb-8">{t.newsletter.description}</p>
            <NewsletterForm t={t} />
            <div className="mt-6">
              <a
                href="https://lu.ma/deltasociety"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ds-accent hover:text-white transition-colors text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
              >
                {t.newsletter.eventsLink}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
