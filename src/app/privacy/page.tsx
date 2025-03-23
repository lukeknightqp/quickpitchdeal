import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-04%20at%2019.30.42-f5eXYiey7LL7Qq5pPjiLdfylJ6N29s.png"
              alt="Quick Pitch Deal Logo"
              className="h-12"
            />
            <span className="sr-only">Quick Pitch Deal</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">quick pitch deal - Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-4">
                Quick Pitch Ltd. ("quick pitch deal", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Service").
              </p>
              <p>
                Please read this Privacy Policy carefully. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We collect several types of information for various purposes to provide and improve our Service to you:
              </p>
              
              <div className="ml-6">
                <h3 className="text-lg font-semibold mb-2">2.1 Personal Data</h3>
                <p className="mb-4">
                  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">2.2 Usage Data</h3>
                <p>
                  We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Use of Data</h2>
              <p className="mb-4">
                quick pitch deal uses the collected data for various purposes:
              </p>
              <ul className="list-disc ml-6">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Data Retention</h2>
              <p>
                quick pitch deal will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Data Transfer</h2>
              <p className="mb-4">
                Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
              </p>
              <p>
                If you are located outside the United Kingdom and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United Kingdom and process it there.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Disclosure of Data</h2>
              <p className="mb-4">
                We may disclose your Personal Data in the good faith belief that such action is necessary to:
              </p>
              <ul className="list-disc ml-6">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of quick pitch deal</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of users of the Service or the public</li>
                <li>Protect against legal liability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h2>
              <p className="mb-4">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights. quick pitch deal aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
              </p>
              <p>
                If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p>
                We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc ml-6">
                <li>By email: seb@quickpitchuk.com</li>
                <li>By visiting this page on our website: www.quickpitchuk.com</li>
              </ul>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: 21st March 2025
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs leading-relaxed text-center md:text-left max-w-4xl">
              © 2024 quick pitch deal. All rights reserved. quick pitch deal is not a financial advisor and does not provide financial advice. The information provided on this website is for informational purposes only and should not be construed as financial advice. Investing in property involves risks, including the risk of loss of capital. Past performance is not indicative of future results.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="text-sm underline underline-offset-4">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm underline underline-offset-4">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 