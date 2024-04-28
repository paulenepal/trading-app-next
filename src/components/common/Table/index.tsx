import React from 'react';
import SellButton from '../Buttons/Sell';
import BuyButton from '../Buttons/Buy';

import { AssetColumn, StockColumn } from '@/utils/types/stocktypes';

export default function Table({ columns, rows }) {
  return (
    <div className="overflow-x-auto w-11/12">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={row.logo} alt={row.symbol} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{row.symbol}</div>
                    <div className="text-sm opacity-50">{row.company_name}</div>
                  </div>
                </div>
              </td>
              <td className={row.change < 0 ? "text-error" : "text-success"}>
                {row.change.toFixed(2)}
                <br/>
                <span className={`badge badge-ghost badge-sm ${row.change < 0 ? "text-error" : "text-success"}`}>
                  {row.change_percent}
                </span>
              </td>
              <td>{`$ ${row.latest_price.toFixed(2)}`}</td>
              <td>
                {columns === AssetColumn ? <div><BuyButton /><SellButton /></div> : <BuyButton />}
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}