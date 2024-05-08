import React, { useState } from 'react';

import Icon from '@/components/common/icon';
import { useForm, SubmitHandler } from 'react-hook-form';

import { GetToken, CreateUserService, EditUserService } from '@/utils/helpers/services';
import { USER_INPUT } from '@/utils/types/onbtypes';

import { closeModal } from '@/utils/helpers/modalcontrols';

export default function EditUserModal({ user } : { user: any}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<USER_INPUT>({
    criteriaMode: 'all',
  });

  const [userData, setUserData] = useState(user);

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<USER_INPUT> = async (data) => {
    reset();
    try {
      await handleEditUser(userData.id, data);
      setUserData({ ...userData, ...data });
      closeModal(`${userData.id}_modal`);
      setErrorMessage('User Successfully Updated');
      setTimeout(() => setErrorMessage(null), 5000);
    } catch (error) {
      console.error('Error updating user:', error);
      setErrorMessage('Error Updating User');
    }
  };

  const handleEditUser = async (id: number, data: USER_INPUT) => {
    try {
      const token = GetToken();
      if (token) {
        await EditUserService(id, data);
      } else {
        console.error('User not logged in');
      }
    } catch (err) { 
      console.error('Error Updating User:', err);
      throw err;
    }
  }

  return (
    <div>
      {userData && (
      <dialog id={`${userData?.id}_edit_modal`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box h-fit flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg flex flex-row gap-2 mb-6">
              <Icon iconName="quill-pen-line" />
              Edit Account ID: TX00{userData?.id} 
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
                defaultValue={userData?.email}
                readOnly
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
                defaultValue={userData?.first_name}
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
                defaultValue={userData?.middle_name}
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
                defaultValue={userData?.last_name}
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
                defaultValue={userData?.username}
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
                defaultValue={userData?.birthday}
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
              value="Update User Details"
              className="btn btn-accent text-primary-content"
              onClick={() => handleEditUser(userData?.id, userData?.data)}
            />
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => { closeModal(`${userData?.id}_edit_modal`) }}>
                Close
              </button>
            </form>
          </div>

          {/* Success modal */}
          {errorMessage && (
              <div className="modal modal-lg" id="success_modal">
                <div className="modal-box">
                  <div className="modal-action">
                    <p>{errorMessage}</p>
                    <button className="btn" onClick={() => { closeModal("success_modal") }}>Close</button>
                  </div>
                </div>
              </div>
            )}

        </div>
      </dialog>
      )}
    </div>
  );
}
