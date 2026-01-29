import React from 'react';

interface RollaTermsPageProps {
  onNavigate: (path: string) => void;
}

export const RollaTermsPage: React.FC<RollaTermsPageProps> = ({ onNavigate }) => {
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
        <h1 className="text-3xl font-black tracking-tight mb-2">Rolla – Terms & Conditions</h1>
        <p className="text-zinc-500 text-sm mb-10">Last updated: 29 January 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 text-[15px] leading-relaxed">
          <p>
            These Terms and Conditions (“Terms”) govern your access to and use of the Rolla mobile application and related services (the “App” or “Service”), operated by David-Christian Green, Birmingham, United Kingdom (“we”, “us”, or “our”).
          </p>
          <p>
            By downloading, accessing, or using Rolla, you agree to be bound by these Terms. If you do not agree, you must not use the App.
          </p>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">1. Eligibility</h2>
            <p>
              You must be at least 16 years old to use Rolla. By using the App, you confirm that you meet this requirement and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">2. Description of the Service</h2>
            <p>
              Rolla is an AI-powered mobile application that allows users to generate realistic, camera-roll-style images of themselves using artificial intelligence. Users upload reference selfies, select or describe scenarios, and generate AI-created images based on those inputs.
            </p>
            <p>
              The Service requires an active paid subscription to generate images.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">3. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to provide accurate information and to keep it up to date.
            </p>
            <p>
              We may suspend or terminate accounts that violate these Terms or pose a risk to the Service or other users.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">4. Subscriptions, Billing & Credits</h2>
            <h3 className="text-zinc-200 text-base font-semibold mt-6 mb-2">Subscriptions</h3>
            <p>
              Rolla offers paid subscriptions billed on a weekly or monthly basis. Pricing and credit allocations are displayed in the App and may vary by region.
            </p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Subscriptions are processed exclusively through Apple App Store or Google Play Store</li>
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the billing period</li>
              <li>Managing or cancelling subscriptions must be done via your App Store or Google Play account</li>
            </ul>
            <h3 className="text-zinc-200 text-base font-semibold mt-6 mb-2">Credits</h3>
            <p>
              Each subscription includes a fixed number of generation credits per billing period.
            </p>
            <ul className="list-disc pl-6 space-y-1 my-4">
              <li>Credits reset at the start of each billing period</li>
              <li>Unused credits do not roll over</li>
              <li>Credits have no cash value and are non-transferable</li>
            </ul>
            <h3 className="text-zinc-200 text-base font-semibold mt-6 mb-2">Refunds</h3>
            <p>
              All payments and refunds are handled by Apple or Google in accordance with their policies. We do not issue refunds directly.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">5. User Content & AI Outputs</h2>
            <h3 className="text-zinc-200 text-base font-semibold mt-6 mb-2">Reference Photos</h3>
            <p>
              You retain ownership of any photos you upload. By uploading them, you grant us a limited, non-exclusive licence to store, process, and transmit them solely to operate and provide the Service.
            </p>
            <h3 className="text-zinc-200 text-base font-semibold mt-6 mb-2">Generated Images</h3>
            <p>
              You retain full rights to the images generated for you through the App. We do not claim ownership of your generated images.
            </p>
            <p>
              We do not use reference photos or generated images to train AI models, and we do not use them for marketing or promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">6. Content Moderation & Acceptable Use</h2>
            <p>
              You agree not to use Rolla for unlawful, harmful, abusive, or exploitative purposes.
            </p>
            <p>
              We use automated moderation systems to review reference images and generated outputs. Content may be blocked, removed, or rejected at our discretion. Accounts may be immediately suspended or terminated for violations, without notice.
            </p>
            <p>
              We do not guarantee that all outputs will be accurate, appropriate, or meet user expectations.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">7. Account Deletion</h2>
            <p>
              You may request account deletion by contacting{' '}
              <a href="mailto:rolla@unrealstudio.ai" className="text-white underline hover:no-underline">
                rolla@unrealstudio.ai
              </a>
              . Upon verification, we will delete your account data and associated content within 7 days, including from third-party processors, unless retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">8. Disclaimers</h2>
            <p>
              The Service is provided “as is” and “as available.” AI-generated content is probabilistic and may contain errors or unexpected results. We make no guarantees regarding accuracy, likeness, or suitability.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, consequential, or loss-of-profits damages arising from your use of the Service.
            </p>
            <p>
              Our total liability shall not exceed the amount paid by you for the Service in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">10. Termination</h2>
            <p>
              We may suspend or terminate access to the Service at any time if you breach these Terms or if we reasonably believe your use creates legal or operational risk.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of England and Wales. Courts of England and Wales shall have exclusive jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mt-10 mb-3">12. Contact</h2>
            <p>
              Questions about these Terms may be sent to:{' '}
              <a href="mailto:rolla@unrealstudio.ai" className="text-white underline hover:no-underline">
                rolla@unrealstudio.ai
              </a>
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
