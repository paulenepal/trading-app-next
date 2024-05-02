'use client';

import React, { useState, useEffect } from 'react';

import { ADMIN_NAV_ROUTES, APPROVED_ROUTES, PENDING_ROUTES } from '@/utils/constants/routes';

import { usePathname } from 'next/navigation';

import { GetUserInfo, updateUserInfo, isConfirmed, GetRole } from '@/utils/helpers/services';
import UserButton from '@/components/resources/SideNavigation/UserButton';
import NavButton from '@/components/resources/SideNavigation/NavButton';
import Link from 'next/link';
import Icon from '@/components/common/icon';
import SignOutButton from '@/components/resources/SideNavigation/SignOutButton';

export default function SideNavigation({ type }: { type: string }) {
  const [userInfo, setUserInfo] = useState(GetUserInfo());
  const [userRole, setUserRole] = useState(GetRole());
  const [userRoutes, setUserRoutes] = useState([]);
  
  const [activeRoute, setActiveRoute] = useState<string>('');

  const pathname = usePathname();

  const handleUserRoutes = () => {
    isConfirmed() ?  setUserRoutes(APPROVED_ROUTES) : setUserRoutes(PENDING_ROUTES);
  }

  useEffect(() => {
    handleUserRoutes()
  }, []);

  useEffect(() => {
    setInterval(() => {
      if (userInfo?.length === 0) {
        const user = GetUserInfo();
        setUserInfo(user);
      }
      const user = updateUserInfo(userInfo.id);
      setUserInfo(user);
      console.info('Updated User Info')
    }, 10000);
  }, []);

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  return (
    <div className="fixed bg-primary left-0 top-0 h-sidenav w-auto px-4 py-6 rounded-xl m-4">
      {type === 'user' ? (
        <TraderNav userRoutes={userRoutes} userInfo={userInfo} activeRoute={pathname} userRole={userRole} />
      ) : (
        <AdminNav userInfo={userInfo} activeRoute={pathname} userRole={userRole} />
      )}
    </div>
  );
}

const TraderNav = ({
  userRoutes,
  userInfo,
  userRole,
  activeRoute,
}: {
  userRoutes: any;
  userInfo: any;
  userRole: any;
  activeRoute: any;
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center *:w-full">
      {/* <Image alt='' src='/logo.svg' width={100} height={100} className='text' /> */}
      <div className="flex flex-col gap-4 h-full">
        <div className="inline-flex w-auto flex-row gap-8 justify-between items-center my-0 mx-4 max-md:justify-center">
          <Link
            href="/"
            className="font-bold text-2xl leading-none text-info hover:text-neutral text-transition max-md:hidden"
          >
            trails.io
          </Link>
          <div className='tooltip tooltip-right tooltip-base-100' data-tip={isConfirmed() ? 'Verified Trader' : 'Pending Admin Approval'}>
            <div className="hidden max-md:flex">
              {isConfirmed() ? (
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
              {isConfirmed() ? (
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
        </div>
        <div className="divider my-0 -mt-1" />
        <div className="flex flex-col gap-2">
          {userRoutes.map((nav: any, index: number) => {
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
      <div className="flex max-lg:flex-col flex-row justify-between gap-4">
        <UserButton activeRoute={activeRoute} />
        <SignOutButton />
      </div>
    </div>
  );
};

const AdminNav = ({
  userInfo,
  userRole,
  activeRoute,
}: {
  userInfo: any;
  userRole: any;
  activeRoute: any;
}) => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between items-center *:w-full">
        {/* <Image alt='' src='/logo.svg' width={100} height={100} className='text' /> */}
        <div className="flex flex-col gap-4 h-full">
          <div className="inline-flex w-auto flex-row gap-8 justify-between items-center my-0 mx-4 max-md:justify-center">
            <Link
              href="/"
              className="font-bold text-2xl leading-none text-info hover:text-neutral text-transition max-md:hidden"
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
                  // routeTo={nav.routeTo}
                  routeTo={nav.routeTo}
                  activeRoute={activeRoute}
                />
              );
            })}
          </div>
        </div>

        <div className="flex max-lg:flex-col flex-row justify-between gap-4">
          <UserButton activeRoute={activeRoute} />
          <SignOutButton />
        </div>
      </div>
    </>
  );
};
