'use client'

import React, { useState, useEffect } from 'react';

import HighlightText from '@/components/common/Texts/HighlightText';
import Image from 'next/image';

import { USER_NAV_ROUTES } from '@/utils/constants/routes';

import { useRouter, usePathname } from 'next/navigation';

import { GetUserInfo } from '@/utils/constants/services';
import UserButton from '@/components/resources/SideNavigation/UserButton';
import NavButton from '@/components/resources/SideNavigation/NavButton';

export default function SideNavigation ({type} : {type: string}) {
  const [userInfo, setUserInfo] = useState(GetUserInfo());
  const [activeRoute, setActiveRoute] = useState<string>('');

  const pathname = usePathname();

  useEffect(() => {
    setActiveRoute(pathname)
  }, [pathname])

  return (
    <div className='fixed bg-primary left-0 top-0 h-sidenav w-2/12 p-4 rounded-xl m-4'>
      {
        type === 'user' ? <UserNav userInfo={userInfo} activeRoute={pathname} /> : <AdminNav />
      }
    </div>
  )
}

const UserNav = ({userInfo, activeRoute}: {userInfo: any, activeRoute: any}) => {
  return (
    <div className='w-full h-full flex flex-col justify-between items-center *:w-full'>
      {/* <Image alt='' src='/logo.svg' width={100} height={100} className='text' /> */}
      <div className='flex flex-col gap-2'>
        {
          USER_NAV_ROUTES.map((nav: any, index: number) => {
            return (
              <NavButton key={index} text={nav.text} iconName={nav.iconName} routeTo={nav.routeTo} activeRoute={activeRoute} />
            )
          })
        }
      </div>
      <div>
        <UserButton userInfo={userInfo} activeRoute={activeRoute} />
      </div>
    </div>
  )
}

const AdminNav = () => {
  return (
    <>
    </>
  )
}