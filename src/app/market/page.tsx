'use client'

import React, { useState, useEffect } from "react";
import GlobalLayoutProvider from "@/components/providers/GlobalLayoutProvider";
import MainContentLayout from "@/components/common/MainContentLayout";
import NavBar from "@/components/common/NavBar";
import Table from "@/components/resources/market/main";
import CommonTable from "@/components/common/Table";

import { StockColumn } from "@/utils/types/stocktypes";
import { GetIEXStocks, GetToken, GetUserInfo } from "@/utils/helpers/services";
import { StockData } from "@/utils/types/stocktypes";
import axios from "axios";

export default function StockMarket() {
  const [stocks, setStocks] = useState<StockData[]>([]);

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


  return (
    <GlobalLayoutProvider>
      <div className="flex">
      <NavBar />
        <MainContentLayout>
          <div className="bg-base-100 text-primary-content mt-10">
            <h1 className="text-3xl">Stock Market</h1>
          </div>
          {/* <CommonTable columns={StockColumn} rows={StockData} /> */}

          <ul className="text-black">
            {
              stocks.map((stock) => {
                return (
                  <li key={stock.symbol}>
                    <p>{stock.symbol}
                    {stock.latest_price}
                    {stock.change}
                    </p>
                  </li>
                )
              })
            }
          </ul>

        </MainContentLayout>
      </div>
    </GlobalLayoutProvider>
  )
}