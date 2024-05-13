import CallCreateUserModal from '@/components/common/Buttons/AddButton'
import { formatToDollar } from '@/utils/helpers/currency-formatter'
import { GetUserInfo } from '@/utils/helpers/services'
import React, { useState } from 'react'

export default function HeaderCard() {
  const userData = GetUserInfo()

  return (
    <>
      <div className="w-full h-20 px-4 bg-gradient-to-tl from-secondary to-white rounded-xl p-4 flex flex-row max-md:flex-col gap-4 justify-center">
        <div className="h-full flex flex-row justify-between items-start flex-1 max-xl:hidden">
          <div>
            <h1 className='text-2xl font-bold text-gray-900'>Welcome, Admin {userData?.first_name}</h1>
          </div>
          <CallCreateUserModal />
        </div>
      </div>
    </>
  )
}
