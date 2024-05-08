'use client'

import Icon from "@/components/common/icon"
import AdminLayoutProvider from "@/components/providers/AdminLayoutProvider"
import MainContentLayout from "@/components/providers/MainContentLayout"

import UserCard from "@/components/common/Cards/UserCard";

export default function AdminDashboard() {
  return (
    <AdminLayoutProvider>
      <div className='px-6'>
        <MainContentLayout>
          Admin Dashboard
        </MainContentLayout>
      </div>
    </AdminLayoutProvider>
  )
}