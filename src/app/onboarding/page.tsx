'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { API_URL, SIGN_UP_REQUEST_HEADERS } from '@/utils/constants/services';
import { useForm, SubmitHandler } from 'react-hook-form';

import Icon from '@/components/common/icon';

import {
  ONBOARDING_TYPE,
  ONBOARDING_REGEX,
  ONBOARDING_COPY,
  ONBOARDING_PROPS,
  SIGN_IN_INPUT,
  SIGN_UP_INPUT,
} from '@/utils/types/onbtypes';

import OnboardingLayoutProvider from '@/components/providers/OnboardingLayoutProvider';
import AlertBox from '@/components/common/AlertBox';
import FormErrorMessage from '@/components/common/ErrorMessage';

export default function Onboarding() {
  const [type, setType] = useState<ONBOARDING_TYPE>('SIGN_IN');
  const [onboardingMsg, setOnboardingMsg] = useState<string>(
    ONBOARDING_COPY[type].SUBTITLE
  );
  const [onboardingTitle, setOnboardingTitle] = useState<string>(
    ONBOARDING_COPY[type].TITLE
  );
  const [onboardingButton, setOnboardingButton] = useState<string>(
    ONBOARDING_COPY[type].LINK
  );

  const handleTypeClick = () => {
    type === 'SIGN_IN' ? handleSignUpClick() : handleSignInClick();
  };

  const handleSignUpClick = () => {
    setType('SIGN_UP');
    setOnboardingTitle(ONBOARDING_COPY.SIGN_UP.TITLE);
    setOnboardingMsg(ONBOARDING_COPY.SIGN_UP.SUBTITLE);
    setOnboardingButton(ONBOARDING_COPY.SIGN_UP.LINK);
  };

  const handleSignInClick = () => {
    setType('SIGN_IN');
    setOnboardingTitle(ONBOARDING_COPY.SIGN_IN.TITLE);
    setOnboardingMsg(ONBOARDING_COPY.SIGN_IN.SUBTITLE);
    setOnboardingButton(ONBOARDING_COPY.SIGN_IN.LINK);
  };

  return (
    <>
      <div className="w-full h-full fixed bg-gradient-to-bl from-primary via-transparent to-primary blur-2xl scale-125 -z-40" />
      <OnboardingLayoutProvider>
        <div className="flex flex-col text-center text-xl w-full">
          <h1
            className="text-xl font-semibold animate-fade-up animate-once animate-ease-out"
            key={onboardingTitle}
          >
            {onboardingTitle}
          </h1>
          <span className="opacity-55">
            <h1
              className="text-base animate-fade animate-once animate-ease-in text-pretty"
              key={onboardingMsg}
            >
              {onboardingMsg}
            </h1>
          </span>
        </div>

        {type === 'SIGN_IN' ? (
          <SignInForm type={type} />
        ) : (
          <SignUpForm type={type} />
        )}

        <div className="flex flex-col justify-center gap-6 mt-6 animate-once animate-ease-out">
          <button
            key={onboardingButton}
            onClick={handleTypeClick}
            className="text-sm text-transition opacity-55"
          >
            {onboardingButton}
          </button>
        </div>
      </OnboardingLayoutProvider>
    </>
  );
}

const renderAlertBox = (error: boolean, errorMessage: string | null) => {
  if (error) {
    return <AlertBox type="warning">{errorMessage}</AlertBox>;
  }
};

const SignInForm = ({ type }: ONBOARDING_PROPS) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SIGN_IN_INPUT>({ criteriaMode: 'all' });

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const router = useRouter();

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
    console.log(error);
    console.log(errorMessage);
  };

  const onSubmit: SubmitHandler<SIGN_IN_INPUT> = (data) => {
    console.log(data);
    handleSignin(data);
    setTimeout(() => (setErrorMessage(null), setError(false)), 5000);
  };

  async function handleSignin(user: SIGN_IN_INPUT) {
    try {
      const response = await axios.post(`${API_URL}/signin`, {
        user: {
          email: user.email,
          password: user.password,
        },
        header: SIGN_UP_REQUEST_HEADERS,
      });
      const userData = response.data.status.data.user;
      const userHeader = response.headers['authorization'];
      sessionStorage.setItem('user', JSON.stringify(userData));
      sessionStorage.setItem('token', userHeader);
      setError(false);
      setErrorMessage(null);
      console.log(userData.role, userData)
      userData.role === 'pending_trader' || userData.role === 'trader' ? router.push('/dashboard') : router.push('/admin');
    } catch (error) {
      setError(true);
      setErrorMessage((error as Object)?.response?.data?.error);
    }
  }

  return (
    <form
      key={type}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-md:w-full max-2xl:w-2/3 w-1/4 justify-center gap-6 mt-6 animate-fade animate-delay-100 animate-once animate-ease-in"
    >
      <label htmlFor="input-email" className="form-input">
        <Icon iconName="mail-fill text-primary" />
        <input
          id="input-email"
          type="text"
          className="grow"
          placeholder="Email"
          {...register('email', {
            required: 'Email is Required',
            pattern: {
              value: ONBOARDING_REGEX.EMAIL,
              message: 'Invalid Email',
            },
          })}
        />
      </label>

      <label className="form-input">
        <Icon iconName="key-fill text-primary" />
        <input
          id="input-password"
          type={!viewPassword ? 'password' : 'text'}
          className="grow"
          placeholder="Password"
          {...register('password', {
            required: 'Password is Required',
            pattern: {
              value: ONBOARDING_REGEX.PASSWORD,
              message: 'Invalid Password',
            },
          })}
        />
        <label className="swap">
          <input type="checkbox" onClick={handleViewPassword} />
          <Icon iconName="eye-fill text-primary swap-on" />
          <Icon iconName="eye-off-fill text-primary-content swap-off" />
        </label>
      </label>

      {/* Error Messages */}
      {renderAlertBox(error, errorMessage)}
      {errors.email || errors.password ? (
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
          <div className="flex flex-col gap-0">
            {FormErrorMessage({ formName: 'email', errors })}
            {FormErrorMessage({ formName: 'password', errors })}
          </div>
        </div>
      ) : null}

      <input
        type="submit"
        value={ONBOARDING_COPY.SIGN_IN.BUTTON}
        className="btn btn-primary text-primary-content"
      />
    </form>
  );
};

const SignUpForm = ({ type }: ONBOARDING_PROPS) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SIGN_UP_INPUT>({ criteriaMode: 'all' });

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewConfirmPassword, setViewConfirmPassword] =
    useState<boolean>(false);

  const handleViewPassword = () => setViewPassword(!viewPassword);
  const handleViewConfirmPassword = () =>
    setViewConfirmPassword(!viewConfirmPassword);

  const onSubmit: SubmitHandler<SIGN_UP_INPUT> = (data) => {
    handleSignUp(data);
    setTimeout(() => (setErrorMessage(null), setError(false)), 5000);
  };

  async function handleSignUp(user: SIGN_UP_INPUT) {
    try {
      await axios.post(`${API_URL}/signup`, {
        user: {
          email: user.email,
          password: user.password,
          first_name: user.firstName,
          last_name: user.lastName,
          username: user.username,
          birthday: user.birthDate,
          role: 0,
        },
      });
      setError(false);
      setErrorMessage(null);
      location.reload();
    } catch (error) {
      setError(true);
      setErrorMessage('Invalid Email or Password');
    }
  }

  return (
    <form
      key={type}
      className="flex flex-col max-md:w-full max-xl:w-2/3 w-2/4 justify-center gap-6 mt-6 animate-fade animate-delay-100 animate-once animate-ease-in"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="input-email" className="form-input">
        <Icon iconName="mail-fill text-primary" />
        <input
          id="input-email"
          type="text"
          className="grow"
          placeholder="Email"
          {...register('email', {
            required: 'Email is Required',
            pattern: {
              value: ONBOARDING_REGEX.EMAIL,
              message: 'Invalid Email',
            },
          })}
        />
      </label>

      <label htmlFor="input-username" className="form-input">
        <Icon iconName="user-fill text-primary" />
        <input
          id="input-username"
          type="text"
          className="grow"
          placeholder="Username"
          {...register('username', {
            required: 'Username is Required',
            pattern: {
              value: ONBOARDING_REGEX.USERNAME,
              message: 'Invalid Username',
            },
          })}
        />
      </label>

      <div className="flex max-xl:flex-col flex-row gap-5">
        <label htmlFor="input-first" className="form-input flex-grow">
          <Icon iconName="user-fill text-primary" />
          <input
            id="input-first"
            type="text"
            className="grow"
            placeholder="First Name"
            {...register('firstName', {
              required: 'First name is Required',
              pattern: {
                value: ONBOARDING_REGEX.FIRSTNAME,
                message: 'Invalid Input on First Name',
              },
            })}
          />
        </label>

        <label htmlFor="input-last" className="form-input flex-grow">
          <Icon iconName="user-fill text-primary" />
          <input
            id="input-last"
            type="text"
            className="grow"
            placeholder="Last Name"
            {...register('lastName', {
              required: 'Last name is Required',
              pattern: {
                value: ONBOARDING_REGEX.LASTNAME,
                message: 'Invalid Input on Last Name',
              },
            })}
          />
        </label>
      </div>

      <label htmlFor="input-birthdate" className="form-input">
        <Icon iconName="mail-fill text-primary" />
        <input
          id="input-birthdate"
          type="date"
          min="1899-01-01"
          max="2003-12-12"
          className="grow"
          placeholder="Birthday"
          {...register('birthDate', {
            required: 'Birthdate is Required',
          })}
        />
      </label>

      <label className="form-input">
        <Icon iconName="key-fill text-primary" />
        <input
          type={!viewPassword ? 'password' : 'text'}
          className="grow"
          placeholder="Password"
          {...register('password', {
            required: 'Password is Required',
            pattern: {
              value: ONBOARDING_REGEX.PASSWORD,
              message: 'Invalid Password',
            },
          })}
        />
        <label className="swap">
          <input type="checkbox" onClick={handleViewPassword} />
          <Icon iconName="eye-fill text-primary swap-on" />
          <Icon iconName="eye-off-fill text-primary-content swap-off" />
        </label>
      </label>

      <label className="form-input">
        <Icon iconName="key-fill text-primary" />
        <input
          id="input-confirmpassword"
          type={!viewConfirmPassword ? 'password' : 'text'}
          className="grow"
          placeholder="Confirm Password"
          {...register('confirmpassword', {
            required: 'Confirm Password is Required',
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'Your passwords do no match';
              }
            },
          })}
        />
        <label className="swap">
          <input type="checkbox" onClick={handleViewConfirmPassword} />
          <Icon iconName="eye-fill text-primary swap-on" />
          <Icon iconName="eye-off-fill text-primary-content swap-off" />
        </label>
      </label>

      {/* Error Messages */}
      {renderAlertBox(error, errorMessage)}
      {errors.email ||
      errors.password ||
      errors.firstName ||
      errors.lastName ||
      errors.confirmpassword ||
      errors.birthDate ||
      errors.username ? (
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
          <div className="flex flex-col gap-0">
            {FormErrorMessage({ formName: 'email', errors })}
            {FormErrorMessage({ formName: 'password', errors })}
            {FormErrorMessage({ formName: 'username', errors })}
            {FormErrorMessage({ formName: 'firstName', errors })}
            {FormErrorMessage({ formName: 'lastName', errors })}
            {FormErrorMessage({ formName: 'confirmpassword', errors })}
            {FormErrorMessage({ formName: 'birthDate', errors })}
          </div>
        </div>
      ) : null}

      <input
        type="submit"
        value={ONBOARDING_COPY.SIGN_UP.BUTTON}
        className="btn btn-primary text-primary-content"
      />
    </form>
  );
};
