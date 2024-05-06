import React from "react";
import { formatToDollar } from "@/utils/helpers/currency-formatter";

export default function UserTransactions ( { transactions, loading } : { transactions: any, loading: boolean }) {

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
              <th>Amount</th>
              <th></th>
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
                        <span className="text-xl">UID</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">TX00{transaction.user_id}</div>
                      {/* <div className="text-sm opacity-50">@{transaction.username}</div> */}
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
                  USD {formatToDollar(transaction.price)}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs"> Details </button>
                </th>
              </tr>
            ))
          ) : transactions == undefined && !loading? (
            <tr>
                <td colSpan={7} className="text-center">
                  No Transactions F
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