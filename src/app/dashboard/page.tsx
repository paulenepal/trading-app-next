'use client'

import NewsList from "@/components/common/Lists/News";
import TopStocks from "@/components/common/Lists/TopStocks";
import MainContentLayout from "@/components/providers/MainContentLayout"

export default function Dashboard() {
  return (
    <>
      <MainContentLayout>
        {/* promo card */}
        <div className="w-full h-44 bg-black rounded-xl">asdas</div>
        {/* Featured Market Stats */}
        <h1 className="text-2xl font-bold dark:text-gray-900 text-gray-100">Featured Stats</h1>
        <TopStocks/>
        <h1 className="text-2xl font-bold dark:text-gray-900 text-gray-100">Recent News</h1>
        <NewsList/>
      </MainContentLayout>
    </>
  );
}