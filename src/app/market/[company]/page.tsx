'use client'

import React, { useState, useEffect } from "react";

import MainContentLayout from "@/components/providers/MainContentLayout"
import UserLayoutProvider from "@/components/providers/UserLayoutProvider"

import { GetIEXStock, GetToken } from "@/utils/helpers/services";
import { capitalize } from "@/utils/helpers/name-formatter";
import { formatNum } from "@/utils/helpers/number-formatter";

import StockDetailsCard from "@/components/common/Cards/StockDetailsCard";
import Stonk from "@/components/resources/market/CandleStick";
import TradeButton from "@/components/common/Buttons/Trade";

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

  console.log(stock);

  const formattedChartData = stock.historical_prices ? stock.historical_prices.map((item) => ({
    date: item.date,
    open: item.open,
    low: item.low,
    high: item.high,
    close: item.close,
    volume: item.volume
  })) : [];

  const formattedEmp = formatNum(stock.employees)
  // console.log(formattedChartData);

  return (
    <UserLayoutProvider>
      <MainContentLayout>
        {stock && (
          <StockDetailsCard
            logo={stock.logo}
            symbol={stockName}
            latestPrice={stock.latest_price}
            companyName={stock.company_name}
            change={stock.change}
            changePercent={stock.change_percent}
            button={<TradeButton/>}
            chart={
              <Stonk chartData={formattedChartData}
              height={500}
              width={700}/>
            }
            details={stock.description}
            website={stock.website}
            ceo={stock.ceo}
            employees={formattedEmp}
            exchange={stock.exchange}
            image={stock && stock.news && stock.news.image}
            headline={stock && stock.news && stock.news.headline}
            datetime={stock && stock.news && stock.news.datetime}
            source={stock && stock.news && stock.news.source}
            newsWebsite={stock && stock.news && stock.news.url}
          />
        )}
      </MainContentLayout>
    </UserLayoutProvider>
  );
};

