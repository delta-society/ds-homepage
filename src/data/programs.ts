export type ProgramStatus = "recruiting" | "planning";

export interface Program {
  id: string;
  name: { ko: string; en: string };
  subtitle: { ko: string; en: string };
  copy: { ko: string; en: string };
  status: ProgramStatus;
  slug: string;
  ctaUrl: string | null;
  ctaLabel: { ko: string; en: string };
}

export interface ProgramCategory {
  id: string;
  path: string;
  label: string;
  icon: string;
  tagline: { ko: string; en: string };
  description: { ko: string; en: string };
  programs: Program[];
}

export const programCategories: ProgramCategory[] = [
  {
    id: "camp",
    path: "camp",
    label: "Camp",
    icon: "△",
    tagline: {
      ko: "AI를 실무에 쓰고 싶다면",
      en: "Apply AI in your work",
    },
    description: {
      ko: "AI 도구를 직접 써보며 배우는 집중 과정.",
      en: "Intensive courses where you learn by doing with AI tools.",
    },
    programs: [
      {
        id: "ai-native-camp",
        name: { ko: "AI Native Camp", en: "AI Native Camp" },
        subtitle: { ko: "실무자 대상", en: "For Practitioners" },
        copy: {
          ko: "AI 도구로 일하는 방식을 직접 바꿔보는 집중 과정입니다",
          en: "An intensive course to transform how you work with AI tools",
        },
        status: "recruiting",
        slug: "camp",
        ctaUrl: null,
        ctaLabel: { ko: "신청하기", en: "Sign Up" },
      },
      {
        id: "camp-finance",
        name: { ko: "AI Native Camp for Finance", en: "AI Native Camp for Finance" },
        subtitle: { ko: "금융권 특화", en: "For Finance Professionals" },
        copy: {
          ko: "금융권 실무자를 위한 AI 도구 적용 과정입니다",
          en: "AI tool adoption course for finance professionals",
        },
        status: "recruiting",
        slug: "camp-finance",
        ctaUrl: null,
        ctaLabel: { ko: "신청하기", en: "Sign Up" },
      },
    ],
  },
  {
    id: "builders",
    path: "builders",
    label: "Builders",
    icon: "◇",
    tagline: {
      ko: "사업을 같이 만들고 싶다면",
      en: "Build a business together",
    },
    description: {
      ko: "아이디어 단계부터 함께 만듭니다. 사업 설계, 기술 구축, 초기 고객까지.",
      en: "We build together from the idea stage — business design, tech, first customers.",
    },
    programs: [
      {
        id: "compounder-club",
        name: { ko: "Compounder Club", en: "Compounder Club" },
        subtitle: { ko: "사업가 커뮤니티", en: "Builder Community" },
        copy: {
          ko: "사업을 만들고 있는 사람들이 모여 서로의 경험을 나눕니다",
          en: "Builders share experiences and learn from each other",
        },
        status: "recruiting",
        slug: "compounder",
        ctaUrl: null,
        ctaLabel: { ko: "알아보기", en: "Learn More" },
      },
      {
        id: "fireside-fellowship",
        name: { ko: "Fireside Builder Fellowship", en: "Fireside Builder Fellowship" },
        subtitle: { ko: "대학생 빌더 후원", en: "Student Builder Sponsorship" },
        copy: {
          ko: "AI로 무언가를 만들려는 대학생을 후원합니다",
          en: "Supporting students who build with AI",
        },
        status: "planning",
        slug: "fireside",
        ctaUrl: null,
        ctaLabel: { ko: "알아보기", en: "Learn More" },
      },
    ],
  },
  {
    id: "research",
    path: "research",
    label: "Research",
    icon: "◈",
    tagline: {
      ko: "주제를 깊이 파고 싶다면",
      en: "Deep-dive into a topic",
    },
    description: {
      ko: "같은 주제를 파고드는 사람들이 모여 8주간 실전 리서치를 진행합니다.",
      en: "People who share a topic gather for 8 weeks of hands-on research.",
    },
    programs: [
      {
        id: "ax",
        name: { ko: "AX Research Club", en: "AX Research Club" },
        subtitle: { ko: "AI Transformation", en: "AI Transformation" },
        copy: {
          ko: "AI가 바꾸는 기업 구조를 8주간 함께 리서치합니다",
          en: "8 weeks of research on how AI reshapes organizations",
        },
        status: "recruiting",
        slug: "ax",
        ctaUrl: null,
        ctaLabel: { ko: "지원하기", en: "Apply" },
      },
      {
        id: "gtm",
        name: { ko: "GTM Research Club", en: "GTM Research Club" },
        subtitle: { ko: "Go-to-Market", en: "Go-to-Market" },
        copy: {
          ko: "제품을 시장에 가져가는 과정을 함께 파고듭니다",
          en: "Deep-dive into bringing products to market",
        },
        status: "recruiting",
        slug: "gtm",
        ctaUrl: null,
        ctaLabel: { ko: "지원하기", en: "Apply" },
      },
      {
        id: "pmf",
        name: { ko: "PMF Research Club", en: "PMF Research Club" },
        subtitle: { ko: "Product-Market Fit", en: "Product-Market Fit" },
        copy: {
          ko: "고객이 진짜 원하는 것을 찾는 리서치를 진행합니다",
          en: "Research to find what customers truly want",
        },
        status: "recruiting",
        slug: "pmf",
        ctaUrl: null,
        ctaLabel: { ko: "지원하기", en: "Apply" },
      },
    ],
  },
];

export const FALLBACK_CONTACT = "zoon@deltasociety.xyz";
