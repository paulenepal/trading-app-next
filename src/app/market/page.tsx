'use client'

import Icon from "@/components/common/icon"
import UserLayoutProvider from "@/components/providers/UserLayoutProvider"

export default function Market() {
  return (
    <UserLayoutProvider>
      <h1 className="text-4xl ">Stock Market</h1>
      <p className="text-lg">localhost:3000/market</p>
      <Icon iconName="user-fill" className="text-purple-400 text-4xl" ></Icon>
    </UserLayoutProvider>
  )
}