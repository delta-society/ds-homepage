import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { team } from "@/data/team";

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
      {/* ── 1. Hero ── */}
      <section className="bg-ds-primary text-white min-h-[80vh] flex items-center">
        <div className="max-w-[var(--container-max)] mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-6 animate-fade-in-up">
            {t.hero.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-[-0.03em] mb-6 animate-fade-in-up animate-delay-100">
            {t.hero.title1}
            <br />
            <span className="text-ds-accent">{t.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed animate-fade-in-up animate-delay-200">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* ── 2. About / What We Do ── */}
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
                <span className="text-3xl mb-4 block" aria-hidden="true">{pillarIcons[i]}</span>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-ds-text-muted text-sm mb-4">{item.subtitle}</p>
                <p className="text-ds-text-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Team ── */}
      <section id="team" className="py-16 md:py-24 bg-ds-primary text-white">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <p className="text-white/50 font-heading font-semibold text-sm tracking-wider uppercase mb-4">
            {t.team.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
            {t.team.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group border border-white/10 rounded-xl p-8 hover:border-ds-spark transition-colors"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-2xl font-heading font-bold text-ds-accent mb-2">{member.keyword}</p>
                <h3 className="text-xl font-bold mb-0.5 text-white">{member.nameKo}</h3>
                <p className="text-white/50 text-sm mb-4">{member.name}</p>
                {member.sns.linkedin && (
                  <a
                    href={member.sns.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-ds-accent transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
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
    </>
  );
}
