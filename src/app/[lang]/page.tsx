import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { team } from "@/data/team";
import JoinUsSection from "@/components/JoinUsSection";

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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-[-0.03em] mb-6 animate-fade-in-up animate-delay-100">
            {t.hero.title1}
            <br />
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
                {member.sns.linkedin && (
                  <a href={member.sns.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-ds-accent transition-colors text-sm" aria-label={`${member.name} LinkedIn`}>
                    LinkedIn →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join Us ── */}
      <JoinUsSection lang={lang} />

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
