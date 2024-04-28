'use client'

import { ReactNode } from "react"

export default function ContentLayoutProvider({ children } : { children: ReactNode}) {
  return (
    <div className="h-full w-full px-56 flex flex-row">
      {children}
    </div>
  )
}