import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { team } from "@/data/team";
import { NewsletterForm } from "@/components/NewsletterForm";

const pillarIcons = [
  { symbol: "△", bg: "bg-ds-accent/[0.07]", color: "text-ds-accent" },
  { symbol: "◇", bg: "bg-ds-spark/[0.07]", color: "text-ds-spark" },
  { symbol: "◈", bg: "bg-white/[0.07]", color: "text-ds-text-heading" },
];

const communityLinks = [
  { path: "research", external: false },
  { path: "builders", external: false },
  { path: "https://lu.ma/deltasociety", external: true },
  { path: "camp", external: false },
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
      {/* ── 1. Hero ── */}
      <section className="relative bg-ds-primary text-white min-h-[85vh] flex items-center overflow-hidden grain">
        <div className="hero-glow" />
        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-6 py-32 md:py-40 flex flex-col items-center text-center">
          <p className="text-ds-accent/80 font-heading font-medium text-[0.8125rem] tracking-[0.2em] uppercase mb-8 animate-fade-in-up">
            {t.hero.subtitle}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.05] tracking-[-0.04em] mb-8 animate-fade-in-up animate-delay-100">
            {t.hero.title1}
            <br />
            <span className="text-ds-accent">{t.hero.title2}</span>
          </h1>
          <p className="text-[1.125rem] md:text-xl text-white/50 max-w-md leading-relaxed font-light animate-fade-in-up animate-delay-200">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* ── 2. About / What We Do ── */}
      <section id="about" className="relative py-24 md:py-32 grain-light overflow-hidden">
        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-ds-text-muted font-heading font-semibold text-[0.75rem] tracking-[0.2em] uppercase mb-5">
              {t.about.label}
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold mb-6 leading-[1.1]">
              {t.about.title}
            </h2>
            <p className="text-[1.0625rem] text-ds-text-body/80 leading-[1.7]">
              {t.about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.pillars.map((item, i) => (
              <div key={item.title} className="pillar-card">
                <div className={`pillar-icon ${pillarIcons[i].bg}`}>
                  <span className={`${pillarIcons[i].color} text-xl`} aria-hidden="true">
                    {pillarIcons[i].symbol}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1 text-ds-text-heading">{item.title}</h3>
                <p className="text-ds-text-muted text-[0.8125rem] mb-4 font-medium">{item.subtitle}</p>
                <p className="text-ds-text-body/70 text-[0.9375rem] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Community ── */}
      <section id="community" className="relative bg-ds-primary text-white py-24 md:py-32 grain overflow-hidden">
        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-6">
          <p className="text-ds-accent/80 font-heading font-semibold text-[0.75rem] tracking-[0.2em] uppercase mb-16">
            {t.community.label}
          </p>
          <div className="divide-y divide-white/[0.06]">
            {t.community.items.map((item, i) => {
              const link = communityLinks[i];
              const isExternal = link.external;
              const href = isExternal ? link.path : `/${lang}/${link.path}`;

              return (
                <a
                  key={item.tag}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="community-row group flex items-start md:items-center justify-between py-10 md:py-12 -mx-6 px-6 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
                >
                  <div className="flex-1">
                    <p className="text-ds-accent font-heading font-semibold text-[0.6875rem] tracking-[0.2em] uppercase mb-3">
                      {item.tag}
                    </p>
                    <p className="text-white text-xl md:text-2xl font-medium leading-snug tracking-[-0.01em]">
                      {item.title}
                    </p>
                  </div>
                  <div className="ml-8 mt-1 md:mt-0 text-white/20 group-hover:text-ds-accent group-hover:translate-x-1.5 transition-all duration-300 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      {isExternal
                        ? <path d="M7 17L17 7M17 7H7M17 7v10" />
                        : <path d="M5 12h14M12 5l7 7-7 7" />
                      }
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Team ── */}
      <section id="team" className="relative py-24 md:py-32 grain-light overflow-hidden">
        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-6">
          <p className="text-ds-text-muted font-heading font-semibold text-[0.75rem] tracking-[0.2em] uppercase mb-5">
            {t.team.label}
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold mb-16 leading-[1.1]">
            {t.team.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="team-card group">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-xl font-heading font-bold text-ds-accent/80 mb-3 tracking-[-0.01em]">{member.keyword}</p>
                <h3 className="text-lg font-bold mb-0.5 text-ds-text-heading">{member.nameKo}</h3>
                <p className="text-ds-text-muted text-sm mb-5">{member.name}</p>
                {member.sns.linkedin && (
                  <a
                    href={member.sns.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ds-text-muted hover:text-ds-primary transition-colors text-[0.8125rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Join Us ── */}
      <section id="join" className="relative bg-ds-primary text-white py-24 md:py-32 grain overflow-hidden">
        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-ds-accent/80 font-heading font-medium text-[0.75rem] tracking-[0.2em] uppercase mb-5">
              {t.join.label}
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold mb-4 leading-[1.1]">{t.join.title}</h2>
            <p className="text-white/50 text-[1.0625rem] mb-10 leading-relaxed">{t.join.newsletterDesc}</p>

            <NewsletterForm t={t} />

            <div className="mt-12 pt-10 border-t border-white/[0.06]">
              <p className="text-white/35 text-sm mb-4">{t.join.programsLabel}</p>
              <div className="flex flex-wrap gap-5">
                <Link
                  href={`/${lang}/camp`}
                  className="text-ds-accent/80 hover:text-white transition-colors text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
                >
                  Camp →
                </Link>
                <Link
                  href={`/${lang}/research`}
                  className="text-ds-accent/80 hover:text-white transition-colors text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
                >
                  Research →
                </Link>
                <Link
                  href={`/${lang}/builders`}
                  className="text-ds-accent/80 hover:text-white transition-colors text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
                >
                  Builders →
                </Link>
                <a
                  href="mailto:zoon@deltasociety.xyz"
                  className="text-white/35 hover:text-white transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
                >
                  {t.join.talkLabel} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
