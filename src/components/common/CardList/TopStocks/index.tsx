import React from 'react'
import StockCard from '../../Cards/StockCard'

export default function TopStocks() {
  return (
    <>
      <div className='carousel overflow-hidden overflow-x-scroll rounded-lg gap-2'>
        {/* <div className="flex flex-row w-fit gap-2 "> */}
          <StockCard />
          <StockCard />
          <StockCard />
          <StockCard />
          <StockCard />
          <StockCard />
          <StockCard />
          <StockCard />
          <StockCard />
        {/* </div> */}
      </div>
    </>
  )
}
