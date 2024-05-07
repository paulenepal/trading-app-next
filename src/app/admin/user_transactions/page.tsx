'use client'

import React, { useEffect, useState } from 'react'
import MainContentLayout from "@/components/providers/MainContentLayout"
import SharedLayoutProvider from "@/components/providers/SharedLayoutProvider"
import { GetAllTransactions, GetToken, GetUserInfo } from '@/utils/helpers/services'
import UserTransactions from '@/components/common/Lists/Admin/UserTransactions'

export default function Accounts() {
  const [userTransactions, setUserTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserTransactions = async () => {
    try {
      const token = GetToken();
      if (token) {
        const response = await GetAllTransactions(token);
        setUserTransactions(response.data);
        setLoading(false);
      } else {
        console.error('Failed to fetch active users.')
      }
    } catch (error) {
      console.error("Error", error)
      setLoading(false);
    }
  };

  useEffect (() => {
    fetchUserTransactions();
  }, [])

  return (
    <SharedLayoutProvider>
      <MainContentLayout>
      <h1 className="text-2xl font-bold text-gray-900">User Transactions</h1>
      <UserTransactions transactions={userTransactions} loading={loading} />
      </MainContentLayout>
    </SharedLayoutProvider>
  )
} 