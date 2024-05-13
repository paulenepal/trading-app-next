'use client'

import React, { useEffect, useState} from "react"
import Icon from "@/components/common/icon"
import AdminLayoutProvider from "@/components/providers/AdminLayoutProvider"
import MainContentLayout from "@/components/providers/MainContentLayout"

import { GetToken, GetPendingTraders, GetAllTransactions } from "@/utils/helpers/services"
import HeaderCard from "@/components/common/Cards/AdminCard/HeaderCard";
import NewTraders from "@/components/common/Cards/AdminCard/PendingList"
import TopStocks from "@/components/common/Lists/TopStocks"
import RecentTransactions from "@/components/common/Cards/AdminCard/Transaction"

export default function AdminDashboard() {
  const [traders, setTraders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userTransactions, setUserTransactions] = useState([]);

  const fetchTraders = async () => {
    try {
      const token = GetToken();
      if (token) {
        const response = await GetPendingTraders(token);
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
    <AdminLayoutProvider>
      <div className='px-8'>
        <MainContentLayout>
          <HeaderCard />
          <TopStocks />
          <div className="w-full flex flex-row justify-between bg-gray-100 p-6 rounded-md">
            <RecentTransactions transactions={userTransactions} loading={loading} />
            <NewTraders traders={traders} loading={loading} />
          </div>
        </MainContentLayout>
      </div>
    </AdminLayoutProvider>
  )
}