'use client'

import { ReactNode } from "react"

import SideNavigation from "@/components/common/SideNavigation"

export default function MainContentLayout({ children } : { children: ReactNode}) {
  return (
    <>
      <SideNavigation type={'user'}/>
      <div className="h-full w-auto max-md:pl-[5rem] pl-[18rem] ml-14 py-4 pr-4 flex flex-col gap-2">
        {children}
      </div>
    </>
  )
}