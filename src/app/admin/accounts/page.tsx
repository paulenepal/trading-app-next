'use client'

import MainContentLayout from "@/components/providers/MainContentLayout"
import SharedLayoutProvider from "@/components/providers/SharedLayoutProvider"

export default function Accounts() {
  return (
    <SharedLayoutProvider>
      <MainContentLayout>
        Admin Accounts
      </MainContentLayout>
    </SharedLayoutProvider>
  )
}