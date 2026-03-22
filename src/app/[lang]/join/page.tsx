import { type Locale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { NewsletterForm } from "@/components/NewsletterForm";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// community.items order: Research, Builders, Event, Camp
const joinLinks = [
  { mailto: true, subject: "RESEARCH" },
  { mailto: true, subject: "BUILDERS" },
  { external: "https://lu.ma/deltasociety" },
  { mailto: true, subject: "CAMP" },
];

export default async function JoinPage({
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
      <section className="bg-ds-primary text-white min-h-[40vh] flex items-center">
        <div className="max-w-[var(--container-max)] mx-auto px-6 py-24 md:py-32">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-6">
            {t.join.label}
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-[1.1] tracking-[-0.03em] mb-6">
            {t.join.title}
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
            Delta Society에 함께하고 싶다면
          </p>
        </div>
      </section>

      {/* ── Editorial list ── */}
      <section className="bg-ds-primary text-white">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="divide-y divide-white/10">
            {t.community.items.map((item, i) => {
              const linkDef = joinLinks[i];
              const isExternal = "external" in linkDef && linkDef.external;
              const href = isExternal
                ? (linkDef as { external: string }).external
                : `mailto:zoon@deltasociety.xyz?subject=${(linkDef as { subject: string }).subject}`;
              const isMailto = "mailto" in linkDef && linkDef.mailto;

              return (
                <a
                  key={item.tag}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-start md:items-center justify-between py-8 md:py-10 hover:bg-white/[0.03] -mx-6 px-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
                >
                  <div className="flex-1">
                    <p className="text-ds-accent font-heading font-semibold text-xs tracking-wider uppercase mb-2">
                      {item.tag}
                    </p>
                    <p className="text-white text-lg md:text-xl font-medium leading-snug mb-1">
                      {item.title}
                    </p>
                    <p className="text-white/50 text-sm">
                      {item.stat}
                    </p>
                  </div>
                  <div className="ml-6 mt-1 md:mt-0 text-white/30 group-hover:text-ds-accent group-hover:translate-x-1 transition-all shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      {isExternal
                        ? <path d="M7 17L17 7M17 7H7M17 7v10" />
                        : isMailto
                          ? <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

      {/* ── Newsletter ── */}
      <section className="bg-ds-primary text-white py-16 md:py-24">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
              Newsletter
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t.join.newsletterDesc}
            </h2>

            <div className="mt-8">
              <NewsletterForm t={t} />
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <a
                href="mailto:zoon@deltasociety.xyz"
                className="text-white/50 hover:text-white transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
              >
                {t.join.talkLabel} →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
