import React from 'react';

interface RollaPrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const RollaPrivacyPage: React.FC<RollaPrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <nav className="w-full px-6 py-8 flex items-center max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate('/rolla')}
          className="text-zinc-500 hover:text-white transition-colors flex items-center space-x-2 text-sm font-bold"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          <span>BACK</span>
        </button>
      </nav>

      <main className="flex-grow px-6 pb-20 max-w-2xl mx-auto">
        <h1 className="text-3xl font-black tracking-tight mb-2">Rolla – Privacy Policy</h1>
        <p className="text-zinc-500 text-sm mb-10">Last updated: 29 January 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 text-[15px] leading-relaxed">
          <p>
            This Privacy Policy explains how Rolla (“we”, “us”, or “our”) collects, uses, and protects your personal data.
          </p>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">1. Who We Are</h2>
            <p>
              Operator: David-Christian Green<br />
              Location: Birmingham, United Kingdom<br />
              Contact: <a href="mailto:rolla@unrealstudio.ai" className="text-white underline hover:no-underline">rolla@unrealstudio.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">2. Information We Collect</h2>
            <h3 className="text-zinc-200 text-base font-semibold mt-6 mb-2">Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Email address and account credentials</li>
              <li>Reference selfies uploaded for AI generation</li>
              <li>Custom scenario text (if entered)</li>
              <li>Support communications</li>
            </ul>
            <h3 className="text-zinc-200 text-base font-semibold mt-6 mb-2">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Subscription status and credit usage</li>
              <li>Generated images and metadata</li>
              <li>Device information, app version, and crash logs</li>
              <li>Push notification tokens</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">3. How We Use Your Information</h2>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Provide and operate the Service</li>
              <li>Generate AI images you request</li>
              <li>Moderate content and enforce policies</li>
              <li>Manage subscriptions and entitlements</li>
              <li>Send essential notifications (e.g. generation completion)</li>
              <li>Provide customer support</li>
              <li>Improve reliability and security</li>
            </ul>
            <p>
              We do not send marketing emails and do not sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">4. AI Processing</h2>
            <p>
              Reference photos, prompts, and generated images are processed by third-party AI providers strictly to deliver the Service. Your data is not used to train AI models.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">5. Data Sharing</h2>
            <p>
              We share data only with trusted processors, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Supabase (authentication, database, storage)</li>
              <li>WaveSpeed.ai (AI image generation and moderation)</li>
              <li>RevenueCat (subscription management)</li>
              <li>Apple & Google (sign-in, payments, push notifications)</li>
              <li>Error monitoring services (e.g. crash reporting)</li>
            </ul>
            <p>
              All processors act under contractual confidentiality and security obligations.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">6. Data Retention</h2>
            <p>
              We retain personal data only while your account is active or as necessary to provide the Service.
            </p>
            <p>
              Upon account deletion, we delete your personal data and images within 7 days, including from third parties, unless legal retention is required.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">7. Your Rights (GDPR & UK GDPR)</h2>
            <p>
              If you are in the UK, EU, or EEA, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
            </ul>
            <p>
              Requests can be made via <a href="mailto:rolla@unrealstudio.ai" className="text-white underline hover:no-underline">rolla@unrealstudio.ai</a>.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">8. Cookies</h2>
            <p>
              Our websites may use basic cookies or similar technologies for essential functionality and analytics. You can control cookies via your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">9. Security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect your data. However, no system can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">10. Children’s Privacy</h2>
            <p>
              Rolla is not intended for users under 16 years old. We do not knowingly collect data from children under this age.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Continued use of the Service after updates constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">12. Contact</h2>
            <p>
              For privacy questions or requests:<br />
              <a href="mailto:rolla@unrealstudio.ai" className="text-white underline hover:no-underline">rolla@unrealstudio.ai</a>
            </p>
          </section>
        </div>
      </main>

      <footer className="w-full py-12 px-6 border-t border-zinc-900/30 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 select-none font-black">
          &copy; 2026 UNREAL STUDIO
        </p>
      </footer>
    </div>
  );
};
