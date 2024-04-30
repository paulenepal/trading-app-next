'use client'

import TopStocks from "@/components/common/CardList/TopStocks";
import MainContentLayout from "@/components/providers/MainContentLayout"


export default function Dashboard() {
  return (
    <>
      <MainContentLayout>
        {/* promo card */}
        <div className="w-full h-44 bg-black rounded-xl">asdas</div>
        {/* Featured Market Stats */}
        <TopStocks/>
      </MainContentLayout>
    </>
  );
}