import React from 'react';

export default function StockHeaderCard({
    logo,
    symbol,
    latestPrice,
    companyName,
    change,
    changePercent,
    button
  }) {
    return (
      <div className="w-full h-44 px-4 bg-gradient-to-tl from-secondary to-white rounded-xl p-4 flex flex-row justify-between items-center">
        <div className="flex items-center">
          <div className="avatar mr-4">
            <div className="mask mask-squircle w-24 h-24 gap-4">
              <img src={logo} alt={symbol} />
            </div>
          </div>
          <div>
            <div className="text-xl font-medium">{symbol} <span className="text-sm"> > {companyName} </span></div>
            <div>
            {latestPrice && (
              <div className="text-2xl font-bold mr-2">${latestPrice.toFixed(2)}</div>
            )}
            <div className={change < 0 ? "text-error" : "text-success"}>
              <span className="font-bold">{change ? change.toFixed(2) : '0'}</span>
              <span className="text-xs ml-1">{changePercent || '0'}</span>
            </div>
          </div>
          </div>
        </div>
        <div className="flex items-center">
          {button}
        </div>
      </div>
    );
  }
  