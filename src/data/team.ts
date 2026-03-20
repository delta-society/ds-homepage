export interface TeamMember {
  name: string;
  nameKo: string;
  role: string;
  keyword: string;
  photo: string;
  bio: string;
  sns: {
    linkedin?: string;
    twitter?: string;
    threads?: string;
  };
}

export const team: TeamMember[] = [
  {
    name: "Zoon Chang",
    nameKo: "장원준",
    role: "Founder & CO",
    keyword: "Realization",
    photo: "/images/team-zoon.jpg",
    bio: "아웃라이어를 연결하고 함께 만드는 인프라를 설계합니다.",
    sns: {
      linkedin: "https://www.linkedin.com/in/zoon-chang/",
      twitter: "https://x.com/zoonchang",
    },
  },
  {
    name: "Woongjae Lee",
    nameKo: "이웅재",
    role: "Co-founder",
    keyword: "Hack",
    photo: "/images/team-woong.jpg",
    bio: "기술로 커뮤니티의 지식 순환을 가속합니다.",
    sns: {
      linkedin:
        "https://www.linkedin.com/in/ACoAAB0IsQ8BOV55hA7hYi6xEKZ1DLbTwiEZHn0",
    },
  },
  {
    name: "Sungjoong Kim",
    nameKo: "김성중",
    role: "Co-founder",
    keyword: "Design",
    photo: "/images/team-sung.jpg",
    bio: "사업 기회를 포착하고 실행으로 연결합니다.",
    sns: {
      linkedin: "https://www.linkedin.com/in/sungjoongkim/",
    },
  },
];
