'use client'

import React, { useEffect, useState } from 'react'
import MainContentLayout from "@/components/providers/MainContentLayout"
import SharedLayoutProvider from "@/components/providers/SharedLayoutProvider"
import { GetAllTraders, GetToken } from '@/utils/helpers/services'
import Traders from '@/components/common/Lists/Admin/Traders'
import CallCreateUserModal from '@/components/common/Buttons/AddButton'
import EditUserModal from '@/components/common/Modals/EditUserModal'

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
      <div className='px-8 py-2'>
        <MainContentLayout>
          <div className='flex flex-row justify-between w-full mb-4'>
            <h1 className="text-2xl font-bold text-gray-900">User Accounts</h1>
            <CallCreateUserModal />
          </div>
        <Traders traders={traders} loading={loading} />
        </MainContentLayout>
      </div>
    </SharedLayoutProvider>
  )
} 