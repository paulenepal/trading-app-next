'use client'

import React, { useState, useEffect, use } from "react";

import { StockData } from "@/utils/types/stocktypes";
import { GetIEXStock, GetToken } from "@/utils/helpers/services";


export default function Page({ params }: { params: {company: string}}) {
  const [stock, setStock] = useState<StockData | null>(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const token = GetToken();
      
        if (token) {
          const stock = await GetIEXStock(params.company);
          setStock(stock.data);
          console.log(stock.data);
        } else {
          console.error("User not logged in");
        }
      } catch (err) {
        console.error("Error Fetching Stocks", err);
      };
    }
    fetchStock();
  }, [params.company]);

  return (
    <div>
      <h1>This Page is {params.company}</h1>
  
        hey: {stock.latest_price}

    </div>
  );
};

