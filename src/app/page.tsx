import Link from "next/link";
import { team } from "@/data/team";
import { media } from "@/data/media";
import { events } from "@/data/events";

const typeBadge: Record<string, { label: string; color: string }> = {
  blog: { label: "Blog", color: "bg-ds-accent text-ds-primary" },
  podcast: { label: "Podcast", color: "bg-ds-spark text-ds-primary" },
  youtube: { label: "YouTube", color: "bg-red-500 text-white" },
  newsletter: { label: "Newsletter", color: "bg-ds-primary text-white" },
};

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-ds-primary text-white min-h-[80vh] flex items-center">
        <div className="max-w-[var(--container-max)] mx-auto px-6 py-24 md:py-32">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-6 animate-fade-in-up">
            Delta Society
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-8 animate-fade-in-up animate-delay-100">
            Where Outliers
            <br />
            <span className="text-ds-accent">Connect & Build</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 animate-fade-in-up animate-delay-200">
            변화의 최전선에 있는 아웃라이어들이 모여
            <br className="hidden md:block" />
            지식을 나누고 함께 만드는 커뮤니티.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href="/apply"
              className="bg-ds-accent text-ds-primary px-8 py-3.5 font-heading font-semibold rounded-lg hover:bg-ds-spark transition-colors text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
            >
              Join the Club
            </Link>
            <Link
              href="/#events"
              className="border border-white/30 text-white px-8 py-3.5 font-heading font-semibold rounded-lg hover:bg-white/10 transition-colors text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* ── About / What We Do ── */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              아웃라이어를 위한
              <br />
              지식 기반 네트워크
            </h2>
            <p className="text-lg text-ds-text-body leading-relaxed mb-12">
              Delta Society는 변화를 만드는 사람들 — 창업자, 빌더, 투자자 —이
              모여 날카로운 지식을 나누고 함께 사업을 만드는 커뮤니티입니다.
              기존 네트워크의 형식적인 교류가 아닌, 실질적인 인사이트와 기회의
              순환을 만듭니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Delta Capture",
                subtitle: "포착",
                desc: "시장의 변화 신호를 가장 먼저 감지하고 공유합니다. 아웃라이어의 시선으로 남들이 보지 못하는 기회를 포착합니다.",
                icon: "◈",
              },
              {
                title: "Prime Knowledge",
                subtitle: "지식",
                desc: "검증된 지식을 축적하고 순환시킵니다. Monthly Delta, GTM Roundtable, Beyond Product 등 다양한 포맷으로 인사이트를 나눕니다.",
                icon: "◇",
              },
              {
                title: "Co-builder",
                subtitle: "공동사업",
                desc: "지식의 교류에서 끝나지 않고, 함께 사업을 만듭니다. 아웃라이어끼리 연결되어 실제 가치를 창출합니다.",
                icon: "△",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-ds-primary/10 rounded-xl p-8 hover:border-ds-spark transition-colors group"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-ds-text-muted text-sm mb-4">
                  {item.subtitle}
                </p>
                <p className="text-ds-text-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-24 md:py-32 bg-ds-primary">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
            Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            People Behind Delta
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="border border-white/10 rounded-xl p-8 hover:border-ds-accent/50 transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 mb-6 flex items-center justify-center text-2xl font-heading font-bold text-ds-accent">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-ds-accent text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  {member.sns.linkedin && (
                    <a
                      href={member.sns.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-ds-accent transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {member.sns.twitter && (
                    <a
                      href={member.sns.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-ds-accent transition-colors"
                      aria-label={`${member.name} X`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media ── */}
      <section id="media" className="py-24 md:py-32">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
            From Delta Society
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Latest from Our Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {media.map((item) => {
              const badge = typeBadge[item.type];
              const hasLink = item.url !== "#";
              const Tag = hasLink ? "a" : "div";
              const linkProps = hasLink
                ? { href: item.url, target: "_blank" as const, rel: "noopener noreferrer" }
                : {};
              return (
                <Tag
                  key={item.title}
                  {...linkProps}
                  className="border border-ds-primary/10 rounded-xl p-6 hover:border-ds-spark transition-colors group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                    <span className="text-xs text-ds-text-muted">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-ds-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ds-text-muted leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-xs text-ds-text-muted">{item.author}</p>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Events ── */}
      <section id="events" className="py-24 md:py-32 bg-ds-secondary-alt">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
            Events
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.title}
                className="bg-white border border-ds-primary/10 rounded-xl p-8 hover:border-ds-spark transition-colors"
              >
                <p className="text-ds-accent font-heading font-semibold text-sm mb-2">
                  {event.date}
                </p>
                <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                <p className="text-ds-text-body text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
                <a
                  href={event.lumaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ds-primary text-white px-6 py-2.5 text-sm font-semibold rounded-lg hover:bg-ds-primary-light transition-colors"
                >
                  Register on Luma
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 md:py-32 bg-ds-primary text-white text-center">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Are You an Outlier?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-12">
            변화를 만드는 사람이라면, Delta Society에서 함께하세요.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-ds-accent text-ds-primary px-10 py-4 font-heading font-semibold text-lg rounded-lg hover:bg-ds-spark transition-colors"
          >
            Apply to Join
          </Link>
        </div>
      </section>
    </>
  );
}
