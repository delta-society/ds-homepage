const ko = {
  nav: {
    about: "About",
    community: "Community",
    joinUs: "Join Us",
  },
  hero: {
    subtitle: "Delta Society",
    title1: "Compounding",
    title2: "Outliers",
    description: "만드는 사람들이 연결되는 곳.",
  },
  about: {
    label: "What We Do",
    title: "지식이 사업이 되는 곳",
    description:
      "날카로운 지식이 사업으로 연결되는 곳. 형식적인 네트워킹이 아닌, 실질적인 인사이트와 기회의 순환을 만듭니다.",
    pillars: [
      {
        title: "Delta Capture",
        subtitle: "포착",
        desc: "시장의 변화 신호를 가장 먼저 감지하고 공유합니다. 아웃라이어의 시선으로 남들이 보지 못하는 기회를 포착합니다.",
      },
      {
        title: "Prime Knowledge",
        subtitle: "지식",
        desc: "검증된 지식을 축적하고 순환시킵니다. Monthly Delta, GTM Roundtable, Beyond Product 등 다양한 포맷으로 인사이트를 나눕니다.",
      },
      {
        title: "Co-builder",
        subtitle: "공동사업",
        desc: "지식의 교류에서 끝나지 않고, 함께 사업을 만듭니다. 아웃라이어끼리 연결되어 실제 가치를 창출합니다.",
      },
    ],
  },
  community: {
    label: "Community",
    items: [
      {
        tag: "RESEARCH",
        title: "같은 주제를 파는 사람들의 딥다이브.",
      },
      {
        tag: "BUILDERS",
        title: "사업을 만들고 있는 사람들의 동료 네트워크.",
      },
      {
        tag: "EVENT",
        title: "매달 아웃라이어가 모이는 자리.",
      },
      {
        tag: "CAMP",
        title: "AI 도구로 일하는 방식을 바꾸는 집중 과정.",
      },
    ],
  },
  team: {
    label: "Team",
    title: "만드는 사람들",
  },
  join: {
    label: "Join Us",
    title: "함께하고 싶다면",
    newsletterDesc: "격주로 발행하는 Delta Briefing으로 시작하세요.",
    programsLabel: "이미 관심 있는 프로그램이 있다면:",
    talkLabel: "직접 이야기하기",
    partnership: "파트너십 문의",
  },
  footer: {
    tagline: "Where Outliers Connect & Build.",
    description: "변화의 최전선에 있는 사람들이 모여 지식을 나누고 함께 만드는 커뮤니티.",
    navigate: "Navigate",
    stayUpdated: "Stay Updated",
    newsletterDesc: "아웃라이어의 인사이트를 받아보세요.",
    subscribe: "구독",
    subscribing: "구독 중...",
    subscribed: "구독 완료!",
    errorSubscribe: "오류 발생",
  },
  // Legacy keys kept for /apply and program detail pages
  programs: {
    label: "Programs",
    camp: {
      title: "Camp",
      tagline: "AI를 실무에 쓰고 싶다면",
      desc: "AI 도구를 직접 써보며 배우는 집중 과정.",
    },
    builders: {
      title: "Builders",
      tagline: "사업을 같이 만들고 싶다면",
      desc: "아이디어 단계부터 함께 만듭니다. 사업 설계, 기술 구축, 초기 고객까지.",
    },
    research: {
      title: "Research",
      tagline: "주제를 깊이 파고 싶다면",
      desc: "같은 주제를 파고드는 사람들이 모여 8주간 실전 리서치를 진행합니다.",
    },
    contact: "문의",
    newsletterNote: "지원 시 Delta Briefing 뉴스레터도 함께 구독됩니다",
  },
  apply: {
    label: "Join Us",
    title: "Delta Society에\n합류하세요",
    description:
      "변화의 최전선에 있는 아웃라이어들과 함께 지식을 나누고 사업을 만듭니다. 아래 폼을 통해 지원해주세요.",
    formPlaceholder: "지원 폼이 여기에 표시됩니다.",
    formHelp: "Fillout / Typeform 등 기존 폼의 iframe embed URL을 설정하면 자동으로 표시됩니다.",
    contact: "파트너십이나 투자 관련 문의는",
    contactLink: "로 연락해주세요.",
  },
} as const;

export default ko;
