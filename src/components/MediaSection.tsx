"use client";

import { useEffect, useState } from "react";
import { media as staticMedia, type MediaItem } from "@/data/media";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

const typeBadge: Record<string, { label: string; color: string }> = {
  blog: { label: "Blog", color: "bg-ds-accent text-ds-primary" },
  podcast: { label: "Podcast", color: "bg-ds-spark text-ds-primary" },
  youtube: { label: "YouTube", color: "bg-red-500 text-white" },
  newsletter: { label: "Newsletter", color: "bg-ds-primary text-white" },
  linkedin: { label: "LinkedIn", color: "bg-blue-600 text-white" },
  x: { label: "X", color: "bg-ds-primary text-white" },
  other: { label: "Other", color: "bg-ds-text-muted text-white" },
};

function mapSupabaseToMedia(row: Record<string, unknown>): MediaItem {
  const channel = (row.channel as string) || "other";
  let type: MediaItem["type"] = "blog";
  if (channel === "youtube" || channel === "podcast") type = channel;
  else if (channel === "linkedin" || channel === "x") type = "newsletter";
  else type = "blog";

  return {
    title: (row.title as string) || "",
    type,
    author: (row.member as string) || "Delta Society",
    url: (row.url as string) || "#",
    date: ((row.published_at as string) || "").slice(0, 10),
    description: "",
  };
}

export function MediaSection({ lang, t }: { lang: Locale; t: Dictionary }) {
  const [items, setItems] = useState<MediaItem[]>(staticMedia);

  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) return;

    fetch(
      `${supabaseUrl}/rest/v1/content_log?status=eq.published&order=published_at.desc&limit=6`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      }
    )
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: Record<string, unknown>[]) => {
        if (data.length > 0) {
          setItems(data.map(mapSupabaseToMedia));
        }
      })
      .catch(() => {
        // Silently fall back to static data
      });
  }, []);

  return (
    <section id="media" className="py-24 md:py-32">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
          {t.media.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">{t.media.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const badge = typeBadge[item.type] || typeBadge.other;
            const hasLink = item.url !== "#";
            const Tag = hasLink ? "a" : "div";
            const linkProps = hasLink
              ? {
                  href: item.url,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Tag
                key={item.title}
                {...linkProps}
                className="border border-ds-primary/10 rounded-xl p-6 hover:border-ds-spark transition-colors group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badge.color}`}>
                    {badge.label}
                  </span>
                  <span className="text-xs text-ds-text-muted">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-ds-primary transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-ds-text-muted leading-relaxed mb-3">
                    {item.description}
                  </p>
                )}
                <p className="text-xs text-ds-text-muted">{item.author}</p>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
