'use client'

import Icon from "@/components/common/icon";
import GlobalLayoutProvider from "@/components/common/GlobalLayoutProvider";
import MainContentLayout from "@/components/common/MainContentLayout";
import NavBar from "@/components/common/NavBar";
import Table from "@/components/resources/market/main";

export default function Market() {
  return (
    <GlobalLayoutProvider>
      <div className="flex">
      <NavBar />
        <MainContentLayout>
          <div className="bg-base-100 text-primary-content mt-10">
            <h1 className="text-3xl">Stock Market</h1>
          </div>
          <Table />
        </MainContentLayout>
      </div>
    </GlobalLayoutProvider>
  )
}