'use client'

import UserCard from "@/components/common/Cards/UserCard";
import NewsList from "@/components/common/Lists/News";
import TopStocks from "@/components/common/Lists/TopStocks";
import MainContentLayout from "@/components/providers/MainContentLayout"

export default function Dashboard() {
  return (
    <>
      <MainContentLayout>
        {/* promo card */}
        <UserCard/>
        {/* Featured Market Stats */}
        <h1 className="text-2xl font-bold text-gray-900">Featured Stats</h1>
        <TopStocks/>
        <h1 className="text-2xl font-bold text-gray-900">Recent News</h1>
        <NewsList/>
      </MainContentLayout>
    </>
  );
}