import React, { useState } from 'react';

import Icon from '@/components/common/icon';

import { useForm, SubmitHandler } from 'react-hook-form';
import { BUY_INPUT } from '@/utils/types/stocktypes';

import FormErrorMessage from '@/components/common/ErrorMessage';

export default function BuyModal({
  onPressSubmit,
  handleBuy,
  symbol,
  price,
}: {
  onPressSubmit: Function;
  handleBuy: Function;
  symbol: string;
  price: number;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BUY_INPUT>({
    criteriaMode: 'all',
  });

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<BUY_INPUT> = (transactionData) => {
    reset();
    handleBuy(transactionData);
    onPressSubmit();
    setTimeout(() => (setErrorMessage(null), setError(false)), 5000);
  };

  return (
    <dialog id="buy_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box h-fit flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg flex flex-row gap-2">
            <Icon iconName="money-dollar-circle-line" />
            Buy {symbol}
          </h3>
          <p className="py-4">Please enter the quantity to buy</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-6"
        >
          <div className="flex gap-4">
            <label htmlFor="symbol" className="form-input">
              Symbol:
              <input
                id="symbol"
                type="text"
                className="input-nospinner"
                value={symbol}
                disabled
              />
            </label>
            <label htmlFor="price" className="form-input">
              Price:
              <input
                id="price"
                type="text"
                className="input-nospinner"
                value={price}
                disabled
              />
            </label>
          </div>
          <label htmlFor="quantity" className="form-input">
            Quantity:
            <input
              id="quantity"
              type="number"
              className="grow input-nospinner"
              placeholder="Quantity"
              {...register('quantity', {
                required: 'Quantity is Required',
                min: {
                  value: 1,
                  message: 'Minimum quantity is 1',
                },
                max: {
                  value: 1000,
                  message: 'Maximum quantity is 1000',
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
              value="Buy"
              className="btn btn-primary text-primary-content"
            />
        </form>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => reset()}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
