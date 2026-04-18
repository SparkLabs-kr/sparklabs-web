// TODO: Replace with legal-reviewed content before launch.
// Drafted 2026-04 as a placeholder following a standard Korean startup template
// (개인정보보호법 · 정보통신망법). Scope and details need counsel review.

import { setRequestLocale } from 'next-intl/server';
import { LegalLayout } from '@/components/legal/legal-layout';
import type { Locale } from '@/lib/content';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const c = content[locale];

  return (
    <LegalLayout
      eyebrow={c.eyebrow}
      title={c.title}
      lastUpdated={c.lastUpdated}
      intro={c.intro}
      sections={c.sections}
      contactTitle={c.contactTitle}
      contactBody={c.contactBody}
    />
  );
}

const content = {
  ko: {
    eyebrow: 'Legal',
    title: '개인정보 처리방침',
    lastUpdated: '최종 업데이트 · 2026년 4월 18일',
    intro: (
      <>
        <p>
          SparkLabs Korea(이하 &ldquo;회사&rdquo;)는 이용자의 개인정보를 중요하게 생각하며,
          「개인정보 보호법」 등 관련 법령을 준수하고 있습니다. 본 처리방침은 회사가 운영하는
          웹사이트(www.sparklabs.co.kr) 및 관련 서비스 이용 시 수집·이용되는
          개인정보의 항목, 목적, 보유기간 및 이용자의 권리를 설명합니다.
        </p>
      </>
    ),
    sections: [
      {
        id: 'items',
        title: '수집하는 개인정보 항목',
        body: (
          <>
            <p>회사는 다음과 같은 개인정보를 수집합니다.</p>
            <ul>
              <li>
                <strong>필수 항목</strong> — 성명, 이메일 주소, 소속(회사·팀명), 문의 내용
              </li>
              <li>
                <strong>선택 항목</strong> — 전화번호, 직책, 지원 프로그램 관련 정보(사업
                아이템, 팀 구성, 단계 등)
              </li>
              <li>
                <strong>자동 수집 항목</strong> — 접속 로그, 브라우저 유형, IP 주소, 쿠키,
                기기 정보, 서비스 이용 기록
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'purpose',
        title: '수집 및 이용목적',
        body: (
          <>
            <p>수집된 개인정보는 다음 목적으로만 이용됩니다.</p>
            <ul>
              <li>문의·상담 응대 및 서비스 제공</li>
              <li>액셀러레이팅 프로그램(Batch, Partnership, Spark Claw 등) 지원·심사</li>
              <li>회사 소식, 뉴스레터, 이벤트 안내 발송(수신 동의 시)</li>
              <li>서비스 개선을 위한 통계 분석 및 부정이용 방지</li>
            </ul>
          </>
        ),
      },
      {
        id: 'retention',
        title: '보유 및 이용기간',
        body: (
          <>
            <p>
              회사는 개인정보 수집·이용 목적이 달성되면 해당 정보를 지체 없이 파기합니다.
              다만, 관계 법령에 따라 일정 기간 보관이 필요한 경우 해당 기간 동안 보관합니다.
            </p>
            <ul>
              <li>문의·상담 기록 — 3년</li>
              <li>프로그램 지원서 및 심사 기록 — 5년 (선발 여부 관계없이)</li>
              <li>접속 로그·쿠키 — 1년 (정보통신망법 제48조의2)</li>
            </ul>
          </>
        ),
      },
      {
        id: 'third-party',
        title: '제3자 제공',
        body: (
          <>
            <p>
              회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 다음의
              경우에는 예외로 합니다.
            </p>
            <ul>
              <li>이용자가 사전에 동의한 경우</li>
              <li>
                법령의 규정에 의하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라
                수사기관의 요구가 있는 경우
              </li>
              <li>
                프로그램 공동 운영사(파트너사·글로벌 엔티티 등)와의 선발·심사를 위해 필요한
                최소한의 정보 제공 — 이 경우 제공 전 별도 동의를 받습니다.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'processing',
        title: '처리업무 위탁',
        body: (
          <>
            <p>회사는 서비스 제공을 위해 다음의 업무를 외부에 위탁하고 있습니다.</p>
            <ul>
              <li>
                <strong>호스팅 및 인프라</strong> — Vercel Inc., Amazon Web Services
              </li>
              <li>
                <strong>이메일 발송</strong> — Resend, Google Workspace
              </li>
              <li>
                <strong>문의 관리 시스템</strong> — Notion, Slack
              </li>
              <li>
                <strong>분석</strong> — Google Analytics, Vercel Analytics (쿠키 기반,
                옵트아웃 가능)
              </li>
            </ul>
            <p>
              수탁자와는 개인정보 처리 관련 계약을 체결하고, 수탁 업무 외 개인정보 이용을
              금지하고 있습니다.
            </p>
          </>
        ),
      },
      {
        id: 'rights',
        title: '정보주체의 권리·의무 및 행사 방법',
        body: (
          <>
            <p>
              이용자는 언제든지 다음의 권리를 행사할 수 있으며, 회사는 관련 법령이 정한 절차에
              따라 지체 없이 조치합니다.
            </p>
            <ul>
              <li>개인정보 열람·정정·삭제 요구</li>
              <li>개인정보 처리 정지 요구</li>
              <li>수집·이용 동의 철회</li>
            </ul>
            <p>
              권리 행사는 이메일(privacy@sparklabs.co.kr)로 요청할 수 있으며, 회사는 본인 확인
              후 신속하게 조치합니다.
            </p>
          </>
        ),
      },
      {
        id: 'security',
        title: '개인정보의 안전성 확보조치',
        body: (
          <>
            <p>회사는 개인정보의 안전한 처리를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ul>
              <li>접근 권한의 최소화 및 담당자 지정</li>
              <li>전송 구간 암호화(HTTPS/TLS) 및 저장 시 암호화 저장</li>
              <li>접근 기록 보관 및 위·변조 방지</li>
              <li>개인정보 취급 직원에 대한 정기 교육</li>
            </ul>
          </>
        ),
      },
      {
        id: 'cookies',
        title: '쿠키의 운영',
        body: (
          <>
            <p>
              회사는 서비스 개선 및 이용자 편의를 위해 쿠키를 사용합니다. 자세한 내용은{' '}
              <a href="/ko/cookie-policy" className="text-ink underline">
                쿠키 정책
              </a>
              을 참고해주세요.
            </p>
          </>
        ),
      },
      {
        id: 'officer',
        title: '개인정보 보호책임자',
        body: (
          <>
            <p>
              회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여
              아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul>
              <li>
                <strong>개인정보 보호책임자</strong> — SparkLabs Korea Privacy Office
              </li>
              <li>
                <strong>연락처</strong> — privacy@sparklabs.co.kr
              </li>
              <li>
                <strong>주소</strong> — 서울특별시 강남구 역삼로 180, 마루180 2-3층
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'changes',
        title: '처리방침 변경',
        body: (
          <>
            <p>
              본 처리방침은 관련 법령 및 회사 내부 정책에 따라 변경될 수 있으며, 변경 시
              웹사이트 공지사항을 통해 고지합니다. 중요한 변경 사항이 있을 경우 개별 통지할 수
              있습니다.
            </p>
          </>
        ),
      },
    ],
    contactTitle: '개인정보 관련 문의',
    contactBody: (
      <p>
        본 처리방침에 관한 문의사항은{' '}
        <a
          href="mailto:privacy@sparklabs.co.kr"
          className="font-semibold text-ink underline-offset-4 hover:underline"
        >
          privacy@sparklabs.co.kr
        </a>
        로 연락주시면, 담당자가 신속하게 답변드리겠습니다.
      </p>
    ),
  },
  en: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated · April 18, 2026',
    intro: (
      <>
        <p>
          SparkLabs Korea (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
          respects your privacy and complies with applicable data protection laws,
          including the Personal Information Protection Act of Korea (PIPA). This
          Privacy Policy explains what personal information we collect through
          www.sparklabs.co.kr and related services, how we use it, how long we keep it,
          and the rights you have over your information.
        </p>
      </>
    ),
    sections: [
      {
        id: 'items',
        title: 'Information We Collect',
        body: (
          <>
            <p>We collect the following categories of personal information.</p>
            <ul>
              <li>
                <strong>Required</strong> — name, email address, affiliation (company or
                team), inquiry content
              </li>
              <li>
                <strong>Optional</strong> — phone number, role, and program-specific
                information (business idea, team composition, stage)
              </li>
              <li>
                <strong>Automatically collected</strong> — access logs, browser type, IP
                address, cookies, device information, and service usage records
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'purpose',
        title: 'How We Use Your Information',
        body: (
          <>
            <p>We only use personal information for the following purposes.</p>
            <ul>
              <li>Responding to inquiries and providing requested services</li>
              <li>
                Reviewing applications for our accelerator programs (Batch,
                Partnership, Spark Claw, etc.)
              </li>
              <li>
                Sending newsletters, event invitations, and company updates (only with
                your consent)
              </li>
              <li>Statistical analysis to improve our services and prevent abuse</li>
            </ul>
          </>
        ),
      },
      {
        id: 'retention',
        title: 'Retention Period',
        body: (
          <>
            <p>
              We delete personal information without delay once its purpose has been
              fulfilled. Certain information may be retained for the periods required by
              applicable law.
            </p>
            <ul>
              <li>Inquiry and support records — 3 years</li>
              <li>
                Program applications and review records — 5 years (regardless of
                selection outcome)
              </li>
              <li>
                Access logs and cookies — 1 year (Article 48-2, Act on Promotion of
                Information and Communications Network Utilization)
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'third-party',
        title: 'Sharing with Third Parties',
        body: (
          <>
            <p>
              We do not share personal information with third parties except in the
              following cases.
            </p>
            <ul>
              <li>With your prior consent</li>
              <li>
                When required by law, or in response to a lawful request from a law
                enforcement authority
              </li>
              <li>
                Minimum necessary information shared with program co-operators (partner
                organizations, global entities) for selection and review — separate
                consent is obtained before sharing
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'processing',
        title: 'Processors (Sub-processors)',
        body: (
          <>
            <p>We rely on the following sub-processors to operate our services.</p>
            <ul>
              <li>
                <strong>Hosting & infrastructure</strong> — Vercel Inc., Amazon Web
                Services
              </li>
              <li>
                <strong>Email delivery</strong> — Resend, Google Workspace
              </li>
              <li>
                <strong>Inquiry management</strong> — Notion, Slack
              </li>
              <li>
                <strong>Analytics</strong> — Google Analytics, Vercel Analytics
                (cookie-based, opt-out available)
              </li>
            </ul>
            <p>
              We enter into data-processing agreements with all sub-processors and
              prohibit them from using personal information for any purpose other than
              the contracted service.
            </p>
          </>
        ),
      },
      {
        id: 'rights',
        title: 'Your Rights',
        body: (
          <>
            <p>
              You may exercise the following rights at any time, and we will respond
              promptly in accordance with applicable law.
            </p>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Request that we suspend processing</li>
              <li>Withdraw your consent to collection and use</li>
            </ul>
            <p>
              To exercise these rights, please email privacy@sparklabs.co.kr. We will
              act on verified requests without undue delay.
            </p>
          </>
        ),
      },
      {
        id: 'security',
        title: 'Security Measures',
        body: (
          <>
            <p>
              We take reasonable measures to protect personal information, including:
            </p>
            <ul>
              <li>Least-privilege access controls and designated handlers</li>
              <li>Encryption in transit (HTTPS/TLS) and at rest</li>
              <li>Access logging and tamper-detection</li>
              <li>Regular training for staff who handle personal information</li>
            </ul>
          </>
        ),
      },
      {
        id: 'cookies',
        title: 'Cookies',
        body: (
          <>
            <p>
              We use cookies to improve our services and user experience. See our{' '}
              <a href="/en/cookie-policy" className="text-ink underline">
                Cookie Policy
              </a>{' '}
              for details.
            </p>
          </>
        ),
      },
      {
        id: 'officer',
        title: 'Data Protection Officer',
        body: (
          <>
            <p>
              We have appointed a Data Protection Officer to oversee this policy and
              respond to related inquiries.
            </p>
            <ul>
              <li>
                <strong>Data Protection Officer</strong> — SparkLabs Korea Privacy
                Office
              </li>
              <li>
                <strong>Email</strong> — privacy@sparklabs.co.kr
              </li>
              <li>
                <strong>Address</strong> — Maru180, 2F–3F, 180 Yeoksam-ro, Gangnam-gu,
                Seoul, Republic of Korea
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'changes',
        title: 'Changes to This Policy',
        body: (
          <>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on our website, and material changes may be communicated
              individually where appropriate.
            </p>
          </>
        ),
      },
    ],
    contactTitle: 'Privacy Inquiries',
    contactBody: (
      <p>
        For any questions about this Privacy Policy, please contact{' '}
        <a
          href="mailto:privacy@sparklabs.co.kr"
          className="font-semibold text-ink underline-offset-4 hover:underline"
        >
          privacy@sparklabs.co.kr
        </a>
        . We will respond promptly.
      </p>
    ),
  },
} as const;
