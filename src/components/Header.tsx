"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";

export default function Header({ lang, t }: { lang: Locale; t: Dictionary }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const otherLang: Locale = lang === "ko" ? "en" : "ko";
  const switchPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  const navLinks = [
    { href: `/${lang}#about`, label: t.nav.about },
    { href: `/${lang}#team`, label: t.nav.team },
    { href: `/${lang}#join-us`, label: t.nav.joinUs },
    { href: `/${lang}#events`, label: t.nav.events },
  ];

  return (
    <header className="bg-ds-primary text-white sticky top-0 z-50">
      <div className="max-w-[var(--container-max)] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <Image
            src="/images/logo-primary.svg"
            alt="Delta Society"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-ds-spark transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Toggle */}
          <Link
            href={switchPath}
            className="text-xs font-medium text-white/50 hover:text-white border border-white/20 px-3 py-1.5 rounded-md transition-colors"
          >
            {otherLang === "en" ? "EN" : "KO"}
          </Link>

          <Link
            href={`/${lang}/apply`}
            className="bg-ds-secondary text-ds-primary px-5 py-2 text-sm font-semibold rounded-md hover:bg-white transition-colors"
          >
            {t.nav.joinUs}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/80 hover:text-ds-spark"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={switchPath}
            className="text-sm text-white/50 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            {otherLang === "en" ? "Switch to English" : "한국어로 전환"}
          </Link>
          <Link
            href={`/${lang}/apply`}
            className="bg-ds-secondary text-ds-primary px-5 py-2 text-sm font-semibold rounded-md text-center hover:bg-white"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.joinUs}
          </Link>
        </nav>
      )}
    </header>
  );
}
