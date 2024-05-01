'use client'

import { useRouter } from "next/navigation";
import React, { useState, useEffect, useMemo } from "react";

import MainContentLayout from "@/components/providers/MainContentLayout";
import TopStocks from "@/components/common/Lists/TopStocks";
import Table from "@/components/common/Table";

import { StockColumn, StockData } from "@/utils/types/stocktypes";
import { GetIEXStocks, GetToken } from "@/utils/helpers/services";
import { MAIN_ROUTES } from "@/utils/constants/routes";
import BuyButton from "@/components/common/Buttons/Buy";
import AreaChartNoGrid from "@/components/resources/market/AreaChartNoGrid";

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
          console.log(response.data);
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
  const handleRowClick = (row: StockData) => {
    router.push(`${MAIN_ROUTES.MARKET}/${row.symbol}`);
  };

  const formattedStocks = useMemo(
    () =>
      stocks.map((stock) => ({
        ...stock,
        chart: stock.chart
          ? stock.chart.map((item) => ({
              date: item.date,
              close: item.close,
              volume: item.volume,
            }))
          : [],
      })),
    [stocks]
  );
  
  // formattedStocks.forEach((formattedStock, index) => {
  //   console.log(`formattedStock[${index}]:`, formattedStock);
  // });

  return (
    <>
      <MainContentLayout>
      <h1 className="text-2xl font-bold text-gray-900">Featured Stats</h1>
        <TopStocks/>
        <h1 className="text-2xl font-bold text-gray-900">Explore Stocks</h1>
        <Table
          columns={StockColumn}
          // rows={memorizedStocks}
          rows={formattedStocks}
          button={<BuyButton />}
          onClick={handleRowClick}
        />
      </MainContentLayout>
    </>
  )
}