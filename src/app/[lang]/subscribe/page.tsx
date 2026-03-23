"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

const LOOPS_FORM_ID = "cmmno77qr00a70ixge5tkwtfg";
const MAILING_LIST_ID = "cmmnojgke00q00iyohcck1y9x";

export default function SubscribePage() {
  const { lang: rawLang } = useParams<{ lang: string }>();
  const lang = (rawLang === "en" ? "en" : "ko") as Locale;
  const t = getDictionary(lang);
  const s = t.subscribe;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "rateLimit"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    // Client-side rate limit (60s)
    const now = Date.now();
    const prev = localStorage.getItem("loops-form-timestamp");
    if (prev && Number(prev) + 60000 > now) {
      setStatus("rateLimit");
      return;
    }
    localStorage.setItem("loops-form-timestamp", String(now));

    setStatus("loading");

    try {
      const res = await fetch(
        `https://app.loops.so/api/newsletter-form/${LOOPS_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            email,
            userGroup: "",
            mailingLists: MAILING_LIST_ID,
          }),
        }
      );

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative bg-ds-primary text-white min-h-[85vh] flex items-center overflow-hidden grain">
      <div className="hero-glow" />
      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-6 py-32 md:py-40 flex flex-col items-center text-center">
        {/* Label */}
        <p className="text-ds-accent/80 font-heading font-medium text-[0.8125rem] tracking-[0.2em] uppercase mb-8 animate-fade-in-up">
          {s.label}
        </p>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.05] tracking-[-0.04em] mb-6 animate-fade-in-up animate-delay-100">
          {s.title}
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-ds-accent/60 font-heading font-medium leading-snug mb-6 whitespace-pre-line animate-fade-in-up animate-delay-150">
          {s.subtitle}
        </p>

        {/* Description */}
        <p className="text-[1.0625rem] md:text-lg text-white/50 max-w-lg leading-relaxed font-light mb-12 animate-fade-in-up animate-delay-200">
          {s.description}
        </p>

        {/* Form */}
        {status === "success" ? (
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-ds-accent/10 border border-ds-accent/20 rounded-xl px-8 py-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-ds-accent shrink-0"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <p className="text-ds-accent text-[0.9375rem]">{s.success}</p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md animate-fade-in-up animate-delay-300"
          >
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error" || status === "rateLimit")
                    setStatus("idle");
                }}
                placeholder={s.placeholder}
                required
                disabled={status === "loading"}
                className="newsletter-input flex-1 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="newsletter-btn disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? s.submitting : s.cta}
              </button>
            </div>

            {/* Error / Rate limit */}
            {(status === "error" || status === "rateLimit") && (
              <p className="text-red-400 text-sm mt-3">
                {status === "rateLimit" ? s.rateLimit : s.error}
              </p>
            )}

            {/* Privacy note */}
            <p className="text-white/25 text-xs mt-4">{s.privacy}</p>
          </form>
        )}

        {/* Back link */}
        <Link
          href={`/${lang}`}
          className="mt-12 text-white/30 hover:text-ds-accent transition-colors text-sm animate-fade-in-up animate-delay-300"
        >
          ← {s.backToHome}
        </Link>
      </div>
    </section>
  );
}
