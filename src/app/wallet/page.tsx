'use client';

import React, { useEffect, useState } from 'react';

import BalanceCard from '@/components/common/Cards/BalanceCard';
import TransactionList from '@/components/common/Lists/Transactions';
import {
  GetToken,
  GetUserBalances,
  GetBalanceTransactions,
  DepositFunds,
  WithdrawFunds
} from '@/utils/helpers/services';
import MainContentLayout from '@/components/providers/MainContentLayout';

export default function Wallet() {
  const [balance, setBalance] = useState(0.0);
  const [transactions, setTransactions] = useState();

  const [switchTab, setSwitchTab] = useState('ALL');
  const [activeTab, setActiveTab] = useState('ALL');

  const onPressDeposit = async () => {
    try {
      const token = GetToken();
      if (token) {
        const response = await DepositFunds(500, token);
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Deposit', err);
    }
    fetchBalance();
    fetchTransactions('2');
    handleTabChange({tab: 'DEPOSIT', type: '2'});
  };

  const onPressWithdraw = async () => {
    try {
      const token = GetToken();
      if (token) {
        const response = await WithdrawFunds(500, token);
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Deposit', err);
    }
    fetchBalance();
    fetchTransactions('3');
    handleTabChange({tab: 'WITHDRAW', type: '3'});
  };

  const fetchTransactions = async (type: any) => {
    try {
      const token = GetToken();
      if (token) {
        const response = await GetBalanceTransactions(type);
        setTransactions(response.data.data.transactions);
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Fetching News', err);
    }
  };

  const fetchBalance = async () => {
    try {
      const token = GetToken();
      if (token) {
        const response = await GetUserBalances();
        setBalance(response.data.data.balance);
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Fetching News', err);
    }
  };

  const handleTabChange = ({tab, type}: {tab: string, type: string}) => {
    setActiveTab(tab);
    fetchTransactions(type);
  }

  useEffect(() => {
    fetchTransactions(0);
    fetchBalance();
  }, []);

  const balanceActionsProps = {
    onPressDeposit,
    onPressWithdraw,
  }

  const transactionProps = {
    fetchBalance,
    fetchTransactions,
    activeTab,
    handleTabChange
  };

  return (
    <MainContentLayout>
      <BalanceCard {...balanceActionsProps} balance={balance} />
      <TransactionList {...transactionProps} transactions={transactions} />
    </MainContentLayout>
  );
}
