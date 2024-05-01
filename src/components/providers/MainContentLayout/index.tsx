'use client'

import { ReactNode } from "react"
import { isConfirmed } from "@/utils/helpers/services"

export default function MainContentLayout({ children } : { children: ReactNode}) {
  return (
    <>
      <div className={`h-full w-auto ${!isConfirmed() ? `max-md:pl-[5rem] pl-[18rem]` : `max-md:pl-[5rem] pl-[18.75rem] `} ml-14 py-4 pr-4 flex flex-col gap-2`}>
        {children}
      </div>
    </>
  )
}