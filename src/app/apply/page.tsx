import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Delta Society — Apply for Club Membership",
  description:
    "Delta Society 클럽 멤버십에 지원하세요. 아웃라이어들과 함께 지식을 나누고 사업을 만듭니다.",
};

export default function ApplyPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-ds-accent font-heading font-medium text-sm tracking-wider uppercase mb-4">
            Join Us
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Delta Society에
            <br />
            합류하세요
          </h1>
          <p className="text-lg text-ds-text-body leading-relaxed">
            변화의 최전선에 있는 아웃라이어들과 함께 지식을 나누고 사업을
            만듭니다. 아래 폼을 통해 지원해주세요.
          </p>
        </div>

        {/* Form embed placeholder — replace src with actual form URL */}
        <div className="max-w-2xl mx-auto">
          <div className="border border-ds-primary/10 rounded-xl overflow-hidden bg-white">
            <div className="p-12 text-center text-ds-text-muted">
              <p className="text-sm mb-4">
                지원 폼이 여기에 표시됩니다.
              </p>
              <p className="text-xs text-ds-text-muted">
                Fillout / Typeform 등 기존 폼의 iframe embed URL을 설정하면 자동으로 표시됩니다.
              </p>
              {/*
                실제 폼 임베드 시 아래 주석을 해제하고 src를 교체하세요:
                <iframe
                  src="YOUR_FORM_EMBED_URL"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  className="w-full"
                  title="Club Membership Application"
                />
              */}
            </div>
          </div>
        </div>

        {/* Contact alternative */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-sm text-ds-text-muted">
            파트너십이나 투자 관련 문의는{" "}
            <a
              href="mailto:hello@deltasociety.xyz"
              className="text-ds-primary font-medium underline underline-offset-4 hover:text-ds-accent transition-colors"
            >
              hello@deltasociety.xyz
            </a>
            로 연락해주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
