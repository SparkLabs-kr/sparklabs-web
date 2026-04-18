// TODO: Replace with legal-reviewed content before launch.
// Drafted 2026-04 as a placeholder following a standard Korean startup template.
// Scope, jurisdiction, and liability language need counsel review.

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { LegalLayout } from '@/components/legal/legal-layout';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, key: 'terms', path: '/terms' });
}

export default async function TermsPage({
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
    title: '이용약관',
    lastUpdated: '최종 업데이트 · 2026년 4월 18일',
    intro: (
      <>
        <p>
          본 약관은 SparkLabs Korea(이하 &ldquo;회사&rdquo;)가 운영하는 웹사이트
          www.sparklabs.co.kr 및 관련 서비스(이하 &ldquo;서비스&rdquo;)의 이용과 관련하여
          회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. 서비스를
          이용함으로써 본 약관에 동의한 것으로 간주됩니다.
        </p>
      </>
    ),
    sections: [
      {
        id: 'purpose',
        title: '목적',
        body: (
          <p>
            본 약관은 회사가 제공하는 서비스의 이용조건 및 절차, 회사와 이용자 사이의 권리
            및 의무와 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        ),
      },
      {
        id: 'definitions',
        title: '정의',
        body: (
          <ul>
            <li>
              <strong>&ldquo;서비스&rdquo;</strong> — 회사가 제공하는 웹사이트, 프로그램
              정보, 문의 접수, 뉴스 구독 등 일체의 온라인 서비스
            </li>
            <li>
              <strong>&ldquo;이용자&rdquo;</strong> — 본 약관에 따라 회사가 제공하는
              서비스를 이용하는 자
            </li>
            <li>
              <strong>&ldquo;프로그램&rdquo;</strong> — 회사가 운영하는 Batch Program,
              Partnership Program, Spark Claw 등 액셀러레이팅 프로그램 일체
            </li>
          </ul>
        ),
      },
      {
        id: 'effectiveness',
        title: '약관의 효력 및 변경',
        body: (
          <>
            <p>
              본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써
              효력이 발생합니다.
            </p>
            <p>
              회사는 필요한 경우 관련 법령에 위배되지 않는 범위 내에서 본 약관을 변경할 수
              있으며, 변경된 약관은 그 적용일자 7일 전부터 서비스 내 공지합니다. 이용자에게
              불리한 변경의 경우 30일 이전에 공지하며, 변경 후에도 서비스를 계속 이용하는
              경우 변경된 약관에 동의한 것으로 봅니다.
            </p>
          </>
        ),
      },
      {
        id: 'services',
        title: '서비스의 내용',
        body: (
          <>
            <p>회사는 다음과 같은 서비스를 제공합니다.</p>
            <ul>
              <li>회사 및 액셀러레이팅 프로그램 관련 정보 제공</li>
              <li>프로그램 지원서 접수 및 안내</li>
              <li>문의사항 접수 및 응대</li>
              <li>뉴스레터 및 이벤트 안내 발송(수신 동의 시)</li>
              <li>기타 회사가 추가 개발하거나 제휴를 통해 제공하는 일체의 서비스</li>
            </ul>
            <p>
              회사는 서비스의 내용 및 제공일정을 사전 공지하고 변경·중단할 수 있으며, 이로
              인한 손해에 대해서는 관련 법령이 정하는 범위 내에서 책임을 부담합니다.
            </p>
          </>
        ),
      },
      {
        id: 'obligations',
        title: '이용자의 의무',
        body: (
          <>
            <p>이용자는 서비스 이용 시 다음 행위를 하여서는 안 됩니다.</p>
            <ul>
              <li>타인의 정보를 도용하거나 허위 정보를 기재하는 행위</li>
              <li>회사의 서비스 운영을 방해하거나 서버에 과도한 부하를 유발하는 행위</li>
              <li>회사 및 제3자의 저작권 등 지적재산권을 침해하는 행위</li>
              <li>외설·폭력적 메시지 또는 공공질서에 반하는 정보를 유통하는 행위</li>
              <li>관계 법령 또는 본 약관에 위반되는 일체의 행위</li>
            </ul>
          </>
        ),
      },
      {
        id: 'ip',
        title: '지적재산권',
        body: (
          <>
            <p>
              서비스 내 회사가 제작한 콘텐츠(텍스트, 이미지, 로고, 디자인, 소프트웨어 등)에
              대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다.
            </p>
            <p>
              이용자는 회사의 사전 서면 동의 없이 서비스의 콘텐츠를 복제, 전송, 배포, 2차적
              저작물 작성 등에 이용할 수 없습니다. 다만 포트폴리오사·파트너사의 로고 및
              정보는 각 권리자의 허가 범위 내에서만 사용합니다.
            </p>
          </>
        ),
      },
      {
        id: 'programs',
        title: '프로그램 지원 관련 사항',
        body: (
          <>
            <p>
              회사의 액셀러레이팅 프로그램 지원 및 참여와 관련한 사항은 본 약관 외에 각
              프로그램별 개별 계약 또는 이용약관에 따르며, 본 약관과 개별 계약 간 상충이 있을
              경우 개별 계약이 우선합니다.
            </p>
            <p>
              프로그램 지원서 제출만으로 선발이 보장되지 않으며, 회사는 자체 심사 기준에
              따라 선발 여부를 결정할 수 있습니다.
            </p>
          </>
        ),
      },
      {
        id: 'liability',
        title: '책임의 제한',
        body: (
          <>
            <p>
              회사는 천재지변, 불가항력, 이용자의 귀책사유로 인한 서비스 이용 장애에
              대하여는 책임을 지지 않습니다.
            </p>
            <p>
              회사는 서비스에서 제공하는 외부 링크 또는 제3자 서비스의 내용에 대해 책임을
              지지 않으며, 이용자가 제3자 서비스를 통해 입은 손해에 대해 회사는 관련 법령이
              정하는 범위 내에서만 책임을 부담합니다.
            </p>
            <p>
              회사의 고의 또는 중대한 과실이 없는 한, 회사의 책임은 관련 법령에서 정하는
              범위 내로 제한됩니다.
            </p>
          </>
        ),
      },
      {
        id: 'governing-law',
        title: '준거법 및 재판관할',
        body: (
          <>
            <p>
              본 약관의 해석 및 회사와 이용자 간의 분쟁에 관하여는 대한민국 법을 적용하며,
              분쟁 발생 시 민사소송법상의 관할법원에 제소합니다.
            </p>
          </>
        ),
      },
      {
        id: 'appendix',
        title: '부칙',
        body: (
          <>
            <p>본 약관은 2026년 4월 18일부터 시행합니다.</p>
          </>
        ),
      },
    ],
    contactTitle: '약관 관련 문의',
    contactBody: (
      <p>
        본 약관에 관한 문의사항은{' '}
        <a
          href="mailto:legal@sparklabs.co.kr"
          className="font-semibold text-ink underline-offset-4 hover:underline"
        >
          legal@sparklabs.co.kr
        </a>
        로 연락주시면 담당자가 답변드리겠습니다.
      </p>
    ),
  },
  en: {
    eyebrow: 'Legal',
    title: 'Terms of Use',
    lastUpdated: 'Last updated · April 18, 2026',
    intro: (
      <>
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the
          website www.sparklabs.co.kr and related services (the &ldquo;Service&rdquo;)
          operated by SparkLabs Korea (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
          &ldquo;us&rdquo;). By using the Service, you agree to these Terms.
        </p>
      </>
    ),
    sections: [
      {
        id: 'purpose',
        title: 'Purpose',
        body: (
          <p>
            These Terms set out the conditions and procedures for use of the Service,
            as well as the rights, obligations, and responsibilities of both the user
            and SparkLabs Korea.
          </p>
        ),
      },
      {
        id: 'definitions',
        title: 'Definitions',
        body: (
          <ul>
            <li>
              <strong>&ldquo;Service&rdquo;</strong> — the website, program information,
              inquiry forms, newsletter, and all other online services we provide.
            </li>
            <li>
              <strong>&ldquo;User&rdquo;</strong> — any person who accesses or uses the
              Service under these Terms.
            </li>
            <li>
              <strong>&ldquo;Program&rdquo;</strong> — accelerator programs operated by
              SparkLabs, including Batch Program, Partnership Program, Spark Claw, and
              related offerings.
            </li>
          </ul>
        ),
      },
      {
        id: 'effectiveness',
        title: 'Effectiveness and Changes',
        body: (
          <>
            <p>
              These Terms take effect upon being posted on the Service or otherwise
              notified to users.
            </p>
            <p>
              We may modify these Terms where permitted by applicable law. Changes will
              be posted at least 7 days before the effective date — or at least 30 days
              in advance if the changes are unfavorable to users. Continued use after
              the effective date constitutes acceptance.
            </p>
          </>
        ),
      },
      {
        id: 'services',
        title: 'Scope of the Service',
        body: (
          <>
            <p>We provide the following:</p>
            <ul>
              <li>Information about SparkLabs and our accelerator programs</li>
              <li>Program applications and related guidance</li>
              <li>Inquiry intake and response</li>
              <li>Newsletters and event announcements (opt-in)</li>
              <li>
                Any additional services we develop or offer through partnerships
              </li>
            </ul>
            <p>
              We may modify or discontinue the Service with prior notice. Our liability
              for any resulting loss is limited to the extent provided by applicable
              law.
            </p>
          </>
        ),
      },
      {
        id: 'obligations',
        title: 'User Obligations',
        body: (
          <>
            <p>Users must not:</p>
            <ul>
              <li>
                Impersonate others or submit false information
              </li>
              <li>
                Interfere with the Service or place undue load on our infrastructure
              </li>
              <li>
                Infringe our intellectual property rights or those of third parties
              </li>
              <li>
                Distribute obscene, violent, or otherwise unlawful content
              </li>
              <li>Violate any applicable law or these Terms</li>
            </ul>
          </>
        ),
      },
      {
        id: 'ip',
        title: 'Intellectual Property',
        body: (
          <>
            <p>
              All content created by SparkLabs and made available through the Service
              (text, images, logos, design, software) is owned by SparkLabs and
              protected by applicable intellectual property laws.
            </p>
            <p>
              Users may not reproduce, transmit, distribute, or create derivative works
              from Service content without our prior written consent. Portfolio and
              partner logos and information are used within the scope permitted by
              their respective rights holders.
            </p>
          </>
        ),
      },
      {
        id: 'programs',
        title: 'Program Applications',
        body: (
          <>
            <p>
              Program applications and participation are governed by the individual
              program agreement or program terms in addition to these Terms. In case of
              conflict, the individual agreement prevails.
            </p>
            <p>
              Submission of an application does not guarantee selection. SparkLabs
              makes selection decisions based on its own criteria.
            </p>
          </>
        ),
      },
      {
        id: 'liability',
        title: 'Limitation of Liability',
        body: (
          <>
            <p>
              We are not liable for Service interruptions caused by force majeure or by
              users&rsquo; own acts or omissions.
            </p>
            <p>
              We are not responsible for the content of external links or third-party
              services accessible through the Service. Our liability for any loss
              suffered through such third-party services is limited to the extent
              provided by applicable law.
            </p>
            <p>
              Except in cases of willful misconduct or gross negligence, our liability
              is limited to the extent permitted by applicable law.
            </p>
          </>
        ),
      },
      {
        id: 'governing-law',
        title: 'Governing Law and Jurisdiction',
        body: (
          <p>
            These Terms are governed by the laws of the Republic of Korea. Disputes
            arising from these Terms will be submitted to the competent court under
            the Korean Civil Procedure Act.
          </p>
        ),
      },
      {
        id: 'appendix',
        title: 'Effective Date',
        body: <p>These Terms are effective as of April 18, 2026.</p>,
      },
    ],
    contactTitle: 'Questions about these Terms',
    contactBody: (
      <p>
        For any questions about these Terms of Use, please contact{' '}
        <a
          href="mailto:legal@sparklabs.co.kr"
          className="font-semibold text-ink underline-offset-4 hover:underline"
        >
          legal@sparklabs.co.kr
        </a>
        .
      </p>
    ),
  },
};
