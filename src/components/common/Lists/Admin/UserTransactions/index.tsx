import React, { useState, useEffect } from "react";
import { formatToDollar } from "@/utils/helpers/currency-formatter";
import { formatTimestamp } from "@/utils/helpers/date-formatter";
import { firstLetter } from "@/utils/helpers/name-formatter";
import { FormatTransactionTypeAdmin } from "@/utils/helpers/datatype-formatter";
import { GetToken, GetUserDetails } from "@/utils/helpers/services";

export default function UserTransactions ( { transactions, loading } : { transactions: any, loading: boolean }) {
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
    }
    if (transactions && transactions.data) {
      transactions.data.forEach((transaction: any) => {
        fetchUserDetails(transaction.user_id);
      });
    }
  }, [transactions]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-pin-rows text-center">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Transaction ID</th>
              <th>User ID</th>
              <th>Transaction Type</th>
              <th>Transaction Amount</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>
          {transactions.data && transactions.data.length > 0 ? (
            transactions.data.map((transaction: any, index: number) => (
              <tr key={transaction.id}>
                <th className="text-center">RC00{transaction.id}</th>
                <td className="text-center">
                  <div className="flex justify-center items-center gap-4">
                    <div className="avatar online placeholder">
                      <div className="bg-secondary text-neutral-content rounded-full w-16">
                        <span className="text-xl">{firstLetter(userDetails[transaction.user_id]?.first_name)}{firstLetter(userDetails[transaction.user_id]?.last_name)}</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-left">{userDetails[transaction.user_id]?.first_name || `TX00${transaction.user_id}`} {userDetails[transaction.user_id]?.last_name || `TX00${transaction.user_id}`}</div>
                      <div className="text-sm opacity-50 text-left">@{userDetails[transaction.user_id]?.username || `TX00${transaction.user_id}`}</div>
                      <div className="text-sm opacity-50 text-left">UID: TX00{transaction.user_id}</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  <span className="badge badge-ghost badge-xl" >
                  {(() => {
                    let label;
                    let colorClass;

                    switch (transaction.transaction_type) {
                      case 'add_balance':
                        label = 'DEPOSIT';
                        colorClass = 'text-primary';
                        break;
                      case 'deduct_balance':
                        label = 'WITHDRAWAL';
                        colorClass = 'text-error';
                        break;
                      case 'share_buy':
                        label = 'BUY';
                        colorClass = 'text-primary';
                        break;
                      case 'share_sell':
                        label = 'SELL';
                        colorClass = 'text-error';
                        break;
                      default:
                        label = 'Unknown';
                        break;
                    }
                    return <span className={colorClass}>{label}</span>; 
                  })()}
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
                <td>
                  {formatTimestamp(transaction.created_at)}
                </td>
              </tr>
            ))
          ) : transactions == undefined && !loading? (
            <tr>
                <td colSpan={7} className="text-center">
                  No Transactions Found.
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  {loading ? 'Loading Transactions...' : 'No transactions found'}
                </td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
    </>
  )
}