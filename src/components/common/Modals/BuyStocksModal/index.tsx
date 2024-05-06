import React, { useState } from 'react';

import Icon from '@/components/common/icon';

import { useForm, SubmitHandler } from 'react-hook-form';
import { BUY_STOCKS_INPUT } from '@/utils/types/balancetypes';

import { BuyStock, GetToken } from '@/utils/helpers/services';

import FormErrorMessage from '@/components/common/ErrorMessage';
import { closeModal } from '@/utils/helpers/modalcontrols';

export default function BuyStocksModal({
  stock,
  updateStocks,
}: {
  updateStocks: Function;
  stock: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BUY_STOCKS_INPUT>({
    criteriaMode: 'all',
  });

  let stockdata = stock

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<BUY_STOCKS_INPUT> = (data) => {
    reset();
    data.quantity = parseInt(data.quantity);
    data.symbol = stockdata.symbol
    data.transaction_type = 0
    handleStockBuy(data);
    closeModal(`${stockdata.symbol}_modal`);
    setTimeout(() => (setErrorMessage(null), setError(false)), 5000);
  };

  const handleStockBuy = async (data: any) => {
    try {
      const token = GetToken();
      if (token) {
        const response = await BuyStock({
          symbol: stockdata.symbol,
          quantity: data.quantity,
          transaction_type: 0,
        }, token);
        if (response) {
          setErrorMessage('Stocks bought successfully');
          setError(false);
        }
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Buying Stocks', err);
      setErrorMessage('Error Buying Stocks');
      setError(true);
    }
  }

  return (
    <dialog id={`${stockdata.symbol}_modal`} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box h-fit flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg flex flex-row gap-2">
            <Icon iconName="arrow-down-circle-line" />
            Buy {stockdata.symbol}
          </h3>
          <p className="py-4 mb-2">Please enter your desired quantity</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-6"
        >
          <label htmlFor="input-email" className="form-input">
            #
            <input
              id="input-quantity"
              type="number"
              className="grow input-nospinner"
              placeholder={`Quantity of ${stockdata.symbol} to buy`}
              {...register('quantity', {
                required: 'Stock Quantity is Required',
                pattern: {
                  value: /^(?!0)([0-9]+)$/,
                  message: 'Invalid quantity',
                },
                min: {
                  value: 1,
                  message: 'Atleast 1 stock is required',
                },
                max: {
                  value: 500,
                  message: 'Maximum 500 stocks can be bought at a time',
                },
              })}
            />
          </label>
          {errors.quantity ? (
            <div className="alert alert-warning animate-fade animate-once animate-ease-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {FormErrorMessage({ formName: 'quantity', errors })}
            </div>
          ) : null}
          <input
            type="submit"
            value="Buy Stocks"
            className="btn btn-primary text-primary-content"
          />
        </form>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => {closeModal(`${stockdata.symbol}_modal`)}}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
