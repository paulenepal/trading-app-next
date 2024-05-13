import React, { useState, useEffect } from "react";
import { formatToDollar } from "@/utils/helpers/currency-formatter";
import { formatTimestamp } from "@/utils/helpers/date-formatter";
import { firstLetter } from "@/utils/helpers/name-formatter";
import { GetToken, GetUserDetails } from "@/utils/helpers/services";

export default function RecentTransactions ({ transactions, loading } : { transactions: any, loading: boolean }) {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchUserDetails = async (userId) => {
      try {
        const token = GetToken();
        if (token) {
          const response = await GetUserDetails(userId);
          setUserDetails((prevUserDetails) => ({
            ...prevUserDetails, [userId]: response.data.data,
          }));
        } else {
          console.error('User not logged in');
        }
      } catch (error) {
        console.error('Error fetching user details:', error)
      }
    };

    if (transactions && transactions.data) {
      transactions.data.forEach((transaction: any) => {
        fetchUserDetails(transaction.user_id);
      });
    }
  }, [transactions]);

  const buySellTransactions = transactions.data ? transactions.data.filter((transaction: any) => 
    transaction.transaction_type === 'share_buy' || transaction.transaction_type === 'share_sell'
  ).slice(0, 5) : [];

  const depositWithdrawalTransactions = transactions.data ? transactions.data.filter((transaction: any) => 
    transaction.transaction_type === 'add_balance' || transaction.transaction_type === 'deduct_balance'
  ).slice(0, 5) : [];

  const renderUserDetails = (userId: string) => (
    <div className="font-bold text-left">
      {userDetails[userId]?.first_name || `TX00${userId}`} {userDetails[userId]?.last_name || `TX00${userId}`}
      <div className="text-sm opacity-50">@{userDetails[userId]?.username || `TX00${userId}`}</div>
      <div className="text-sm opacity-50">UID: TX00{userId}</div>
    </div>
  );

  const renderTransactionRows = (transactions: any[]) => (
    transactions.map((transaction: any) => (
      <tr key={transaction.id}>
        <td className="text-center">
          <div className="flex justify-center items-center gap-4">
            <div className="avatar online placeholder">
              <div className="bg-secondary text-neutral-content rounded-full w-16">
                <span className="text-xl">{firstLetter(userDetails[transaction.user_id]?.first_name)}{firstLetter(userDetails[transaction.user_id]?.last_name)}</span>
              </div>
            </div>
            {renderUserDetails(transaction.user_id)}
          </div>
        </td>
        <td className="font-bold">
        <span className={`badge badge-ghost badge-xl ${transaction.transaction_type === 'share_buy' || transaction.transaction_type === 'add_balance' ? 'text-primary' : 'text-error'}`}>
          {transaction.transaction_type === 'share_buy' ? 'BUY' : transaction.transaction_type === 'share_sell' ? 'SELL' : transaction.transaction_type === 'add_balance' ? 'DEPOSIT' : transaction.transaction_type === 'deduct_balance' ? 'WITHDRAWAL' : 'Unknown'}
        </span>
        </td>
        <td className="font-bold">
          $ {(parseFloat(transaction.price) * transaction.quantity).toFixed(2)}
          <div className="font-normal text-sm opacity-50">
            {transaction.symbol}
            {transaction.transaction_type === 'share_buy' || transaction.transaction_type === 'share_sell' ? (
              <> Units: ({transaction.quantity})
                <p>Price: {formatToDollar(transaction.price)} </p>
              </>
            ) : null}
          </div>
        </td>
        <td>{formatTimestamp(transaction.created_at)}</td>
      </tr>
    ))
  );

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-8">

      <div>
        <div className="mb-4">
          <h1 className="font-bold text-lg">Recent Trade History</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-pin-rows text-center mb-8">
            <thead>
              <tr>
                <th>User</th>
                <th>Transaction Type</th>
                <th>Transaction Amount</th>
                <th>Transaction Date</th>
              </tr>
            </thead>
            <tbody>
              {renderTransactionRows(buySellTransactions)}
            </tbody>
          </table>
      </div>
      </div>

      <hr className="border-t-2 border-gray-300 mb-6" />

      <div>
        <div className="mb-4">
          <h1 className="font-bold text-lg">Recent Wallet Transactions</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-pin-rows text-center">
            <thead>
              <tr>
                <th>User</th>
                <th>Transaction Type</th>
                <th>Transaction Amount</th>
                <th>Transaction Date</th>
              </tr>
            </thead>
            <tbody>
              {renderTransactionRows(depositWithdrawalTransactions)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
