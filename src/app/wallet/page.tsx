'use client'

import Icon from "@/components/common/icon"
import UserLayoutProvider from "@/components/providers/UserLayoutProvider"

export default function Wallet() {
  return (
    <UserLayoutProvider>
      <h1 className="text-4xl ">Your Total Value</h1>
      <p className="text-lg">localhost:3000/wallet</p>
      <Icon iconName="user-fill" className="text-purple-400 text-4xl" ></Icon>
    </UserLayoutProvider>
  )
}