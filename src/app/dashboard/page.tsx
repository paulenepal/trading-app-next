'use client'

import UserCard from "@/components/common/Cards/UserCard";
import NewsList from "@/components/common/Lists/News";
import TopStocks from "@/components/common/Lists/TopStocks";
import MainContentLayout from "@/components/providers/MainContentLayout"
import UserLayoutProvider from "@/components/providers/UserLayoutProvider"

export default function Dashboard() {
  return (
    <UserLayoutProvider>
      <MainContentLayout>
        <UserCard/>
        <h1 className="text-2xl font-bold text-gray-900">Featured Stats</h1>
        <TopStocks/>
        <h1 className="text-2xl font-bold text-gray-900">Recent News</h1>
        <NewsList/>
      </MainContentLayout>
    </UserLayoutProvider>
  );
}