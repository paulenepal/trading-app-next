export const FormatTransactionType = (type) => {
  switch (type) {
    case 'add_balance':
      return 'Deposit';
    case 'deduct_balance':
      return 'Withdraw';
    case 'share_buy':
      return 'Bought Shares';
    case 'share_sell':
      return 'Sold Shares';
    default:
      return 'Unknown';
  }
}
