'use client'

import { ReactNode } from "react"

export default function UserLayoutProvider({ children } : { children: ReactNode}) {
  return (
    <div className="h-full w-full max-md:px-20 px-56 flex flex-col justify-center items-center">
      {children}
    </div>
  )
}