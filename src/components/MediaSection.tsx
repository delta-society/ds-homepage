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
  x: { label: "X/Threads", color: "bg-ds-primary text-white" },
  other: { label: "Other", color: "bg-ds-text-muted text-white" },
};

interface LeaderboardItem {
  title: string;
  url: string;
  channel: string;
  content_type: string;
  member: string;
  published_at: string;
  is_original: boolean;
}

function mapToMedia(item: LeaderboardItem): MediaItem {
  const channelMap: Record<string, MediaItem["type"]> = {
    blog: "blog",
    youtube: "youtube",
    podcast: "podcast",
    linkedin: "newsletter",
    x: "newsletter",
    other: "blog",
  };

  return {
    title: item.title,
    type: channelMap[item.channel] || "blog",
    author: item.member,
    url: item.url,
    date: item.published_at?.slice(0, 10) || "",
    description: "",
  };
}

export function MediaSection({ lang, t }: { lang: Locale; t: Dictionary }) {
  const [items, setItems] = useState<MediaItem[]>(staticMedia);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://media-play-leaderboard.vercel.app/api/content?limit=30")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: { items: LeaderboardItem[] }) => {
        if (data.items && data.items.length > 0) {
          // Filter: only originals (5pt) for homepage showcase
          const originals = data.items
            .filter((i) => i.is_original && i.url)
            .slice(0, 6)
            .map(mapToMedia);

          if (originals.length >= 3) {
            setItems(originals);
          }
        }
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  return (
    <section id="media" className="py-24 md:py-32">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
          {t.media.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">{t.media.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const badge = typeBadge[item.type] || typeBadge.other;

            return (
              <a
                key={`${item.title}-${idx}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ds-primary/10 rounded-xl p-6 hover:border-ds-spark transition-colors group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${badge.color}`}
                  >
                    {badge.label}
                  </span>
                  <span className="text-xs text-ds-text-muted">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-ds-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-ds-text-muted leading-relaxed mb-3">
                    {item.description}
                  </p>
                )}
                <p className="text-xs text-ds-text-muted capitalize">{item.author}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
