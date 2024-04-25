'use client'

import Icon from "@/components/common/icon"

export default function Portfolio() {
  return (
    <div className="bg-base-100 text-primary-content">
      <h1 className="text-4xl ">My Porfolio</h1>
      <p className="text-lg">localhost:3000/portfolio</p>
      <Icon iconName="user-fill" className="text-purple-400 text-4xl" ></Icon>
    </div>
  )
}