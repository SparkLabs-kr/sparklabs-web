// TODO: Replace with legal-reviewed content before launch.
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { LegalLayout } from '@/components/legal/legal-layout';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, key: 'cookiePolicy', path: '/cookie-policy' });
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isKo = locale === 'ko';

  const eyebrow = isKo ? '쿠키 정책' : 'Cookie Policy';
  const title = isKo
    ? '쿠키 및 유사 기술 사용 안내'
    : 'How We Use Cookies and Similar Technologies';
  const lastUpdated = isKo ? '최종 업데이트: 2026년 4월 18일' : 'Last updated: April 18, 2026';

  const intro = isKo ? (
    <p>
      스파크랩(SparkLabs)은 www.sparklabs.co.kr(이하 &ldquo;본 사이트&rdquo;) 이용자의 편의
      향상과 서비스 개선을 위해 쿠키(Cookies) 및 유사 기술을 사용합니다. 본 쿠키 정책은
      사용되는 쿠키의 종류, 목적, 그리고 이용자가 이를 제어할 수 있는 방법을 안내합니다.
      본 정책은 개인정보처리방침과 함께 적용됩니다.
    </p>
  ) : (
    <p>
      SparkLabs uses cookies and similar technologies on www.sparklabs.co.kr (&ldquo;the
      Site&rdquo;) to enhance your experience and improve our services. This Cookie Policy
      explains what cookies we use, why we use them, and how you can control them. It
      applies together with our Privacy Policy.
    </p>
  );

  const sections = isKo
    ? [
        {
          id: 'what-are-cookies',
          title: '쿠키란 무엇인가요',
          body: (
            <>
              <p>
                쿠키는 이용자가 웹사이트를 방문할 때 브라우저를 통해 이용자의 기기에
                저장되는 작은 텍스트 파일입니다. 쿠키를 통해 사이트는 이용자의 기기를
                인식하고, 선호 설정을 기억하며, 사이트 이용 경험을 개선할 수 있습니다.
              </p>
              <p>
                본 정책에서 &ldquo;쿠키&rdquo;라는 용어는 로컬 스토리지, 세션 스토리지,
                픽셀, 태그 등 유사한 목적으로 사용되는 모든 기술을 포함합니다.
              </p>
            </>
          ),
        },
        {
          id: 'types-of-cookies',
          title: '사용하는 쿠키의 종류',
          body: (
            <>
              <p>스파크랩은 다음과 같은 목적으로 쿠키를 사용합니다.</p>
              <ul>
                <li>
                  <strong>필수 쿠키(Essential).</strong> 사이트 운영과 보안에 반드시
                  필요한 쿠키입니다. 언어 설정(ko/en), 세션 유지, CSRF 보호 등이
                  이에 해당합니다. 이 쿠키는 거부할 수 없으며 거부 시 사이트가 정상적으로
                  작동하지 않을 수 있습니다.
                </li>
                <li>
                  <strong>분석 쿠키(Analytics).</strong> 이용자가 사이트를 어떻게
                  이용하는지 집계된 형태로 파악하기 위해 사용합니다. 방문자 수, 페이지
                  조회수, 체류 시간 등을 측정하여 콘텐츠와 사용자 경험을 개선하는 데
                  활용합니다. Google Analytics 및 Vercel Analytics를 사용합니다.
                </li>
                <li>
                  <strong>기능 쿠키(Preferences).</strong> 이용자가 선택한 언어, 지역,
                  화면 설정 등을 기억하여 재방문 시 동일한 환경을 제공합니다.
                </li>
                <li>
                  <strong>마케팅 쿠키(Marketing).</strong> 현재 본 사이트는 별도의 광고
                  추적 쿠키를 운영하지 않습니다. 향후 LinkedIn Insight Tag 등 광고 쿠키를
                  도입할 경우 사전에 별도의 동의를 받고 본 정책에 반영하겠습니다.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'third-party',
          title: '제3자 쿠키',
          body: (
            <>
              <p>
                일부 쿠키는 스파크랩이 직접 설정하지 않고, 제3자 서비스 제공자가 설정할 수
                있습니다. 본 사이트에서 사용되는 주요 제3자 서비스는 다음과 같습니다.
              </p>
              <ul>
                <li>Google Analytics (Google LLC) — 방문자 분석</li>
                <li>Vercel Analytics (Vercel Inc.) — 성능 및 트래픽 분석</li>
                <li>YouTube (Google LLC) — 임베디드 영상 재생 시</li>
                <li>Vimeo (Vimeo, Inc.) — 임베디드 영상 재생 시</li>
              </ul>
              <p>
                각 서비스의 쿠키 사용 방침은 해당 서비스의 개인정보처리방침을 참조해
                주시기 바랍니다.
              </p>
            </>
          ),
        },
        {
          id: 'how-to-control',
          title: '쿠키를 제어하는 방법',
          body: (
            <>
              <p>
                이용자는 언제든지 브라우저 설정을 통해 쿠키를 차단하거나 삭제할 수
                있습니다. 다만 필수 쿠키를 차단할 경우 로그인, 언어 설정 유지 등 일부
                기능이 정상적으로 작동하지 않을 수 있습니다.
              </p>
              <p>주요 브라우저의 쿠키 설정 방법은 다음과 같습니다.</p>
              <ul>
                <li>
                  <strong>Chrome:</strong> 설정 → 개인정보 보호 및 보안 → 쿠키 및 기타
                  사이트 데이터
                </li>
                <li>
                  <strong>Safari:</strong> 환경설정 → 개인정보 보호 → 쿠키 및 웹사이트
                  데이터
                </li>
                <li>
                  <strong>Edge:</strong> 설정 → 쿠키 및 사이트 권한 → 쿠키 및 사이트
                  데이터 관리
                </li>
                <li>
                  <strong>Firefox:</strong> 설정 → 개인 정보 및 보안 → 쿠키와 사이트
                  데이터
                </li>
              </ul>
              <p>
                Google Analytics 추적을 원치 않는 경우{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                을 설치해 차단할 수 있습니다.
              </p>
            </>
          ),
        },
        {
          id: 'updates',
          title: '정책 변경',
          body: (
            <p>
              본 쿠키 정책은 서비스 변경, 관련 법령, 기술 변화 등에 따라 수정될 수
              있습니다. 중요한 변경 사항은 본 사이트 공지사항이나 본 페이지 상단의 최종
              업데이트 일자를 통해 안내드립니다.
            </p>
          ),
        },
      ]
    : [
        {
          id: 'what-are-cookies',
          title: 'What Are Cookies',
          body: (
            <>
              <p>
                Cookies are small text files stored on your device when you visit a
                website. They allow the site to recognize your device, remember your
                preferences, and improve your overall experience.
              </p>
              <p>
                In this policy, the term &ldquo;cookies&rdquo; also refers to similar
                technologies such as local storage, session storage, pixels, and tags
                used for comparable purposes.
              </p>
            </>
          ),
        },
        {
          id: 'types-of-cookies',
          title: 'Types of Cookies We Use',
          body: (
            <>
              <p>SparkLabs uses cookies for the following purposes.</p>
              <ul>
                <li>
                  <strong>Essential cookies.</strong> Strictly necessary for the Site to
                  operate securely — including language preference (ko/en), session
                  management, and CSRF protection. These cannot be disabled without
                  affecting core functionality.
                </li>
                <li>
                  <strong>Analytics cookies.</strong> Help us understand, in aggregate,
                  how visitors use the Site — pages viewed, time on page, traffic
                  sources — so we can improve content and user experience. We use Google
                  Analytics and Vercel Analytics.
                </li>
                <li>
                  <strong>Preference cookies.</strong> Remember choices you make such as
                  language, region, and display settings to provide a consistent
                  experience on return visits.
                </li>
                <li>
                  <strong>Marketing cookies.</strong> The Site does not currently run
                  advertising trackers. If we introduce tools like LinkedIn Insight Tag
                  in the future, we will request your consent in advance and update this
                  policy accordingly.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'third-party',
          title: 'Third-Party Cookies',
          body: (
            <>
              <p>
                Some cookies are set by third-party services we integrate on the Site
                rather than by SparkLabs directly. Key third parties include:
              </p>
              <ul>
                <li>Google Analytics (Google LLC) — visitor analytics</li>
                <li>Vercel Analytics (Vercel Inc.) — performance and traffic analytics</li>
                <li>YouTube (Google LLC) — when embedded videos are loaded</li>
                <li>Vimeo (Vimeo, Inc.) — when embedded videos are loaded</li>
              </ul>
              <p>
                Please refer to each provider&rsquo;s own privacy and cookie policies for
                details on their practices.
              </p>
            </>
          ),
        },
        {
          id: 'how-to-control',
          title: 'How to Control Cookies',
          body: (
            <>
              <p>
                You can block or delete cookies at any time through your browser
                settings. Note that disabling essential cookies may prevent features such
                as login and language persistence from working correctly.
              </p>
              <p>Typical browser paths:</p>
              <ul>
                <li>
                  <strong>Chrome:</strong> Settings → Privacy and Security → Cookies and
                  other site data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                </li>
                <li>
                  <strong>Edge:</strong> Settings → Cookies and site permissions → Manage
                  and delete cookies
                </li>
                <li>
                  <strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and
                  Site Data
                </li>
              </ul>
              <p>
                To opt out of Google Analytics specifically, install the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: 'updates',
          title: 'Updates to This Policy',
          body: (
            <p>
              We may revise this Cookie Policy to reflect changes in our services,
              applicable laws, or technology. Significant updates will be announced on
              the Site or reflected in the &ldquo;Last updated&rdquo; date at the top of
              this page.
            </p>
          ),
        },
      ];

  const contactTitle = isKo ? '문의' : 'Contact';
  const contactBody = isKo ? (
    <p>
      쿠키 정책에 대한 문의사항은{' '}
      <a href="mailto:privacy@sparklabs.co.kr">privacy@sparklabs.co.kr</a>로 연락 주시기
      바랍니다.
    </p>
  ) : (
    <p>
      For questions about this Cookie Policy, please contact us at{' '}
      <a href="mailto:privacy@sparklabs.co.kr">privacy@sparklabs.co.kr</a>.
    </p>
  );

  return (
    <LegalLayout
      eyebrow={eyebrow}
      title={title}
      lastUpdated={lastUpdated}
      intro={intro}
      sections={sections}
      contactTitle={contactTitle}
      contactBody={contactBody}
    />
  );
}
