/* eslint-disable @next/next/no-img-element */

import React from 'react';

import { GetToken, GetStockDetails, BuyStock } from '@/utils/helpers/services';
import { openModal } from '@/utils/helpers/modalcontrols';
import BuyStocksModal from '@/components/common/Modals/BuyStocksModal';

export default function OwnedStocks({
  userStocks,
  loading,
  fetchStocks,
}: {
  userStocks: any;
  loading: boolean;
  fetchStocks: Function;
}) {
  const fetchStockDetails = async (symbol: string) => {
    try {
      const token = GetToken();
      if (token) {
        return await GetStockDetails(token);
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Fetching Stocks', err);
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-md table-pin-rows table-pin-cols table-">
          <thead>
            <tr className="*:text-center">
              <th></th>
              <td>Company</td>
              <td>Quantity</td>
              <td>Latest Market Price</td>
              <td>Profit Loss</td>
              <td>Investment Value</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {userStocks.data && userStocks.data.length > 0 ? (
              userStocks.data.map((stock: any, index: number) => (
                <tr key={stock.id} className="*:text-center *:font-medium">
                  <th>{index + 1}</th>
                  <td className="flex flex-col justify-center items-center">
                    {userStocks.logo.map((logo: any, index: number) => {
                      if (stock.symbol === logo.symbol) {
                        return (
                          <img
                            key={index}
                            src={logo.logo}
                            alt={logo.symbol}
                            className="size-16"
                          />
                        );
                      }
                      return null;
                    })}
                    <p className="text-gray-400 text-sm">{stock.symbol}</p>
                  </td>
                  <td>{stock.quantity}</td>
                  <td>{stock.latest_price}</td>
                  <td>{stock.profit_loss}</td>
                  <td>{stock.value}</td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => openModal(`${stock.symbol}_modal`)}
                    >
                      Buy
                    </button>
                    <button className="btn btn-primary ml-2">Sell</button>
                  </td>
                  <BuyStocksModal stock={stock} key={stock.symbol} updateStocks={fetchStocks} />
                </tr>
              ))
            ) : userStocks.data === undefined && !loading ? (
              <tr>
                <td colSpan={7} className="text-center">
                  No stocks found
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  Loading Assets...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
