'use client'

import React, { useEffect, useState } from 'react'

import OwnedStocks from "@/components/common/Lists/OwnedStocks"
import MainContentLayout from "@/components/providers/MainContentLayout"
import UserLayoutProvider from "@/components/providers/UserLayoutProvider"
import { GetToken, GetUserInfo, GetUserOwnedStocks } from '@/utils/helpers/services'

export default function Portfolio() {
  const [userStocks, setUserStocks] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchStocks = async () => {
    try {
      const token = GetToken();
      if (token) {
        // const response = await GetUserOwnedStocks(token);

        // setUserStocks(response);
        // console.log(response)
        const response = await GetUserOwnedStocks(token);
        setUserStocks(response);
        setLoading(false);
      } else {
        console.error("User not logged in");
      }
    } catch (err) {
      console.error("Error Fetching Stocks", err);
    };
  };

  useEffect(() => {
    fetchStocks();
    
  }, []);

  const UserInfo = GetUserInfo()
  return (
    <UserLayoutProvider>
      <MainContentLayout>
        <h1 className="text-2xl font-bold text-gray-900">{UserInfo?.first_name} {UserInfo?.last_name}&apos;s Portfolio</h1>
        <OwnedStocks userStocks={userStocks} loading />
      </MainContentLayout>
    </UserLayoutProvider>
  )
}