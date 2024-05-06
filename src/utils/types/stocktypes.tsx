export interface StockData {
  symbol: string;
  latest_price: number;
  change: number;
  change_percent: string;
  company_name: string;
  logo: string;
  news?: News;
  description: string;
  website: string;
  ceo: string;
  exchange: string;
  employees: number;
  historical_prices?: HistoricalPrice[];
}

interface HistoricalPrice {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
}
  
interface News {
  datetime: string;
  headline: string;
  source: string;
  url: string;
  summary: string;
  image: string;
}

export interface UserAssets {
  id: number;
  symbol: string;
  quantity: number;
  latest_price: number;
  profit_loss: string;
  value: string;
  ave_buy: string;
}

export interface UserAssetDetails extends UserAssets {
}

export interface SearchUserAssets extends UserAssets {
}

export const AssetColumn = [
  { key: 'symbol', label: 'Stock Symbol' },
  { key: 'latest_price', label: 'Current Price' },
  { key: 'quantity', label: 'Asset Quantity' },
  { key: 'value', label: 'Value' },
  { key: 'ave_buy', label: 'Ave Buy' }
] as const;

export const StockColumn = [
  { key:'symbol', label: 'Stocks' },
  { key: 'change', label: 'Change' },
  { key: 'chart',label: '1D' },
  { key: 'latest_price', label: 'Current Price' },
  { label: 'Trade' }
]

export interface TableProps {
  columns: { key: string; label: string } [];
  rows: any[];
  onClick: (row: StockData) => void;
  button?: JSX.Element;
}

export interface TransactionData {
  symbol: string; 
  price: number;
  quantity: number;
  transaction_type: number;
}

export interface TradeButtonProps {
  transactionData: TransactionData;
}

export interface BUY_INPUT {
  quantity: number;
}