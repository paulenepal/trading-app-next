'use client'

import Icon from "@/components/common/icon"
import AdminLayoutProvider from "@/components/providers/AdminLayoutProvider"
import MainContentLayout from "@/components/providers/MainContentLayout"

import UserCard from "@/components/common/Cards/UserCard";

export default function AdminDashboard() {
  return (
    <AdminLayoutProvider>
      <MainContentLayout>
        Admin Dashboard
      </MainContentLayout>
    </AdminLayoutProvider>
  )
}