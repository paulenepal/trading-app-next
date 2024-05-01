import React, { useEffect, useState } from 'react';
import Icon from '@/components/common/icon';
import { formatToDollar } from '@/utils/helpers/currency-formatter';

export default function BalanceCard({
  onPressDeposit,
  onPressWithdraw,
  balance,
}: {
  onPressDeposit: Function;
  onPressWithdraw: Function;
  balance: number;
}) {

  return (
    <div className="w-full h-44 px-4 bg-gradient-to-tl from-secondary to-white rounded-xl p-4 flex flex-row max-md:flex-col gap-4 justify-between">
      <div className="h-full flex flex-col justify-between items-start flex-1">
        <div className="px-2">
          <p className="text-xs">My Balance</p>
          <h1 className="text-4xl font-bold">{formatToDollar(balance)}</h1>
        </div>
        {
          <div className="flex justify-center items-start gap-4">
            <button
              className="btn btn-sm bg-opacity-55 btn-primary"
              onClick={() => onPressDeposit()}
            >
              <Icon
                iconName="arrow-up-circle-line"
                className="text-primary-content"
              />
              Deposit
            </button>
            <button
              className="btn btn-sm bg-opacity-55 text-primary-content hover:text-error-content btn-error group"
              onClick={() => onPressWithdraw()}
            >
              <Icon
                iconName="arrow-down-circle-line"
                className="text-primary-content group-hover:text-error-content transition-all ease-linear"
              />
              Withdraw
            </button>
          </div>
        }
      </div>
    </div>
  );
}
