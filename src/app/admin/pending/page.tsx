'use client'

import React, { useEffect, useState } from 'react'
import MainContentLayout from "@/components/providers/MainContentLayout"
import SharedLayoutProvider from "@/components/providers/SharedLayoutProvider"
import { GetPendingTraders, GetToken } from '@/utils/helpers/services'
import ActiveTraders from '@/components/common/Lists/Admin/Traders'

export default function Accounts() {
  const [traders, setTraders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTraders = async () => {
    try {
      const token = GetToken();
      if (token) {
        const response = await GetPendingTraders(token);
        setTraders(response.data);
        console.log(response.data);
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
    fetchTraders();
  }, [])

  return (
    <SharedLayoutProvider>
      <MainContentLayout>
      <h1 className="text-2xl font-bold text-gray-900">Pending Users</h1>
      <ActiveTraders traders={traders} loading={loading} buttonType={'Approve'} />
      </MainContentLayout>
    </SharedLayoutProvider>
  )
} 