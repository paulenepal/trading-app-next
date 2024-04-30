'use client'

import SideNavigation from "@/components/common/SideNavigation"
import Icon from "@/components/common/icon"
import MainContentLayout from "@/components/providers/MainContentLayout"
import UserLayoutProvider from "@/components/providers/UserLayoutProvider"
import Image from "next/image"

export default function Dashboard() {
  return (
    <>
      <MainContentLayout>
        {/* promo card */}
        <div className="w-full h-44 bg-black rounded-xl">
          asdas
        </div>
        {/* Featured Market Stats */}
        <div className="flex flex-row w-full gap-2">
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-900 flex-grow">
          <div className="flex items-center p-4 md:p-6">
            <div className="flex-shrink-0">
              <Image
                alt="Company Logo"
                className="rounded-full"
                height={48}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width={48}
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Acme Inc.</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">ACME</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">$99.99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">+2.5% today</p>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 md:px-6 md:py-4 flex justify-end">
            <button className="mr-2 btn btn-primary btn-sm">
              Buy
            </button>
            <button className="mr-2 btn btn-primary btn-sm">
              Sell
            </button>
          </div>
        </div>
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-900 flex-grow">
          <div className="flex items-center p-4 md:p-6">
            <div className="flex-shrink-0">
              <Image
                alt="Company Logo"
                className="rounded-full"
                height={48}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width={48}
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Acme Inc.</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">ACME</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">$99.99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">+2.5% today</p>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 md:px-6 md:py-4 flex justify-end">
            <button className="mr-2 btn btn-primary btn-sm">
              Buy
            </button>
            <button className="mr-2 btn btn-primary btn-sm">
              Sell
            </button>
          </div>
        </div>
        </div>
      </MainContentLayout>
    </>
  )
}