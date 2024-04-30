import axios from 'axios'

export const API_URL = 'http://localhost:3001'
// export const API_URL = 'https://api.example.com'

export const SIGN_UP_REQUEST_HEADERS = {
  'Content-Type': 'application/json',
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive'
}

export const GetUserInfo = () => {
  return JSON.parse(sessionStorage.getItem('user'));
}

export const GetToken = () => {
  return JSON.parse(sessionStorage.getItem('token'));
}

export const isConfirmed = () => {
  const user = GetUserInfo();
  return user.role === 'trader' ? true : false;
}