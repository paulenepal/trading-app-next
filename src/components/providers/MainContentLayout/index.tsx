'use client'

import { ReactNode } from "react"
import { isAdmin, isConfirmed } from "@/utils/helpers/services"

export default function MainContentLayout({ children } : { children: ReactNode}) {

  const traderStyle = isConfirmed() ? `max-md:pl-[5rem] pl-[18.75rem]` : `max-md:pl-[5rem] pl-[18.75rem]`

  const userStyleCheck = isAdmin() ? `max-md:pl-[5rem] pl-[17.55rem]` : traderStyle

  return (
    <>
      <div className={`h-full w-auto ${userStyleCheck} ml-14 py-4 pr-4 flex flex-col gap-2`}>
        {children}
      </div>
    </>
  )
}