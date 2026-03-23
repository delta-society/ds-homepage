import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";

export default function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="bg-ds-primary text-white border-t border-white/[0.04]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 py-16">
        {/* Brand + Links */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-14">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Delta Society"
              width={150}
              height={35}
              className="mb-4"
            />
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <nav className="flex flex-col gap-3.5 text-[0.8125rem]">
              <Link href={`/${lang}#about`} className="text-white/50 hover:text-ds-spark transition-colors duration-200">
                {t.nav.about}
              </Link>
              <Link href={`/${lang}#community`} className="text-white/50 hover:text-ds-spark transition-colors duration-200">
                {t.nav.community}
              </Link>
              <Link href={`/${lang}#join`} className="text-white/50 hover:text-ds-spark transition-colors duration-200">
                {t.nav.joinUs}
              </Link>
            </nav>

            <nav className="flex flex-col gap-3.5 text-[0.8125rem]">
              <Link href={`/${lang}/camp`} className="text-white/50 hover:text-ds-spark transition-colors duration-200">
                Camp
              </Link>
              <Link href={`/${lang}/research`} className="text-white/50 hover:text-ds-spark transition-colors duration-200">
                Research
              </Link>
              <Link href={`/${lang}/builders`} className="text-white/50 hover:text-ds-spark transition-colors duration-200">
                Builders
              </Link>
            </nav>

            <nav className="flex flex-col gap-3.5 text-[0.8125rem]">
              <a
                href="https://lu.ma/deltasociety"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-ds-spark transition-colors duration-200"
              >
                Events ↗
              </a>
              <a
                href="mailto:zoon@deltasociety.xyz"
                className="text-white/50 hover:text-ds-spark transition-colors duration-200"
              >
                {t.join.partnership}
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.75rem] text-white/50">
            © 2026 Delta Society. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com/company/delta-society-xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-ds-spark transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
