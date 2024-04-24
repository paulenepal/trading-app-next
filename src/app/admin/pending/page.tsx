'use client'

import Icon from "@/components/common/icon"

export default function Onboarding() {
  return (
    <div className="bg-base-100 text-primary-content">
      <h1 className="text-4xl ">Pending Users</h1>
      <p className="text-lg">localhost:3000/pending</p>
      <Icon iconName="user-fill" className="text-purple-400 text-4xl" ></Icon>
    </div>
  )
}