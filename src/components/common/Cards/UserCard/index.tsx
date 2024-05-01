import { GetUserInfo } from '@/utils/helpers/services'
import React from 'react'

export default function UserCard() {
  const userData = GetUserInfo()

  return (
    <div className="w-full h-44 bg-gradient-to-tl from-secondary to-white rounded-xl p-4">
      <h1 className='text-2xl font-bold text-gray-900'>Welcome, {userData.first_name} {userData.last_name}</h1>
      <h1>{userData.balance}</h1>
    </div>
  )
}
