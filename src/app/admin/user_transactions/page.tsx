'use client'

import AdminLayoutProvider from "@/components/providers/AdminLayoutProvider"
import MainContentLayout from "@/components/providers/MainContentLayout"

export default function UserTransactions() {
  return (
    <AdminLayoutProvider>
      <MainContentLayout>
        All user transactions
      </MainContentLayout>
    </AdminLayoutProvider>
  )
}