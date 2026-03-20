import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { team } from "@/data/team";
import { MediaSection } from "@/components/MediaSection";

const pillarIcons = ["◈", "◇", "△"];

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
      {/* ── Hero — S2 Website Hero: 단색 배경 + 타이포 중심 + 중앙 정렬 ── */}
      <section className="bg-ds-primary text-white">
        <div className="max-w-[var(--container-max)] mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-6 animate-fade-in-up">
            {t.hero.subtitle}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] tracking-[-0.03em] mb-6 animate-fade-in-up animate-delay-100">
            {t.hero.title1}{" "}
            <span className="text-ds-accent">{t.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-lg mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href={`/${lang}/apply`}
              className="bg-ds-secondary text-ds-primary px-8 py-4 font-heading font-semibold rounded-md hover:bg-white transition-colors text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
            >
              {t.hero.cta1}
            </Link>
            <Link
              href="#events"
              className="border-2 border-white/30 text-white px-8 py-4 font-heading font-semibold rounded-md hover:bg-white/10 transition-colors text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.hero.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* ── About / What We Do ── */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-ds-text-muted font-heading font-semibold text-sm tracking-wider uppercase mb-4">
              {t.about.label}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 whitespace-pre-line">
              {t.about.title}
            </h2>
            <p className="text-lg text-ds-text-body leading-relaxed mb-12">
              {t.about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {t.about.pillars.map((item, i) => (
              <div
                key={item.title}
                className="border border-ds-primary/10 rounded-xl p-8 hover:border-ds-spark transition-colors"
              >
                <span className="text-3xl mb-4 block">{pillarIcons[i]}</span>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-ds-text-muted text-sm mb-4">{item.subtitle}</p>
                <p className="text-ds-text-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-16 md:py-24 bg-ds-primary">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
            {t.team.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            {t.team.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="border border-white/10 rounded-xl p-8 hover:border-ds-accent/50 transition-colors"
              >
                <p className="text-4xl font-heading font-bold text-ds-accent mb-4">{member.keyword}</p>
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-ds-accent/30 mb-6">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-0.5">{member.nameKo}</h3>
                <p className="text-white/50 text-sm mb-2">{member.name}</p>
                <p className="text-ds-accent text-sm font-medium mb-6">{member.role}</p>
                <div className="flex gap-3">
                  {member.sns.linkedin && (
                    <a href={member.sns.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ds-accent transition-colors" aria-label={`${member.name} LinkedIn`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  )}
                  {member.sns.twitter && (
                    <a href={member.sns.twitter} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ds-accent transition-colors" aria-label={`${member.name} X`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media ── */}
      <MediaSection lang={lang} t={t} />

      {/* ── Events ── */}
      <section id="events" className="py-16 md:py-24 bg-ds-secondary-alt">
        <div className="max-w-[var(--container-max)] mx-auto px-6 text-center">
          <p className="text-ds-text-muted font-heading font-semibold text-sm tracking-wider uppercase mb-4">
            {t.events.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.events.title}</h2>
          <p className="text-ds-text-body text-lg mb-12 max-w-xl mx-auto">{t.events.description}</p>
          <a
            href="https://luma.com/deltasociety?k=c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ds-primary text-white px-8 py-4 font-heading font-semibold rounded-lg hover:bg-ds-primary-light transition-colors"
          >
            {t.events.register}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-24 bg-ds-primary text-white text-center">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-12">{t.cta.description}</p>
          <Link href={`/${lang}/apply`} className="inline-block bg-ds-secondary text-ds-primary px-10 py-4 font-heading font-semibold text-lg rounded-md hover:bg-white transition-colors">
            {t.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
