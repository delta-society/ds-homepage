import type { Locale } from "@/i18n/config";
import type { ProgramStatus } from "@/data/programs";

const labels: Record<ProgramStatus, { ko: string; en: string }> = {
  recruiting: { ko: "모집중", en: "Open" },
  planning: { ko: "준비중", en: "Coming Soon" },
};

const colors: Record<ProgramStatus, string> = {
  recruiting: "bg-ds-accent text-ds-primary",
  planning: "bg-white/10 text-white/60",
};

export default function StatusBadge({ status, lang }: { status: ProgramStatus; lang: Locale }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[status]}`}>
      {labels[status][lang]}
    </span>
  );
}
