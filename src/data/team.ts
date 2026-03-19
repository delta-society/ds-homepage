export interface TeamMember {
  name: string;
  role: string;
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
    role: "Founder & CEO",
    bio: "아웃라이어를 연결하고 함께 만드는 인프라를 설계합니다.",
    sns: {
      linkedin: "https://linkedin.com/in/zoonchang",
      twitter: "https://x.com/zoonchang",
    },
  },
  {
    name: "Woongjae Lee",
    role: "Co-founder & CTO",
    bio: "기술로 커뮤니티의 지식 순환을 가속합니다.",
    sns: {
      linkedin: "https://linkedin.com/in/woongjaelee",
    },
  },
  {
    name: "Sungjoong Kim",
    role: "Co-founder & COO",
    bio: "사업 기회를 포착하고 실행으로 연결합니다.",
    sns: {
      linkedin: "https://linkedin.com/in/sungjoongkim",
    },
  },
];
