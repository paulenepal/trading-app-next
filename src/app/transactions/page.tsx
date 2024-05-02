'use client'

import AllTransactions from "@/components/common/Lists/AllTransactions"
import MainContentLayout from "@/components/providers/MainContentLayout"
import UserLayoutProvider from "@/components/providers/UserLayoutProvider"

export default function MyTransactions() {
  return (
    <UserLayoutProvider>
      <MainContentLayout>
        <AllTransactions />
      </MainContentLayout>
    </UserLayoutProvider>
  )
}