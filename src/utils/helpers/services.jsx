import axios from "axios";

export const API_URL = 'http://localhost:3001'

export const GetUserInfo = () => {
  return JSON.parse(sessionStorage.getItem('user'));
};

export const updateUserInfo = (id) => {
  const token = GetToken();
  axios.get(`${API_URL}/user/${id}`, 
  {
    headers: {
      'authorization': `${token}`,
      'Accept': 'application/json'
    },
  }).then((response) => {
    sessionStorage.setItem('user', JSON.stringify(response.data.data));
    return response.data.data;
  }).catch((error) => {
    console.error(error);
  });
}

export const GetRole = () => {
  return sessionStorage.getItem('role');
}
  
export const GetToken = () => {
  return sessionStorage.getItem('token');
};

export const isConfirmed = () => {
  const role = GetRole();
  switch (role) {
    case 'pending_trader':
      return false;
    case 'trader':
      return true;
    default:
      return false;
  }
}

export const GetIEXStocks = async () => {
  try {
    const token = GetToken();
    const response = axios.get(`${API_URL}/watchlist`, 
  {
    headers: {
      'authorization': `${token}`,
      'Accept': 'application/json'
    },
  });
    return response;
  } catch (error) {
    return error.error_message;
  }
}

export const GetTopStocks = async () => {
  try {
    const token = GetToken();
    const response = axios.get(`${API_URL}/watchlist/top`, 
  {
    headers: {
      'authorization': `${token}`,
      'Accept': 'application/json'
    },
  });
    return response;
  } catch (error) {
    return error.error_message;
  }
}

export const GetIEXStock = (symbol) => {
  try {
    const token = GetToken();
    const response = axios.get(`${API_URL}/watchlist/${symbol}`, 
  {
    headers: {
      'authorization': `${token}`,
      'Accept': 'application/json'
    },
  });
    return response.data;
  } catch (error) {
    return error.error_message;
  }
}

export const GetGeneralNews = async () => {
  try {
    const token = GetToken();
    const response = axios.get(`${API_URL}/watchlist/news`, 
  {
    headers: {
      'authorization': `${token}`,
      'Accept': 'application/json'
    },
  });
    return response;
  } catch (error) {
    return error.error_message;
  }
}

export const HandleSignOut = async () => {
  try {
    const token = GetToken();
    const response = axios.post(`${API_URL}/signout`, 
  {
    headers: {
      'authorization': `${token}`,
      'Accept': 'application/json'
    },
  });
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    location.replace('/');
  } catch (error) {
    return error.error_message;
  }
}


// User Balances

export const GetUserBalances = async () => {
  try {
    const token = GetToken();
    const response = axios.get(`${API_URL}/user_balances`, 
  {
    headers: {
      'authorization': `${token}`,
      'Accept': 'application/json'
    },
  });
    return response;
  } catch (error) {
    return error.error_message;
  }
}

export const DepositFunds = async (amount, userToken) => {
  try {
    const token = userToken;
    const response = await axios.post(
      `${API_URL}/user_balances/add_balance?amount=${amount}`,
      {},
      {
        headers: {
          'authorization': token,
          'Accept': 'application/json'
        }
      }
    );
    return response;
  } catch (error) {
    return error.response.data.error_message;
  }
};

export const WithdrawFunds = async (amount, userToken) => {
  try {
    const token = userToken;
    const response = await axios.post(
      `${API_URL}/user_balances/withdraw_balance?amount=${amount}`,
      {},
      {
        headers: {
          'authorization': token,
          'Accept': 'application/json'
        }
      }
    );
    return response;
  } catch (error) {
    return error.response.data.error_message;
  }
};

// types 2: Deposit, 3: Withdraw
export const GetBalanceTransactions = async (type) => {
  try {
    const token = GetToken();
    const response = axios.get(`${API_URL}/user_balances/transactions?type=${type}`, 
  {
    headers: {
      'authorization': `${token}`,
      'Accept': 'application/json'
    },
  });
    return response;
  } catch (error) {
    return error.error_message;
  }
}

export const GetStockTransactions = async () => {
  try {
    const token = GetToken();
    const response = axios.get(`${API_URL}/transactions`, 
  {
    headers: {
      'authorization': `${token}`,
      'Accept': 'application/json'
    },
  });
    return response;
  } catch (error) {
    return error.error_message;
  }
}