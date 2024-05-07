'use client'

import React, { useEffect, useState } from 'react'
import MainContentLayout from "@/components/providers/MainContentLayout"
import SharedLayoutProvider from "@/components/providers/SharedLayoutProvider"
import { GetAllTraders, GetToken } from '@/utils/helpers/services'
import Traders from '@/components/common/Lists/Admin/Traders'

export default function Accounts() {
  const [traders, setTraders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTraders = async () => {
    try {
      const token = GetToken();
      if (token) {
        const response = await GetAllTraders(token);
        setTraders(response.data);
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
      <h1 className="text-2xl font-bold text-gray-900">User Accounts</h1>
      <Traders traders={traders} loading={loading} />
      </MainContentLayout>
    </SharedLayoutProvider>
  )
} 