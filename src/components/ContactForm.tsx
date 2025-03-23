'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkgjjvwr")

  if (state.succeeded) {
    return (
      <div className="text-center p-6">
        <p className="text-lg text-[#583beb]">Thanks for your application!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#583beb] focus:outline-none focus:ring-1 focus:ring-[#583beb]"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#583beb] focus:outline-none focus:ring-1 focus:ring-[#583beb]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
            LinkedIn URL *
          </label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            required
            placeholder="https://linkedin.com/in/yourprofile"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#583beb] focus:outline-none focus:ring-1 focus:ring-[#583beb]"
          />
          <ValidationError prefix="LinkedIn" field="linkedin" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#583beb] focus:outline-none focus:ring-1 focus:ring-[#583beb]"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
      </div>
      <div>
        <label htmlFor="deployAmount" className="block text-sm font-medium text-gray-700">
          What amount do you plan to deploy over the next year? *
        </label>
        <select
          name="deployAmount"
          id="deployAmount"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#583beb] focus:outline-none focus:ring-1 focus:ring-[#583beb]"
        >
          <option value="">Select an amount</option>
          <option value="0-100k">£0 - £100,000</option>
          <option value="100-250k">£100,000 - £250,000</option>
          <option value="250-1M">£250,000 - £1,000,000</option>
          <option value="1M+">£1,000,000+</option>
          <option value="unknown">Unknown</option>
        </select>
        <ValidationError prefix="Deploy Amount" field="deployAmount" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="investmentSize" className="block text-sm font-medium text-gray-700">
          What is your typical investment size for a single investment? *
        </label>
        <select
          name="investmentSize"
          id="investmentSize"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#583beb] focus:outline-none focus:ring-1 focus:ring-[#583beb]"
        >
          <option value="">Select an amount</option>
          <option value="0-10k">£0 - £10,000</option>
          <option value="10-50k">£10,000 - £50,000</option>
          <option value="50-250k">£50,000 - £250,000</option>
          <option value="250k+">£250,000+</option>
          <option value="unknown">Unknown</option>
        </select>
        <ValidationError prefix="Investment Size" field="investmentSize" errors={state.errors} />
      </div>
      <div className="space-y-4">
        <div className="flex items-start">
          <input
            type="checkbox"
            name="riskWaiver"
            id="riskWaiver"
            required
            className="h-4 w-4 text-[#583beb] border-gray-300 rounded focus:ring-[#583beb]"
          />
          <label htmlFor="riskWaiver" className="ml-2 text-sm text-gray-700">
            Risk Waiver: I am aware that investing in startups and early-stage companies carries inherent risks. These risks include, but are not limited to: Limited liquidity of investments, Potential absence of dividend payments, Possibility of partial or total loss of invested capital and Dilution of ownership stake. I understand that such investments should only be made as part of a broader, diversified investment strategy.
          </label>
        </div>
        <div className="flex items-start">
          <input
            type="checkbox"
            name="confidentialityWaiver"
            id="confidentialityWaiver"
            required
            className="h-4 w-4 text-[#583beb] border-gray-300 rounded focus:ring-[#583beb]"
          />
          <label htmlFor="confidentialityWaiver" className="ml-2 text-sm text-gray-700">
            Confidentiality Waiver: By participating in Quick Pitch Deal, I acknowledge that any information shared with me is intended solely for my use as the designated recipient. I agree not to forward or share this information without obtaining prior consent from Quick Pitch Deal. Failure to adhere to this condition may result in my removal from Quick Pitch Deal.
          </label>
        </div>
        <div className="flex items-start">
          <input
            type="checkbox"
            name="termsAgreement"
            id="termsAgreement"
            required
            className="h-4 w-4 text-[#583beb] border-gray-300 rounded focus:ring-[#583beb]"
          />
          <label htmlFor="termsAgreement" className="ml-2 text-sm text-gray-700">
            I agree to the <a href="/terms" className="text-[#583beb] underline">Terms</a> and <a href="/privacy" className="text-[#583beb] underline">Privacy Policy</a>.
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-[#583beb] text-white py-2 px-4 rounded-md hover:bg-[#583beb]/90 transition-colors disabled:opacity-50"
        >
          Submit Application
        </button>
      </div>
    </form>
  )
} 
