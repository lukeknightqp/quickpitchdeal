import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
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
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-4">
              <Button className="bg-[#583beb] text-white hover:bg-[#583beb]/90" asChild>
                <Link href="https://zesty-socks-8fd.notion.site/quick-pitch-deal-1bb3a7e25c7680e09381d19950d22be4?pvs=4" target="_blank" rel="noopener noreferrer">Apply</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="w-full py-8 md:py-12 lg:py-16 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:gap-8 items-center">
              <div className="space-y-2 lg:col-span-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#583beb]">
                  Allocations into top-tier deals
                </h1>
                <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
                  A community of the next generation of entrepreneurs and operators gaining collective access to top
                  tier investment opportunities.
                </p>
              </div>

              {/* About Us Section */}
              <div className="lg:col-span-2 text-center max-w-3xl mx-auto my-8">
                <h2 className="text-lg md:text-xl text-foreground font-medium mb-4">About Us</h2>
                <p className="text-muted-foreground">
                  Quick Pitch Deal is an exclusive community reserved for top entrepreneurs. It operates as a paid newsletter of curated deal flow driven by the power of investing and learning alongside each other. We plan to provide access to otherwise exclusive (and capital-intensive) opportunities by co-investing alongside the best venture capital leads. Democratising venture through Special Purpose Vehicles allows investors to participate more frequently with smaller cheques to build diversified venture portfolios.
                </p>
              </div>

              <div className="flex justify-center lg:col-span-2">
                <div className="relative w-full max-w-4xl">
                  <div className="absolute -left-4 -top-4 h-72 w-72 bg-primary/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-4 -right-4 h-72 w-72 bg-primary/20 rounded-full blur-3xl" />
                  <div className="relative rounded-xl bg-background p-4 shadow-lg">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg border-2 border-[#583beb] p-3">
                        <div className="text-lg font-bold mb-2">1. Apply</div>
                        <ul className="list-disc pl-5 text-sm">
                          <li className="text-primary">
                            <span className="text-muted-foreground">
                              Applications to join are on an invite only basis.
                            </span>
                          </li>
                          <li className="text-primary">
                            <span className="text-muted-foreground">
                              We will assess how you fit and could contribute to the qp deal community - we want all of
                              our members to be committed, active and engaged in what we're all working together to
                              achieve
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg border-2 border-[#583beb] p-3">
                        <div className="text-lg font-bold mb-2">2. Access</div>
                        <ul className="list-disc pl-5 text-sm">
                          <li className="text-primary">
                            <span className="text-muted-foreground">
                              Receive 2–3 opportunities in your inbox every week, typically co-investing alongside top
                              venture leads
                            </span>
                          </li>
                          <li className="text-primary">
                            <span className="text-muted-foreground">
                              Members can bring both early stage and growth secondaries deals to quick pitch deal. So
                              far we've invested in Revolut, SpaceX and Lumen Orbit
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg border-2 border-[#583beb] p-3">
                        <div className="text-lg font-bold mb-2">3. Review deals</div>
                        <ul className="list-disc pl-5 text-sm">
                          <li className="text-primary">
                            <span className="text-muted-foreground">
                              See deal specific pitch decks, memos and further due diligence points
                            </span>
                          </li>
                          <li className="text-primary">
                            <span className="text-muted-foreground">
                              See who our co-investors are and their investment profiles
                            </span>
                          </li>
                          <li className="text-primary">
                            <span className="text-muted-foreground">
                              Discuss and learn alongside other entrepreneurs in the quick pitch deal community
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg border-2 border-[#583beb] p-3">
                        <div className="text-lg font-bold mb-2">4. Invest</div>
                        <ul className="list-disc pl-5 text-sm">
                          <li className="text-primary">
                            <span className="text-muted-foreground">
                              Invest in deals on a deal-by-deal basis as you like
                            </span>
                          </li>
                          <li className="text-primary">
                            <span className="text-muted-foreground">
                              Stay active in the community, review deals and contribute to feedback
                            </span>
                          </li>
                          <li className="text-primary">
                            <span className="text-muted-foreground">Monitor performance and build your portfolio</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:col-span-2 mt-6">
                <Link
                  href="https://zesty-socks-8fd.notion.site/quick-pitch-deal-1bb3a7e25c7680e09381d19950d22be4?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#583beb] rounded-md py-3 w-full max-w-4xl text-center hover:bg-[#583beb]/90 transition-colors"
                >
                  <p className="text-center text-white font-medium">Apply Now</p>
                </Link>
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
            <p className="text-sm leading-loose text-center md:text-left">
              &copy; {new Date().getFullYear()} Quick Pitch Deal. All rights reserved. Quick Pitch is not regulated by
              the UK Financial Conduct Authority.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Link href="https://www.linkedin.com/company/quickpitcheu/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  className="h-4 w-4 hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://x.com/QuickPitcheu" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <FontAwesomeIcon 
                  icon={faXTwitter}
                  className="h-4 w-4 hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <Link href="#" className="text-sm underline underline-offset-4">
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

