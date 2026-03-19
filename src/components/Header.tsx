"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-ds-primary text-white sticky top-0 z-50">
      <div className="max-w-[var(--container-max)] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
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
          <Link
            href="/#about"
            className="text-sm font-medium text-white/80 hover:text-ds-spark transition-colors"
          >
            About
          </Link>
          <Link
            href="/#team"
            className="text-sm font-medium text-white/80 hover:text-ds-spark transition-colors"
          >
            Team
          </Link>
          <Link
            href="/#media"
            className="text-sm font-medium text-white/80 hover:text-ds-spark transition-colors"
          >
            Media
          </Link>
          <Link
            href="/#events"
            className="text-sm font-medium text-white/80 hover:text-ds-spark transition-colors"
          >
            Events
          </Link>
          <Link
            href="/apply"
            className="bg-ds-accent text-ds-primary px-5 py-2 text-sm font-semibold rounded-lg hover:bg-ds-spark transition-colors"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link
            href="/#about"
            className="text-sm text-white/80 hover:text-ds-spark"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#team"
            className="text-sm text-white/80 hover:text-ds-spark"
            onClick={() => setMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            href="/#media"
            className="text-sm text-white/80 hover:text-ds-spark"
            onClick={() => setMenuOpen(false)}
          >
            Media
          </Link>
          <Link
            href="/#events"
            className="text-sm text-white/80 hover:text-ds-spark"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/apply"
            className="bg-ds-accent text-ds-primary px-5 py-2 text-sm font-semibold rounded-lg text-center hover:bg-ds-spark"
            onClick={() => setMenuOpen(false)}
          >
            Join Us
          </Link>
        </nav>
      )}
    </header>
  );
}
