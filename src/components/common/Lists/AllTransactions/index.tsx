import React, { useEffect, useState } from 'react';

import {
  GetToken,
  GetStockTransactions,
  GetBalanceTransactions,
} from '@/utils/helpers/services';
import TransactionList from '@/components/common/Lists/Transactions';
import StockTransactionList from '@/components/common/Lists/StockTransactions';

export default function AllTransactions() {
  const [activeTab, setActiveTab] = useState('BALANCE');
  const [activeSubTab, setActiveSubTab] = useState('ALL');

  const [balanceTransactions, setBalanceTransactions] = useState();
  const [stockTransactions, setStockTransactions] = useState();

  const fetchBalanceTransactions = async (type: any) => {
    try {
      const token = GetToken();
      if (token) {
        const response = await GetBalanceTransactions(type);
        setBalanceTransactions(response.data.data.transactions);
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Fetching Balance', err);
    }
  };

  const fetchStockTransactions = async () => {
    try {
      const token = GetToken();
      if (token) {
        const response = await GetStockTransactions();
        setStockTransactions(response.data);
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Fetching Stocks', err);
    }

  }

  const handleTabChange = ({ tab, type }: { tab: string; type: string }) => {
    setActiveTab(tab);
    fetchStockTransactions()
  };

  const handleSubTabChange = ({ tab, type }: { tab: string; type: string }) => {
    setActiveSubTab(tab);
    fetchBalanceTransactions(type);
  }

  useEffect(() => {
    fetchBalanceTransactions(0);
    fetchStockTransactions();
  }, []);

  return (
    <>
      <div
        role="tablist"
        className="h-fit w-fit tabs tabs-bordered bg-transparent gap-2 rounded-lg"
      >
        <a
          role="tab"
          onClick={() => {
            handleTabChange({ tab: 'BALANCE', type: '0' });
          }}
          className={`tab hover:bg-secondary transition-all ease-in-out gap-2 ${
            activeTab === 'BALANCE' ? 'tab-active' : null
          }`}
        >
          Balance
        </a>
        <a
          role="tab"
          onClick={() => {
            handleTabChange({ tab: 'STOCKS', type: '2' });
          }}
          className={`tab hover:bg-secondary transition-all ease-in-out gap-2 ${
            activeTab === 'STOCKS' ? 'tab-active' : null
          }`}
        >
          Stocks
        </a>
      </div>
      {activeTab === 'BALANCE' && (
        <TransactionList
        fetchTransactions={fetchBalanceTransactions}
        transactions={balanceTransactions}
        activeTab={activeSubTab}
        handleTabChange={handleSubTabChange}
      />)}
      {activeTab === 'STOCKS' && (
        <StockTransactionList
          stocks={stockTransactions}
        />)}
    </>
  )
}
