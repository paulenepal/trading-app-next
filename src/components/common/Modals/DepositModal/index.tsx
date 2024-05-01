import React, { useState } from 'react';

import Icon from '@/components/common/icon';

import { useForm, SubmitHandler } from 'react-hook-form';
import { DEPOSIT_INPUT } from '@/utils/types/balancetypes';

import FormErrorMessage from '@/components/common/ErrorMessage';

export default function DepositModal({
  onPressSubmit,
  handleDeposit,
}: {
  onPressSubmit: Function;
  handleDeposit: Function;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DEPOSIT_INPUT>({
    criteriaMode: 'all',
  });

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<DEPOSIT_INPUT> = (data) => {
    console.log(data);
    reset();
    handleDeposit(data);
    onPressSubmit();
    setTimeout(() => (setErrorMessage(null), setError(false)), 5000);
  };

  return (
    <dialog id="deposit_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box h-fit flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg flex flex-row gap-2">
            <Icon iconName="arrow-down-circle-line" />
            Deposit Balance
          </h3>
          <p className="py-4">Please enter your desired amount of deposit</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-6"
        >
          <label htmlFor="input-email" className="form-input">
            $
            <input
              id="input-amount"
              type="number"
              className="grow input-nospinner"
              placeholder="Amount"
              {...register('amount', {
                required: 'Deposit amount is Required',
                min: {
                  value: 100,
                  message: 'Minimum deposit is $100',
                },
                max: {
                  value: 1000000,
                  message: 'Deposit limit is $1,000,000',
                },
              })}
            />
          </label>
          {errors.amount ? (
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
              {FormErrorMessage({ formName: 'amount', errors })}
            </div>
          ) : null}
          <input
            type="submit"
            value="Deposit"
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
