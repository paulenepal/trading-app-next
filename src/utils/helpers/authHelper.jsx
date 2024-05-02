import { isAdmin } from '../helpers/services';

export const authCheck = isAdmin() ? 'admin' : 'user';

export const isSignedIn = () => {
  return sessionStorage.getItem('token') !== null;
}