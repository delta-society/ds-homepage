export interface EventItem {
  title: string;
  date: string;
  description: string;
  lumaUrl: string;
  type: "monthly-delta" | "roundtable" | "camp" | "other";
}

export const events: EventItem[] = [
  {
    title: "Monthly Delta #13",
    date: "2026-04-03",
    description: "아웃라이어가 모여 인사이트를 나누는 월간 행사",
    lumaUrl: "https://lu.ma/delta-society",
    type: "monthly-delta",
  },
  {
    title: "GTM Roundtable #3",
    date: "2026-04-10",
    description: "B2B GTM 전략을 실전 사례로 해부하는 라운드테이블",
    lumaUrl: "https://lu.ma/delta-society",
    type: "roundtable",
  },
];
