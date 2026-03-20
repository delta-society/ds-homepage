"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";

const LOOPS_FORM_ID = "cmmno77qr00a70ixge5tkwtfg";

export function NewsletterForm({ t }: { t: Dictionary }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      const res = await fetch(
        `https://app.loops.so/api/newsletter-form/${LOOPS_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email }),
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

  const buttonText =
    status === "loading"
      ? t.footer.subscribing
      : status === "success"
        ? t.footer.subscribed
        : status === "error"
          ? t.footer.errorSubscribe
          : t.footer.subscribe;

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading" || status === "success"}
        className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 flex-1 focus:outline-none focus:border-ds-accent transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="bg-ds-accent text-ds-primary px-4 py-2 text-sm font-semibold rounded-lg hover:bg-ds-spark transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {buttonText}
      </button>
    </form>
  );
}
