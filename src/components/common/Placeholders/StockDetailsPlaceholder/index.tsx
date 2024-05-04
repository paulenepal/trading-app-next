import React from 'react';

export default function StockDetailsCardPlaceholder() {
  return (
    <>
      {/* header placeholder */}
      <div className="w-full h-44 p-6 bg-gray-200 rounded flex flex-row justify-between items-center border-b-2">
        <div className="flex items-center">
          <div className="avatar mr-5">
            <div className="skeleton w-24 h-24 rounded-lg"></div>
          </div>
          <div>
            <div className="skeleton w-24 h-6 mb-1"></div>
            <div className="skeleton w-32 h-4"></div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="skeleton w-20 h-16"></div>
        </div>
      </div>

      {/* details placeholder */}
      <div className="w-full bg-gray-200 px-4 p-4 flex flex-col justify-around items-center">
        <div className="flex flex-row w-full p-8">
        
          {/* graph placeholder */}
          <div className='flex flex-col justify-start items-center w-4/6 bg-white rounded-xl p-4 mr-10'>
            <div className="flex flex-col p-8 w-full">
              <div className='skeleton w-32 h-6 mb-4'></div>
              <div className='skeleton w-full h-96'></div>
            </div>
          </div>

          {/* about placeholder */}
          <div className='flex justify-center items-start w-2/6 h-auto rounded-xl'>
            <div className='h-full w-full'>
              <div className="flex flex-col p-8 w-full bg-white rounded-xl mb-4">
                <div className='skeleton w-full h-4 mb-2'></div>
                <div className='skeleton w-full h-4 mb-2'></div>
                <div className='skeleton w-full h-4 mb-2'></div>
                <div className='skeleton w-full h-4 mb-2'></div>
                <div className='skeleton w-full h-4 mb-2'></div>
                <div className='skeleton w-36 h-4 mb-4'></div>
                <div className='flex flex-row justify-between mb-4'>
                  <div className='skeleton w-20 h-4'></div>
                  <div className='skeleton w-20 h-4'></div>
                </div>
                <div className='skeleton w-full h-4'></div>
              </div>
              
              {/* news placeholder */}
              <div className="flex flex-col p-8 w-full bg-white rounded-xl">
              <div className='skeleton w-full h-4 mb-2'></div>
                <div className='skeleton w-36 h-20 mr-4'></div>
                <div>
                  <div className='skeleton w-full h-6 mb-2'></div>
                  <div className='skeleton w-full h-4 mb-2'></div>
                  <div className='skeleton w-full h-4 mb-2'></div>
                  <div className='skeleton w-full h-4'></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
