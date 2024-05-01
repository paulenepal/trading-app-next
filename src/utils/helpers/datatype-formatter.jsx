export const FormatTransactionType = (type) => {
  switch (type) {
    case 'add_balance':
      return 'Deposit';
    case 'deduct_balance':
      return 'Withdraw';
    default:
      return 'Unknown';
  }
}