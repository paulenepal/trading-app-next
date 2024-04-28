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
    iconName: 'arrow-left-right-line',
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

export const ADMIN_ROUTES = {
  DASHBOARD: '/admin',
  ACCOUNTS: '/admin/accounts',
  APPROVALS: '/admin/pending',
  USER_TRANSACTIONS: '/admin/user_transactions',
  MARKET: '/market',
}

export const ADMIN_NAV_ROUTES = [
  {
    text: 'Dashboard',
    iconName: 'home-fill',
    routeTo: ADMIN_ROUTES.DASHBOARD
  },
  {
    text: 'Accounts',
    iconName: 'file-list-fill',
    routeTo: ADMIN_ROUTES.ACCOUNTS
  },
  {
    text: 'Approvals',
    iconName: 'checkbox-circle-fill',
    routeTo: ADMIN_ROUTES.APPROVALS
  },
  {
    text: 'Transactions',
    iconName: 'arrow-left-right-line',
    routeTo: ADMIN_ROUTES.USER_TRANSACTIONS
  },
  {
    text: 'Market',
    iconName: 'funds-box-fill',
    routeTo: ADMIN_ROUTES.MARKET
  }
]