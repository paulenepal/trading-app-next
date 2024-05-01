'use client'

import { ReactNode } from "react"

import SideNavigation from "@/components/common/SideNavigation"

export default function UserLayoutProvider({ children } : { children: ReactNode}) {
  return (
    <>
      <SideNavigation type={'user'}/>
      <div className="h-full px-56 flex flex-col justify-center items-center">
        {children}
      </div>
    </>
  )
}