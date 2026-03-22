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
    title: "스타트업의 다음 시대정신을 찾아서 Beyond Product",
    type: "blog",
    author: "Woongjae Lee",
    url: "https://www.re-builder.xyz/beyond-product/",
    date: "2026-03-17",
    description: "제품 너머의 세계 — Beyond Product 팟캐스트가 묻는 질문.",
  },
  {
    title: "Beyond Product EP.01 — Palantir FDE × Clay",
    type: "podcast",
    author: "Delta Society",
    url: "https://youtube.com/@beyondproduct",
    date: "2026-03-15",
    description: "제품 너머, 고객에게 다가가는 두 가지 방법.",
  },
  {
    title: "AI로 제품은 만들었는데, 고객은 어디서 오나요?",
    type: "blog",
    author: "Woongjae Lee",
    url: "https://www.re-builder.xyz/gtm_strategy/",
    date: "2026-01-20",
    description: "AI 시대 B2B GTM 전략의 새로운 공식.",
  },
  {
    title: "B2B 서비스들이 모두 AI Credit으로 요금제가 바뀌는 이유",
    type: "blog",
    author: "Woongjae Lee",
    url: "https://www.re-builder.xyz/ai_credit/",
    date: "2025-09-03",
    description: "AI Credit 기반 과금 모델이 표준이 되는 이유.",
  },
  {
    title: "AI Native Camp — 비개발자의 Claude Code 여정",
    type: "youtube",
    author: "Delta Society",
    url: "https://camp.re-builder.xyz/",
    date: "2026-03-12",
    description: "비개발자가 AI와 함께 일하는 법을 배우는 캠프.",
  },
  {
    title: "Monthly Delta — 아웃라이어가 모이는 월간 행사",
    type: "youtube",
    author: "Delta Society",
    url: "https://luma.com/deltasociety?k=c",
    date: "2026-03-05",
    description: "매월 아웃라이어가 모여 인사이트를 나누는 행사.",
  },
];
