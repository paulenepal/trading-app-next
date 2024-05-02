/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { formatToDollar } from '@/utils/helpers/currency-formatter';
import { formatTimePosted } from '@/utils/helpers/date-formatter';
import { FormatTransactionType } from '@/utils/helpers/datatype-formatter';

export default function StockTransactionList({ 
  stocks
  
}:{ 
  stocks: any 
}) {
  console.log(stocks, 'stocks');
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-md table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Logo</td>
              <td>Symbol</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Transaction Type</td>
              <td>Transaction Date</td>
            </tr>
          </thead>
          <tbody>
            {stocks &&
              stocks.transactions.data.map((stock: any, index: number) =>
                stock.attributes.transaction_type === 'share_buy' ||
                stock.attributes.transaction_type === 'share_sell' ? (
                  <tr key={stock.attributes.id}>
                    <th>{index + 1}</th>
                    <td>
                      {stocks.logo.map((logo: any, index: number) => {
                        if (stock.attributes.symbol === logo.symbol) {
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
                    </td>
                    <td>{stock.attributes.symbol}</td>
                    <td>{stock.attributes.quantity}</td>
                    <td>{formatToDollar(stock.attributes.price)}</td>
                    <td>
                      {FormatTransactionType(stock.attributes.transaction_type)}
                    </td>
                    <td>{formatTimePosted(stock.attributes.created_at)}</td>
                  </tr>
                ) : null
              )}
          </tbody>
        </table>
      </div>
    </>
  );
}
