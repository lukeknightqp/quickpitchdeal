import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-04%20at%2019.30.42-f5eXYiey7LL7Qq5pPjiLdfylJ6N29s.png"
                alt="Quick Pitch Deal Logo"
                className="h-12"
              />
              <span className="sr-only">Quick Pitch Deal</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-8 md:py-12 lg:py-16">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#583beb]">
                quick pitch deal - Terms of Service
              </h1>

              <div className="space-y-6 text-sm leading-relaxed">
                <section>
                  <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                  <p>
                    Welcome to quick pitch deal. These Terms of Service ("Terms") govern your use of our website and services (collectively, the "Service") operated by Quick Pitch Ltd. ("quick pitch deal", "we", "us", or "our").
                  </p>
                  <p className="mt-2">
                    By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">2. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">3. Access to the Service</h2>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service for your personal, non-commercial use.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">4. Account Registration</h2>
                  <p>
                    To access certain features of the Service, you may be required to register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date at all times.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">5. User Responsibilities</h2>
                  <p>
                    You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account or password.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">6. Prohibited Uses</h2>
                  <p>You agree not to use the Service:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>In any way that violates any applicable national or international law or regulation</li>
                    <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation</li>
                    <li>To impersonate or attempt to impersonate quick pitch deal, a quick pitch deal employee, another user, or any other person or entity</li>
                    <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">7. Intellectual Property</h2>
                  <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of Quick Pitch Ltd. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">8. Termination</h2>
                  <p>
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">9. Limitation of Liability</h2>
                  <p>
                    In no event shall Quick Pitch Ltd., nor its director(s), employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">10. Governing Law</h2>
                  <p>
                    These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">11. Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at [contact email or address].
                  </p>
                </section>

                <p className="text-xs text-muted-foreground mt-8">
                  Last updated: 21st March 2025
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G717X1SCrW2oQAXdwvFXXkghXCYBoP.png"
              alt="Quick Pitch Deal Logo"
              className="h-6"
            />
            <p className="text-xs leading-relaxed text-center md:text-left max-w-4xl">
              Copyright. All rights reserved. "quick pitch deal" is the trading name of Quick Pitch Ltd (CRN: 16257364) of 16 Evelyn Terrace , London, TW9 2TQ. 
              Quick Pitch is not regulated by the UK Financial Conduct Authority. Information provided is for informational purposes only and does not constitute financial advice or an offer to buy/sell securities. Private market investments carry risks, including capital loss, and are not suitable for all investors. Past performance is not indicative of future results. Seek independent financial advice before investing.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 
