import React, { useState } from 'react';

import Icon from '@/components/common/icon';
import { useForm, SubmitHandler } from 'react-hook-form';

import { GetToken, CreateUserService } from '@/utils/helpers/services';
import { USER_INPUT } from '@/utils/types/onbtypes';

import FormErrorMessage from '@/components/common/ErrorMessage';
import { closeModal } from '@/utils/helpers/modalcontrols';

const CREATE_USER_MODAL = 'createUserModal';

export default function CreateUserModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<USER_INPUT>({
    criteriaMode: 'all',
  });

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<USER_INPUT> = (data) => {
    reset();
    data.email = data.email
    data.first_name = data.first_name
    data.middle_name = data.middle_name
    data.last_name = data.last_name
    data.username = data.username
    data.birthday = data.birthday
    handleCreateUser(data);
    closeModal(CREATE_USER_MODAL);
    setTimeout(() => (setErrorMessage(null), setError(false)), 5000);
  };

  const handleCreateUser = async (data: USER_INPUT) => {
    try {
      const token = GetToken();
      if (token) {
        const response = await CreateUserService({
          email: data.email,
          first_name: data.first_name,
          middle_name: data.middle_name,
          last_name: data.last_name,
          username: data.username,
          birthday: data.birthday
        });
        if (response) {
          setErrorMessage('User Successfully Created');
          setError(false);
        }
      } else {
        console.error('User not logged in');
      }
    } catch (err) {
      console.error('Error Creating User', err);
      setErrorMessage('Error Creating User');
      setError(true);
    }
  }

  return (
    <dialog id={CREATE_USER_MODAL} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box h-fit flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg flex flex-row gap-2 mb-6">
            <Icon iconName="user-add-line" />
            Create a New Trader Account
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-6">
          <label htmlFor="input-email" className="form-input">
            Email:
            <input
              id="input-email"
              type="email"
              className="grow input-nospinner"
              placeholder="Enter email"
              {...register('email', {
                required: 'Email address is required.',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
            />
          </label>
          {errors.email && (
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
              {errors.email.message}
            </div>
          )}
          <label htmlFor="input-first-name" className="form-input">
            First Name:
            <input
              id="input-first-name"
              type="text"
              className="grow input-nospinner"
              placeholder="Enter first name"
              {...register('first_name', {
                required: 'First name is required.',
              })}
            />
          </label>
          {errors.first_name && (
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
              {errors.first_name.message}
            </div>
          )}
          <label htmlFor="input-middle-name" className="form-input">
            Middle Name:
            <input
              id="input-middle-name"
              type="text"
              className="grow input-nospinner"
              placeholder="Enter middle name (optional)"
              {...register('middle_name')}
            />
          </label>
          <label htmlFor="input-last-name" className="form-input">
            Last Name:
            <input
              id="input-last-name"
              type="text"
              className="grow input-nospinner"
              placeholder="Enter last name"
              {...register('last_name', {
                required: 'Last name is required.',
              })}
            />
          </label>
          {errors.last_name && (
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
              {errors.last_name.message}
            </div>
          )}
          <label htmlFor="input-username" className="form-input">
            Username:
            <input
              id="input-username"
              type="text"
              className="grow input-nospinner"
              placeholder="Enter username"
              {...register('username', {
                required: 'Username is required.',
              })}
            />
          </label>
          {errors.username && (
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
              {errors.username.message}
            </div>
          )}
          <label htmlFor="input-birthday" className="form-input">
            Birthday:
            <input
              id="input-birthday"
              type="date"
              className="grow input-nospinner"
              {...register('birthday', {
                required: 'Birthday is required.',
              })}
            />
          </label>
          {error.birthday && (
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
              {error.birthday.message}
            </div>
          )}
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary text-primary-content"
          />
        </form>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => { closeModal(CREATE_USER_MODAL) }}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
