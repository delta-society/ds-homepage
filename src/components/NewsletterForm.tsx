"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";

export function NewsletterForm({ t }: { t: Dictionary }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // Loops API — newsletter delivery
      const loopsKey = process.env.NEXT_PUBLIC_LOOPS_API_KEY;
      const loopsPromise = loopsKey
        ? fetch("https://app.loops.so/api/v1/contacts/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${loopsKey}`,
            },
            body: JSON.stringify({
              email,
              source: "ds-homepage",
              subscribed: true,
            }),
          })
        : Promise.resolve(null);

      // Supabase — CRM record
      const supabasePromise =
        supabaseUrl && supabaseKey
          ? fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                apikey: supabaseKey,
                Authorization: `Bearer ${supabaseKey}`,
                Prefer: "return=minimal",
              },
              body: JSON.stringify({
                email,
                source: "ds-homepage",
                subscribed_at: new Date().toISOString(),
              }),
            })
          : Promise.resolve(null);

      // Fire both in parallel — Loops is primary
      const [loopsRes] = await Promise.all([loopsPromise, supabasePromise]);

      if (!loopsRes || loopsRes.ok || loopsRes.status === 200 || loopsRes.status === 409) {
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
