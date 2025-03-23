'use client'

import { FormspreeProvider } from '@formspree/react'

export default function FormspreeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <FormspreeProvider project="mkgjjvwr">
      {children}
    </FormspreeProvider>
  )
} 