'use client'

import AllTransactions from "@/components/common/Lists/AllTransactions"
import MainContentLayout from "@/components/providers/MainContentLayout"

export default function MyTransactions() {
  return (
    <MainContentLayout>
      <AllTransactions />
    </MainContentLayout>
  )
}