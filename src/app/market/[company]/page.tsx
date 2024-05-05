'use client'

import React, { useState, useEffect } from "react";

import MainContentLayout from "@/components/providers/MainContentLayout"
import UserLayoutProvider from "@/components/providers/UserLayoutProvider"
import { GetIEXStock, GetToken } from "@/utils/helpers/services";
import { capitalize } from "@/utils/helpers/name-formatter";
import Stonk from "@/components/resources/market/CandleStick";
import AreaChart from "@/components/resources/market/AreaChart";
import AreaChartNoGrid from "@/components/resources/market/AreaChartNoGrid";
import StockHeaderCard from "@/components/common/Cards/StockHeaderCard";
import BuyButton from "@/components/common/Buttons/Buy";
import ChartCard from "@/components/common/Cards/ChartCard";

export default function Page({ params }: { params: {company: string}}) {
  const [stock, setStock] = useState([]);
  const stockName = capitalize(params.company)

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const token = GetToken();
      
        if (token) {
          const stock = await GetIEXStock(params.company);
          setStock(stock.data);
        } else {
          console.error("User not logged in");
        }
      } catch (err) {
        console.error("Error Fetching Stocks", err);
      };
    }
    fetchStock();
  }, [params.company]);

  const formattedChartData = stock.historical_prices ? stock.historical_prices.map((item) => ({
    date: item.date,
    open: item.open,
    low: item.low,
    high: item.high,
    close: item.close,
    volume: item.volume
  })) : [];

  return (
    <UserLayoutProvider>
      <MainContentLayout>
        {stock && (
          <StockHeaderCard
            logo={stock.logo}
            symbol={stockName}
            latestPrice={stock.latest_price}
            companyName={stock.company_name}
            change={stock.change}
            changePercent={stock.change_percent}
            button={<BuyButton/>}
          />
        )}

        <div>
          <p>News Headline: {stock && stock.news && stock.news.headline}</p>
          <Stonk
            chartData={formattedChartData}
            height={500}
            width={700}/>

          <br />

          <AreaChart
            chartData={formattedChartData}
            />

        </div>
      </MainContentLayout>
    </UserLayoutProvider>
  );
};

