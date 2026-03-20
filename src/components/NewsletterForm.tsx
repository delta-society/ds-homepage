"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";
import { config } from "@/lib/config";

export function NewsletterForm({ t }: { t: Dictionary }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      // Loops API — contact creation endpoint (publishable, client-safe)
      const res = await fetch(config.loops.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.loops.apiKey}`,
        },
        body: JSON.stringify({
          email,
          source: "ds-homepage",
          subscribed: true,
        }),
      });

      if (res.ok || res.status === 409) {
        // 409 = already exists, still a success
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
