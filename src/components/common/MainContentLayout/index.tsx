'use client'

import { ReactNode } from "react"

export default function MainContentLayout({ children } : { children: ReactNode}) {
  return (
    <div className="flex-1 h-full w-full pl-80 ml-14 flex flex-col">
      {children}
    </div>
  )
}