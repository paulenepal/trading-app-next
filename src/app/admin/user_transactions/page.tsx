'use client'

import Icon from "@/components/common/icon"

export default function UserTransactions() {
  return (
    <div className="bg-base-100 text-primary-content">
      <h1 className="text-4xl ">Transactions</h1>
      <p className="text-lg">localhost:3000/user_transactions</p>
      <Icon iconName="user-fill" className="text-purple-400 text-4xl" ></Icon>
    </div>
  )
}