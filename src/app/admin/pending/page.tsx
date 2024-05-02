'use client'

import AdminLayoutProvider from "@/components/providers/AdminLayoutProvider"
import MainContentLayout from "@/components/providers/MainContentLayout"

export default function PendingAccounts() {
  return (
    <AdminLayoutProvider>
      <MainContentLayout>
        Admin Approvals
      </MainContentLayout>
    </AdminLayoutProvider>
  )
}