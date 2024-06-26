'use client';

import React, { useEffect, useState } from 'react';

import BalanceCard from '@/components/common/Cards/BalanceCard';
import TransactionList from '@/components/common/Lists/Transactions';
import {
  GetToken,
  GetUserBalances,
  GetBalanceTransactions,
  DepositFunds,
  WithdrawFunds,
} from '@/utils/helpers/services';

import {
  openModal,
  closeModal,
} from '@/utils/helpers/modalcontrols';
import MainContentLayout from '@/components/providers/MainContentLayout';
import UserLayoutProvider from '@/components/providers/UserLayoutProvider';
import DepositModal from '@/components/common/Modals/DepositModal';
import WithdrawModal from '@/components/common/Modals/WithdrawModal';

export default function Wallet() {
  const [balance, setBalance] = useState(0.0);
  const [transactions, setTransactions] = useState();

  const [switchTab, setSwitchTab] = useState('ALL');
  const [activeTab, setActiveTab] = useState('ALL');

  const onPressDeposit = async ({ amount }: { amount: number }) => {
    try {
      const token = GetToken();
      if (token) {
        const response = await DepositFunds(amount, token);
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Deposit', err);
    }
    fetchBalance();
    fetchTransactions('2');
    handleTabChange({ tab: 'DEPOSIT', type: '2' });
  };

  const onPressWithdraw = async ({amount}: {amount:number}) => {
    try {
      const token = GetToken();
      if (token) {
        const response = await WithdrawFunds(amount, token);
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Deposit', err);
    }
    fetchBalance();
    fetchTransactions('3');
    handleTabChange({ tab: 'WITHDRAW', type: '3' });
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

  const handleTabChange = ({ tab, type }: { tab: string; type: string }) => {
    setActiveTab(tab);
    fetchTransactions(type);
  };

  useEffect(() => {
    fetchTransactions(0);
    fetchBalance();
  }, []);

  const transactionProps = {
    fetchTransactions,
    activeTab,
    handleTabChange,
  };

  return (
    <UserLayoutProvider>
      <MainContentLayout>
        <BalanceCard
          onPressDeposit={() => openModal('deposit_modal')}
          onPressWithdraw={() => openModal('withdraw_modal')}
          balance={balance}
        />
        <TransactionList {...transactionProps} transactions={transactions} />
        <DepositModal
          onPressSubmit={() => closeModal('deposit_modal')}
          handleDeposit={onPressDeposit}
        />
        <WithdrawModal 
          balance={balance}
          onPressSubmit={() => closeModal('withdraw_modal')}
          handleWithdraw={onPressWithdraw}
        />
      </MainContentLayout>
    </UserLayoutProvider>
  );
}
