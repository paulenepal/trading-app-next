import React, { useState, useEffect, useMemo } from "react";

import StockCard from '../../Cards/StockCard'

import { getTopStocks, GetToken } from "@/utils/helpers/services";

export default function TopStocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const token = GetToken();

        if (token) {
          const response = await getTopStocks(token);
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

  console.log(stocks);

  return (
    <>
      <div className='carousel overflow-hidden overflow-x-scroll rounded-lg gap-2'>
        {/* <div className="flex flex-row w-fit gap-2 "> */}
        {stocks.map((stock, index) => (
          <StockCard key={index} stockDetails={stock} />
        ))}
        {/* </div> */}
      </div>
    </>
  )
}
