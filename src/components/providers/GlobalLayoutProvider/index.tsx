'use client'

import { ReactNode } from "react"

import SideNavigation from "@/components/common/SideNavigation"

export default function GlobalLayoutProvider({ children } : { children: ReactNode}) {
  return (
    <div className="w-full h-full">
      <SideNavigation type={'user'}/>
      {children}
    </div>
  )
}