'use client'

import ContentLayoutProvider from "@/components/common/ContentLayoutProvider"

export default function LandingHero() {
  return (
    <div className="bg-base-100 h-full bg-gradient-to-b from-transparent via-transparent to-primary text-primary-content">
      <ContentLayoutProvider>
        <div className="flex flex-col items-start justify-center h-full w-2/3 bg-">
          <h1 className="text-6xl font-bold w-full">Your Gateway to Smarter Trading</h1>
          <p className="font-medium">A place to find all the resources you need</p>
        </div>
      </ContentLayoutProvider>
    </div>
  )
}
