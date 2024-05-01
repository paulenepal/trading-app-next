import React, { useState, useEffect, useMemo } from "react";

import StockCard from '../../Cards/StockCard'

import { GetTopStocks, GetToken } from "@/utils/helpers/services";
import StockCardPlaceholder from "@/components/common/Placeholders/StockCardPlaceholder";

export default function TopStocks() {
  const [stocks, setStocks] = useState([]);
  const isLoading = useMemo(() => stocks.length === 0, [stocks]);
  const VirtualizedData = isLoading ? Array.from({ length: 3 }) : stocks;

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const token = GetToken();

        if (token) {
          const response = await GetTopStocks(token);
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

  return (
    <>
      
        {isLoading &&
          <div className="flex flex-row gap-2">
            {VirtualizedData.map((_, index) => (
              <StockCardPlaceholder key={index} />
            ))}
          </div>
        }
      
      <div className='carousel overflow-hidden overflow-x-scroll rounded-lg gap-2'>
        {stocks.map((stock, index) => (
          <StockCard key={index} stockDetails={stock} />
        ))}
      </div>
    </>
  )
}
