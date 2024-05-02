'use client'

import { ReactNode, useEffect } from "react"

import SideNavigation from "@/components/common/SideNavigation"

import { authCheck } from "@/utils/helpers/authHelper"
import { useRouter } from 'next/navigation';
import { isAdmin } from "@/utils/helpers/services";
import { isSignedIn } from "@/utils/helpers/authHelper";

export default function SharedLayoutProvider({ children } : { children: ReactNode}) {
  const router = useRouter();

  useEffect(() => {
    isSignedIn() ? null : router.push('/onboarding')
  }, []);

  return (
    <>
      <SideNavigation type={authCheck}/>
        {children}
    </>
  )
}