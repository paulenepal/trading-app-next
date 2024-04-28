'use client'

import { ReactNode } from "react"

export default function GlobalLayoutProvider({ children } : { children: ReactNode}) {
  return (
    <div className="w-full h-full">
      {children}
    </div>
  )
}