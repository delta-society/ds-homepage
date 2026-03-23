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

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  const navLinks = [
    { href: isHome ? "#about" : `/${lang}#about`, label: t.nav.about },
    { href: isHome ? "#community" : `/${lang}#community`, label: t.nav.community },
    { href: isHome ? "#join" : `/${lang}#join`, label: t.nav.joinUs },
  ];

  return (
    <header className="bg-ds-primary/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/[0.04]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <Image
            src="/images/logo-primary.svg"
            alt="Delta Society"
            width={130}
            height={30}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.8125rem] font-medium text-white/60 hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
            >
              {link.label}
            </a>
          ))}

          <Link
            href={switchPath}
            className="text-[0.6875rem] font-medium text-white/40 hover:text-white/80 border border-white/10 px-3 py-1.5 rounded-lg transition-all duration-200 hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
          >
            {otherLang === "en" ? "EN" : "KO"}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/[0.06] px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href={switchPath}
            className="text-sm text-white/40 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
            onClick={() => setMenuOpen(false)}
          >
            {otherLang === "en" ? "Switch to English" : "한국어로 전환"}
          </Link>
        </nav>
      )}
    </header>
  );
}
