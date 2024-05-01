'use client'

import React, { useState, useEffect } from "react";

import MainContentLayout from "@/components/providers/MainContentLayout"
import { GetIEXStock, GetToken } from "@/utils/helpers/services";
import { capitalize } from "@/utils/helpers/name-formatter";
import Stonk from "@/components/resources/market/CandleStick";
import AreaChart from "@/components/resources/market/AreaChart";
import AreaChartNoGrid from "@/components/resources/market/AreaChartNoGrid";

export default function Page({ params }: { params: {company: string}}) {
  const [stock, setStock] = useState([]);
  const stockName = capitalize(params.company)

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const token = GetToken();
      
        if (token) {
          const response = await GetIEXStock(params.company);
          setStock(response.data);
        } else {
          console.error("User not logged in");
        }
      } catch (err) {
        console.error("Error Fetching Stocks", err);
      };
    }
    fetchStock();
  }, [params.company]);

  console.log(stock);

  const formattedChartData = stock.historical_prices ? stock.historical_prices.map((item) => ({
    date: item.date,
    open: item.open,
    low: item.low,
    high: item.high,
    close: item.close,
    volume: item.volume
  })) : [];
  

  console.log(formattedChartData);

  return (
    <>
    <MainContentLayout>
    <div>
      <h1>This Page is {stockName}</h1>
  
      {stockName} latest price: {stock.latest_price}
      <p>News Headline: {stock && stock.news && stock.news.headline}</p>
      <p>{stock && stock.historical_prices && stock.historical_prices[0].close }</p>
      
      <Stonk
        chartData={formattedChartData}
      />
      <br />

      <AreaChart
        chartData={formattedChartData}
        />

        <br />

      <AreaChartNoGrid
        chartData={formattedChartData}
      />

    </div>
    </MainContentLayout>
    </>
  );
};

