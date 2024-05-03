/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { formatTimeAgo } from '@/utils/helpers/date-formatter';

export default function StockDetailsCard({
    logo, symbol, latestPrice,
    companyName, change, changePercent,
    button, details, chart,
    website, ceo, employees,
    exchange, headline, image, datetime,
    source, newsWebsite
  }) {
    return (
      <>
        {/* header */}
        <div className="w-full h-44 p-6 bg-gray-100/75 rounded flex flex-row justify-between items-center border-b-2">
          <div className="flex items-center">
            <div className="avatar mr-5">
              <div className="mask mask-squircle w-24 h-24 gap-4">
                <img src={logo} alt={symbol} />
              </div>
            </div>
            <div>
              <div className="text-xl font-medium">{symbol}
                <span className="mx-2">•</span>
                <span className="text-gray-600/75">{companyName} </span>
              </div>
              <div>
                {latestPrice && (
                  <span className="text-2xl font-bold mr-2">${latestPrice.toFixed(2)}</span>
                )}
                <span className={change < 0 ? "text-error" : "text-success"}>
                  <span className="font-bold">{change ? change.toFixed(2) : '0'}</span>
                  <span className="text-xs ml-1">(</span>
                  <span className="text-xs">{changePercent || '0'}</span>
                  <span className="text-xs">)</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {button}
          </div>
        </div>

        {/* details */}
        <div className="w-full bg-gray-300/50 px-4 p-4 flex flex-col justify-around items-center">
          <div className="flex flex-row w-full p-8">
          
          {/* graph */}
            <div className='flex flex-col justify-start items-center w-4/6 bg-white rounded-xl p-4 mr-10'>
              <div className="flex flex-col p-8 w-full">
                <h1 className='text-lg font-medium'>Performance</h1>
                <h3 className='text-sm mt-1'>
                  <span className={change < 0 ? "text-error" : "text-success"}>
                    <span>{changePercent || '0'}</span>
                    <span> today</span>
                  </span>
                </h3>
                <div className='flex justify-center w-full my-4 border-2 py-10 rounded-md'> {chart} </div>
              </div>

            </div>

            {/* about */}
            <div className='flex justify-center items-start w-2/6 h-auto rounded-xl'>
              <div className='h-full w-full'>
                <div className="flex flex-col p-8 w-full bg-white rounded-xl mb-4">
                  <h1 className='text-lg font-medium border-b-2 py-2'>About {companyName} </h1>
                  <div className='flex justify-center w-full py-4'> {details} </div>
                  <div className='flex w-full py-2'>
                    <span className='font-medium'>Website:&nbsp;</span>
                    <span> <a href={website} target="_blank" rel="noopener noreferrer"> {website}</a></span>
                  </div>

                  <div className='flex flex-row justify-between mt-6 pb-2'>
                    <div>
                      <h1 className='text-sm'>CEO</h1>
                      <h3 className='font-bold'>{ceo}</h3>
                    </div>

                    <div>
                      <h1 className='text-sm'>Employees</h1>
                      <h3 className='font-bold'>{employees}</h3>
                    </div>

                  </div>

                  <div className='mt-6'>
                    <h1 className='text-sm'>Exchange</h1>
                    <h3 className='font-bold'>{exchange}</h3>
                  </div>  

                </div>
                
                {/* news */}
                <div className="flex flex-col p-8 w-full bg-white rounded-xl">
                  <h1 className='text-lg font-medium border-b-2 py-2'>Latest News</h1>
                  <div className='flex flex-row justify-start w-full py-4'>
                    <div className="w-36 h-20 mr-4">
                      <a href={newsWebsite} target="_blank" rel="noopener noreferrer"> 
                        <img
                          alt="Company Logo"
                          className="image-full object-cover size-24 rounded-lg"
                          src={image}
                        />
                      </a>
                    </div>

                    <div>
                      <h1 className='font-bold'>
                        <a href={newsWebsite} target="_blank" rel="noopener noreferrer"> 
                          {headline}
                        </a>
                      </h1>
                      <h2 className='text-sm'>Source: {source}</h2>
                      <h2 className='text-sm'>Posted: {formatTimeAgo(datetime)}</h2>
                    </div>
                  </div>
                </div>

              </div>
          </div>
          </div>
        </div>

      </>
    );
  }