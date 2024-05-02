'use client'

import { ReactNode } from "react"

import SideNavigation from "@/components/common/SideNavigation"

import { useRouter, usePathname } from "next/navigation"
import { GetRole } from "@/utils/helpers/services"

export default function GlobalLayoutProvider({ children } : { children: ReactNode}) {
  const router = useRouter()
  const currentPath = usePathname()
  const isOutsideApp = currentPath === '/onboarding' || currentPath === '/'
  const isUser = GetRole()
  return (
    <div className="w-full h-full">
      {children}
    </div>
  )
}