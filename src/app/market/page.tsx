'use client'

import { useRouter } from "next/navigation";
import React, { useState, useEffect, useMemo } from "react";

import MainContentLayout from "@/components/providers/MainContentLayout";
import Table from "@/components/common/Table";

import { StockColumn, StockData } from "@/utils/types/stocktypes";
import { GetIEXStocks, GetToken } from "@/utils/helpers/services";
import { MAIN_ROUTES } from "@/utils/constants/routes";
import BuyButton from "@/components/common/Buttons/Buy";

export default function StockMarket() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const token = GetToken();

        if (token) {
          const response = await GetIEXStocks(token);
          setStocks(response.data);
        } else {
          console.error("User not logged in");
        }
      } catch (err) {
        console.error("Error Fetching Stocks", err);
      };
    };
    fetchStocks();
  }, []);

  const memorizedStocks = useMemo(() => stocks, [stocks]);

  return (
    <MainContentLayout>
      <div className="bg-base-100 text-primary-content mt-10">
        <h1 className="text-3xl">Stock Market</h1>
      </div>
      <Table
        columns={StockColumn}
        rows={memorizedStocks}
        button={<BuyButton />}
        onClick={(row) => {
          router.push(`${MAIN_ROUTES.MARKET}/${row.symbol}`)
      }} />
    </MainContentLayout>
  )
}