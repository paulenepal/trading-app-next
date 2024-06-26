'use client'

import { ReactNode, useEffect } from "react"

import SideNavigation from "@/components/common/SideNavigation"

import { useRouter } from 'next/navigation';
import { isAdmin } from "@/utils/helpers/services";
import { isSignedIn } from "@/utils/helpers/authHelper";

export default function UserLayoutProvider({ children } : { children: ReactNode}) {
  const router = useRouter();

  useEffect(() => {
    // isSignedIn() ? null : isAdmin() ? router.push('/admin') : router.push('/onboarding')
    isAdmin() ? router.push('/admin') : isSignedIn() ? null : router.push('/onboarding')
  }, []);

  return (
    <>
      <SideNavigation type={'user'}/>
        {children}
    </>
  )
}