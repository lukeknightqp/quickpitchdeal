'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkgjjvwr") // Replace with your form ID

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
            Name
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
            Email
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
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#583beb] focus:outline-none focus:ring-1 focus:ring-[#583beb]"
        />
        <ValidationError prefix="Company" field="company" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#583beb] focus:outline-none focus:ring-1 focus:ring-[#583beb]"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-[#583beb] text-white py-2 px-4 rounded-md hover:bg-[#583beb]/90 transition-colors disabled:opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  )
} 