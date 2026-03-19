export interface MediaItem {
  title: string;
  type: "blog" | "podcast" | "youtube" | "newsletter";
  author: string;
  url: string;
  thumbnail?: string;
  date: string;
  description: string;
}

export const media: MediaItem[] = [
  {
    title: "Beyond Product EP.01 — Palantir & Clay",
    type: "podcast",
    author: "Delta Society",
    url: "https://youtube.com/@beyondproduct",
    date: "2026-03-15",
    description: "GTM 도구의 진화를 탐구합니다.",
  },
  {
    title: "AI Native Camp: 비개발자의 Claude Code 여정",
    type: "blog",
    author: "Zoon Chang",
    url: "#",
    date: "2026-03-12",
    description: "비개발자가 AI와 함께 일하는 법을 배우는 캠프.",
  },
  {
    title: "GTM Roundtable: B2B SaaS의 새로운 성장 공식",
    type: "youtube",
    author: "Delta Society",
    url: "#",
    date: "2026-03-10",
    description: "B2B SaaS 창업자들의 GTM 전략 라운드테이블.",
  },
  {
    title: "Outlier Thesis: 왜 아웃라이어인가",
    type: "newsletter",
    author: "Zoon Chang",
    url: "#",
    date: "2026-03-08",
    description: "Delta Society의 투자 철학과 아웃라이어 정의.",
  },
  {
    title: "Monthly Delta #12 — AI 시대의 미디어 전략",
    type: "youtube",
    author: "Delta Society",
    url: "#",
    date: "2026-03-05",
    description: "매월 아웃라이어가 모여 인사이트를 나누는 행사.",
  },
  {
    title: "Re:Builder — 창업자의 두 번째 시작",
    type: "blog",
    author: "Woongjae Lee",
    url: "#",
    date: "2026-03-01",
    description: "실패 이후 다시 시작하는 창업자를 위한 이야기.",
  },
];
