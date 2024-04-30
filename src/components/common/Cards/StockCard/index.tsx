import React from 'react';
import Image from "next/image"

import { formatToDollar } from "@/utils/helpers/currency-formatter";
import { MAIN_ROUTES } from "@/utils/constants/routes";
import {useRouter} from "next/navigation";

export default function StockCard({ stockDetails }) {
  const router = useRouter();
  return (
    <div className='carousel-item w-2/6'>
      <div className="bg-white shadow-md rounded-lg overflow-hidden justify-between dark:bg-gray-900 flex flex-col flex-grow w-1/3">
        <div className="flex items-center p-4 md:p-6">
          <div className="flex-shrink-0">
            <img
              alt="Company Logo"
              className="rounded-full"
              height={48}
              src={stockDetails.logo}
              style={{
                aspectRatio: '48/48',
                objectFit: 'cover',
              }}
              width={48}
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {stockDetails.company_name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {stockDetails.symbol}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {formatToDollar(stockDetails.latest_price)}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stockDetails.change_percent} today
            </p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 md:px-6 md:py-4 flex justify-end">
          <button className="mr-2 btn btn-primary btn-sm" onClick={() => router.push(`${MAIN_ROUTES.MARKET}/${stockDetails.symbol}`)}>View Company</button>
        </div>
      </div>
    </div>
  );
}