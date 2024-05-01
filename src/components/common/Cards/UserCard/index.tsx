import { formatToDollar } from '@/utils/helpers/currency-formatter'
import { GetUserInfo } from '@/utils/helpers/services'
import React, { useState } from 'react'

export default function UserCard() {
  const [activeTab, setActiveTab] = useState('BALANCE')

  const userData = GetUserInfo()

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="w-full h-44 px-4 bg-gradient-to-tl from-secondary to-white rounded-xl p-4 flex flex-row max-md:flex-col gap-4 justify-between">
      <div className="h-full flex flex-col justify-between items-start flex-1 max-xl:hidden">
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Welcome, {userData.first_name} {userData.last_name}</h1>
          <p className='text-xs'>@{userData.username}</p>
          <p className='text-xs'>{userData.email}</p>
        </div>
        <div className="flex justify-center items-start gap-4">
          <button className="btn btn-sm bg-opacity-55 btn-primary">Deposit</button>
          <button className="btn btn-sm bg-opacity-55 text-primary-content hover:text-error-content btn-error">Withdraw</button>
        </div>
      </div>
      <div className='flex flex-col max-md:flex-auto max-md:justify-start max-md:gap-4 justify-between'>
        <div role="tablist" className="h-fit w-fit tabs bg-transparent tabs-boxed gap-2">
          <a role="tab" onClick={() => {handleTabChange('BALANCE')}} className={`tab hover:bg-secondary transition-all ease-in-out ${activeTab === 'BALANCE' ? 'tab-active' : null}`}>Balance</a>
          <a role="tab" onClick={() => {handleTabChange('STOCKS')}} className={`tab hover:bg-secondary transition-all ease-in-out ${activeTab === 'STOCKS' ? 'tab-active' : null}`}>Investments</a>
        </div>
        <div>
          {
            activeTab === 'BALANCE' ? <BalanceTab balance={userData.balance}/> : <StocksTab balance={userData.balance}/>
          }
        </div>
      </div>
    </div>
  )
}

const BalanceTab = ({balance} : {balance: any}) => {
  return (
    <div className='px-2'>
      <p className='text-xs'>My Balance</p>
      <h1 className='text-4xl font-bold leading-none'>{formatToDollar(balance)}</h1>
    </div>
  )
}

const StocksTab = ({balance} : {balance: any}) => {
  return (
    <div className='px-2'>
      <p className='text-xs'>My Total Investment</p>
      <h1 className='text-4xl font-bold leading-none'>{formatToDollar(balance)}</h1>
    </div>
  )
}