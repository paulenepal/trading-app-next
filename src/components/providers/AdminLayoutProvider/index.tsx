'use client'

import { ReactNode, useEffect } from "react"

import SideNavigation from "@/components/common/SideNavigation"

import { useRouter } from 'next/navigation';
import { isAdmin } from "@/utils/helpers/services";
import { isSignedIn } from "@/utils/helpers/authHelper";

export default function AdminLayoutProvider({ children } : { children: ReactNode}) {
  const router = useRouter();

  useEffect(() => {
    isSignedIn() ? isAdmin() ? null : router.push('/dashboard') : router.push('/onboarding')
  }, []);

  return (
    <>
      <SideNavigation type={'admin'}/>
        {children}
    </>
  )
}
