'use client'

import { ReactNode } from "react"

import SideNavigation from "@/components/common/SideNavigation"

import { useRouter, usePathname } from "next/navigation"

export default function GlobalLayoutProvider({ children } : { children: ReactNode}) {
  const router = useRouter()
  const currentPath = usePathname()
  const isOutsideApp = currentPath === '/onboarding' || currentPath === '/'
  return (
    <div className="w-full h-full">
      {isOutsideApp ? null : <SideNavigation type={'user'} />}
      {children}
    </div>
  )
}