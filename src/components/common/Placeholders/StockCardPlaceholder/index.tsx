import React from 'react'

export default function StockCardPlaceholder() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-900 flex flex-row justify-center flex-grow w-1/3 h-full py-10">
      <div className="flex items-center p-4 md:p-6">
        <div className="w-12 h-12 border-4 border-gray-300 rounded-full animate-spin border-t-gray-900 dark:border-t-gray-50" />
      </div>
    </div>
  )
}
