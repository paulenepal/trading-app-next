'use client';

import React, { useState, useEffect } from 'react';

import HighlightText from '@/components/common/Texts/HighlightText';
import Image from 'next/image';

import { ADMIN_NAV_ROUTES, USER_NAV_ROUTES } from '@/utils/constants/routes';

import { useRouter, usePathname } from 'next/navigation';

import Logo from '@/components/common/Logo';

import { GetUserInfo, isConfirmed } from '@/utils/constants/services';
import UserButton from '@/components/resources/SideNavigation/UserButton';
import NavButton from '@/components/resources/SideNavigation/NavButton';
import Link from 'next/link';
import Icon from '../icon';

export default function SideNavigation({ type }: { type: string }) {
  const [userInfo, setUserInfo] = useState(GetUserInfo());
  const [activeRoute, setActiveRoute] = useState<string>('');

  const pathname = usePathname();

  useEffect(() => {
    setActiveRoute(pathname);
    console.log(userInfo)
  }, [pathname]);

  return (
    <div className="fixed bg-primary left-0 top-0 h-sidenav w-auto px-4 py-6 rounded-xl m-4">
      {type === 'user' ? (
        <UserNav userInfo={userInfo} activeRoute={pathname} />
      ) : (
        <AdminNav userInfo={userInfo} activeRoute={pathname} />
      )}
    </div>
  );
}

const UserNav = ({
  userInfo,
  activeRoute,
}: {
  userInfo: any;
  activeRoute: any;
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center *:w-full">
      {/* <Image alt='' src='/logo.svg' width={100} height={100} className='text' /> */}
      <div className="flex flex-col gap-4 h-full">
        <div className="inline-flex w-auto flex-row gap-8 justify-between items-center my-0 mx-4 max-md:justify-center">
          <Link
            href="/"
            className="font-bold text-2xl leading-none text-info hover:text-neutral text-transition fade-in max-md:hidden"
          >
            trails.io
          </Link>
          <div className="hidden max-md:flex">
            {isConfirmed(userInfo.role) ? (
              <h1 className="text-info-content text-sm px-3 py-3.5 bg-info rounded-badge">
                <Icon
                  iconName="checkbox-circle-fill"
                  className="text-info-content text-lg"
                />
              </h1>
            ) : (
              <h1 className="text-warning-content text-sm px-3 py-1.5 bg-warning rounded-badge">
                <Icon
                  iconName="error-warning-fill"
                  className="text-warning-content text-lg"
                />
              </h1>
            )}
          </div>
          <div className="max-md:hidden">
            {isConfirmed(userInfo.role) ? (
              <h1 className="text-info-content text-sm px-3 py-1 bg-info rounded-badge flex flex-row gap-2 items-center">
                <Icon
                  iconName="checkbox-circle-fill"
                  className="text-info-content text-lg"
                />
                Approved
              </h1>
            ) : (
              <h1 className="text-warning-content text-sm px-3 py-1 bg-warning rounded-badge flex flex-row gap-2 items-center">
                <Icon
                  iconName="error-warning-fill"
                  className="text-warning-content text-lg"
                />
                Pending
              </h1>
            )}
          </div>
        </div>
        <div className="divider my-0 -mt-1" />
        <div className="flex flex-col gap-2">
          {USER_NAV_ROUTES.map((nav: any, index: number) => {
            return (
              <NavButton
                key={index}
                text={nav.text}
                iconName={nav.iconName}
                routeTo={nav.routeTo}
                activeRoute={activeRoute}
              />
            );
          })}
        </div>
      </div>
      <div>
        <UserButton userInfo={userInfo} activeRoute={activeRoute} />
      </div>
    </div>
  );
};

const AdminNav = ({
  userInfo,
  activeRoute,
}: {
  userInfo: any;
  activeRoute: any;
}) => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between items-center *:w-full">
        {/* <Image alt='' src='/logo.svg' width={100} height={100} className='text' /> */}
        <div className="flex flex-col gap-4 h-full">
          <div className="inline-flex w-auto flex-row justify-between items-center my-0 mx-4 ">
            <Link
              href="/"
              className="font-bold text-2xl leading-none text-info hover:text-neutral text-transition fade-in max-md:hidden"
            >
              trails.io
            </Link>
            <div className="max-md:hidden">
              <h1 className="text-info-content text-sm px-3 py-1 bg-info rounded-badge flex flex-row gap-2 items-center">
                <Icon
                  iconName="admin-fill"
                  className="text-info-content text-lg"
                />
                Admin
              </h1>
            </div>

            <div className='hidden max-md:block'>
              <h1 className="text-info-content text-sm px-3 py-1 bg-info rounded-badge flex flex-row gap-2 items-center">
                <Icon
                  iconName="admin-fill"
                  className="text-info-content text-lg"
                />
              </h1>
            </div>
            
          </div>
          <div className="divider my-0 -mt-1" />
          <div className="flex flex-col gap-2 h-full">
            {ADMIN_NAV_ROUTES.map((nav: any, index: number) => {
              return (
                <NavButton
                  key={index}
                  text={nav.text}
                  iconName={nav.iconName}
                  routeTo={nav.routeTo}
                  activeRoute={activeRoute}
                />
              );
            })}
          </div>
        </div>

        <div>
          <UserButton userInfo={userInfo} activeRoute={activeRoute} />
        </div>
      </div>
    </>
  );
};
