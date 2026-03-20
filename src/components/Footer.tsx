import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { NewsletterForm } from "./NewsletterForm";

export default function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="bg-ds-primary text-white">
      <div className="max-w-[var(--container-max)] mx-auto px-6 py-16">
        {/* Newsletter — single clean row */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/60">
              {t.footer.newsletterDesc}
            </p>
            <div className="w-full md:w-auto md:min-w-[360px]">
              <NewsletterForm t={t} />
            </div>
          </div>
        </div>

        {/* Brand + Links */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <Image
              src="/images/logo-primary.svg"
              alt="Delta Society"
              width={140}
              height={32}
              className="mb-3"
            />
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex gap-8 text-sm">
            <Link href={`/${lang}#about`} className="text-white/50 hover:text-white transition-colors">
              {t.nav.about}
            </Link>
            <Link href={`/${lang}#team`} className="text-white/50 hover:text-white transition-colors">
              {t.nav.team}
            </Link>
            <Link href={`/${lang}#events`} className="text-white/50 hover:text-white transition-colors">
              {t.nav.events}
            </Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © 2026 Delta Society. All rights reserved.
          </p>
          <a
            href="https://linkedin.com/company/deltasociety"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
