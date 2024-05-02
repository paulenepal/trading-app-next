import React, { useEffect, useState } from 'react';

import { GetToken, GetBalanceTransactions } from '@/utils/helpers/services';
import { formatToDollar } from '@/utils/helpers/currency-formatter';
import { formatTimePosted } from '@/utils/helpers/date-formatter';
import { FormatTransactionType } from '@/utils/helpers/datatype-formatter';
import Icon from '@/components/common/icon';

export default function TransactionList({
  fetchTransactions,
  transactions,
  activeTab,
  handleTabChange,
}: {
  fetchTransactions: Function;
  transactions: any;
  activeTab: string;
  handleTabChange: Function;
}) {
  return (
    <>
      <div
        role="tablist"
        className="h-fit w-fit tabs tabs-bordered bg-transparent gap-2 rounded-lg"
      >
        <a
          role="tab"
          onClick={() => {
            handleTabChange({ tab: 'ALL', type: '0' });
          }}
          className={`tab hover:bg-secondary transition-all ease-in-out gap-2 ${
            activeTab === 'ALL' ? 'tab-active' : null
          }`}
        >
          All {activeTab === 'ALL' && <span>{transactions?.length}</span>}
        </a>
        <a
          role="tab"
          onClick={() => {
            handleTabChange({ tab: 'DEPOSIT', type: '2' });
          }}
          className={`tab hover:bg-secondary transition-all ease-in-out gap-2 ${
            activeTab === 'DEPOSIT' ? 'tab-active' : null
          }`}
        >
          Deposits{' '}
          {activeTab === 'DEPOSIT' && <span>{transactions?.length}</span>}
        </a>
        <a
          role="tab"
          onClick={() => {
            handleTabChange({ tab: 'WITHDRAW', type: '3' });
          }}
          className={`tab hover:bg-secondary transition-all ease-in-out gap-2 ${
            activeTab === 'WITHDRAW' ? 'tab-active' : null
          }`}
        >
          Withdrawals{' '}
          {activeTab === 'WITHDRAW' && <span>{transactions?.length}</span>}
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-md table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Amount</td>
              {activeTab === 'ALL' && <td>Transaction Type</td>}
              <td>Transaction Date</td>
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((transaction: any, index: number) => {
                return (
                  <tr key={transaction.id}>
                    <th>{index + 1}</th>
                    <td>{formatToDollar(transaction.attributes.price)}</td>
                    {activeTab === 'ALL' && (
                      <td>
                        {FormatTransactionType(
                          transaction.attributes.transaction_type
                        )}
                      </td>
                    )}
                    <td>
                      {formatTimePosted(transaction.attributes.created_at)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {(transactions && transactions?.length === 0) && (
          <h1 className="text-center w-full flex flex-row gap-2 justify-center">
            <Icon
              iconName="information-line"
              className="text-primary-content"
            />
            No transactions found
          </h1>
        )}
      </div>
    </>
  );
}
