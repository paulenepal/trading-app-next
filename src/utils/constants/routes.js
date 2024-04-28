// access it as MAIN_ROUTES.HOME

import Onboarding from "@/app/onboarding/page";

export const MAIN_ROUTES = {
  HOME: '/',
  ONBOARDING: '/onboarding',
};

export const USER_ROUTES = {
  DASHBOARD: '/dashboard',
  PORTFOLIO: '/portfolio',
  TRANSACTIONS: '/transactions',
  WALLET: '/wallet',
  MARKET: '/market',
};

export const USER_NAV_ROUTES = [
  {
    text: 'Dashboard',
    iconName: 'home-fill',
    routeTo: USER_ROUTES.DASHBOARD
  },
  {
    text: 'Portfolio',
    iconName: 'folder-fill',
    routeTo: USER_ROUTES.PORTFOLIO
  },
  {
    text: 'Transactions',
    iconName: 'bank-card-fill',
    routeTo: USER_ROUTES.TRANSACTIONS
  },
  {
    text: 'Wallet',
    iconName: 'wallet-fill',
    routeTo: USER_ROUTES.WALLET
  },
  {
    text: 'Market',
    iconName: 'funds-box-fill',
    routeTo: USER_ROUTES.MARKET
  }
]