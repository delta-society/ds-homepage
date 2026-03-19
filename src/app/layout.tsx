import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delta Society — Where Outliers Connect & Build",
  description:
    "변화의 최전선에 있는 아웃라이어들이 모여 지식을 나누고 함께 만드는 커뮤니티.",
  openGraph: {
    title: "Delta Society — Where Outliers Connect & Build",
    description:
      "변화의 최전선에 있는 아웃라이어들이 모여 지식을 나누고 함께 만드는 커뮤니티.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
