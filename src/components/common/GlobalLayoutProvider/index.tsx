'use client'

import { ReactNode } from "react"



export default function GlobalLayoutProvider({ children } : { children: ReactNode}) {
  return (
    <div className="px-32">
      {children}
    </div>
  )
}