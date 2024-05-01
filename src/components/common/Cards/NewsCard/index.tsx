/* eslint-disable @next/next/no-img-element */
import React from 'react'

import {formatTimeAgo, formatTimePosted} from '@/utils/helpers/date-formatter.jsx'
import Link from 'next/link'

export default function NewsCard({newsDetails}) {
  return (
    <Link href={newsDetails.url} target='_blank' className='bg-gray-200 w-full h-fit flex flex-row gap-4 p-4 rounded-lg hover:bg-gray-300 transition-all ease-in-out'>
      <div className='flex items-center'>
        <img src={newsDetails.image} alt="news" className='image-full size-28 rounded-lg'/>
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <div>
          <h1 className='text-xl font-semibold line-clamp-1'>{newsDetails.headline}</h1>
          <p className='text-md line-clamp-1'>{newsDetails.summary}</p>
        </div>
        <p className='text-sm'>Published {formatTimeAgo(newsDetails.datetime)} |  {formatTimePosted(newsDetails.datetime)}</p>
        <p className='text-sm'>Source: {newsDetails.source}</p>
      </div>
    </Link>
  )
}
