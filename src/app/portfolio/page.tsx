'use client'

import Icon from "@/components/common/icon"
import MainContentLayout from "@/components/providers/MainContentLayout"
import UserLayoutProvider from "@/components/providers/UserLayoutProvider"

export default function Portfolio() {
  return (
    <UserLayoutProvider>
      <MainContentLayout>
        <h1 className="text-4xl ">My Porfolio</h1>
        <p className="text-lg">localhost:3000/portfolio</p>
        <Icon iconName="user-fill" className="text-purple-400 text-4xl" ></Icon>
      </MainContentLayout>
    </UserLayoutProvider>
  )
}