'use client'

import SideNavigation from "@/components/common/SideNavigation"
import Icon from "@/components/common/icon"
import UserLayoutProvider from "@/components/providers/UserLayoutProvider"

export default function Dashboard() {
  return (
    <>
      <SideNavigation type={'user'}/>
      <UserLayoutProvider>
        
        asdsa
      </UserLayoutProvider>
    </>
  )
}