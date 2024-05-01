import React from 'react'

export default function NewsCardPlaceholder() {
  return (
    <div className='bg-gray-200 w-full h-fit flex flex-row gap-4 p-4 rounded-lg'>
      <div className='flex items-center'>
        <div className='skeleton w-28 h-28 rounded-lg'/>
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <div>
          <div className='skeleton w-44 h-4'/>
          <div className='skeleton w-24 h-4'/>
        </div>
        <div className='skeleton w-16 h-4'/>
        <div className='skeleton w-12 h-4'/>
      </div>
    </div>
  )
}
