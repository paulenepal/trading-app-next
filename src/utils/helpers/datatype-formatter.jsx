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

export const FormatTransactionTypeAdmin = (type) => {
  let label;
  let colorClass;

  switch (type) {
    case 'add_balance':
      label = 'DEPOSIT';
      colorClass = 'text-primary';
      break;
    case 'deduct_balance':
      label = 'WITHDRAWAL';
      colorClass = 'text-error';
      break;
    case 'share_buy':
      label = 'BUY';
      colorClass = 'text-primary';
      break;
    case 'share_sell':
      label = 'SELL';
      colorClass = 'text-error';
      break;
    default:
      label = 'Unknown';
      colorClass = 'text-base-100';
      break;
  }

  return { label, colorClass };
}