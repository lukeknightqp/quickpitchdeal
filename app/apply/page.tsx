import ContactForm from "@/components/ContactForm"
import Link from "next/link"

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
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
           /div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter text-[#583beb] mb-4">
              Apply to Join Quick Pitch Deal
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community of entrepreneurs and gain access to exclusive investment opportunities.
            </p>
          </div>
          <ContactForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm leading-loose text-center md:text-left">
            &copy; {new Date().getFullYear()} Quick Pitch Deal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 