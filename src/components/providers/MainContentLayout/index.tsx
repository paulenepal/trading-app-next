'use client'

import { ReactNode } from "react"

import SideNavigation from "@/components/common/SideNavigation"

export default function MainContentLayout({ children } : { children: ReactNode}) {
  return (
    <>
    <SideNavigation type={'user'}/>
    <div className="h-full w-full pl-80 ml-14 flex flex-col">
      {children}
    </div>
    </>
  )
}