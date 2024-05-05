export interface DEPOSIT_INPUT {
  amount: BigInt
}

export interface WITHDRAW_INPUT {
  amount: BigInt
}

export interface BUY_STOCKS_INPUT {
  symbol: string
  quantity: any
  transaction_type: number
}

export interface SELL_STOCKS_INPUT {
  symbol: string
  quantity: any
  transaction_type: number
}