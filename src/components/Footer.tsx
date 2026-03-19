import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { NewsletterForm } from "./NewsletterForm";

export default function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="bg-ds-primary text-white">
      <div className="max-w-[var(--container-max)] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo-primary.svg"
              alt="Delta Society"
              width={140}
              height={32}
              className="mb-4"
            />
            <p className="text-white/60 text-sm max-w-md leading-relaxed">
              {t.footer.tagline}
              <br />
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 text-white/40 uppercase tracking-wider">
              {t.footer.navigate}
            </h4>
            <ul className="space-y-3">
              {[
                { href: `/${lang}#about`, label: t.nav.about },
                { href: `/${lang}#team`, label: t.nav.team },
                { href: `/${lang}#events`, label: t.nav.events },
                { href: `/${lang}/apply`, label: t.nav.joinUs },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-ds-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 text-white/40 uppercase tracking-wider">
              {t.footer.stayUpdated}
            </h4>
            <p className="text-sm text-white/60 mb-4">
              {t.footer.newsletterDesc}
            </p>
            <NewsletterForm t={t} />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Delta Society. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/company/deltasociety" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ds-accent transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com/deltasociety" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ds-accent transition-colors" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://youtube.com/@deltasociety" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ds-accent transition-colors" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
