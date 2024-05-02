export interface StockData {
  symbol: string;
  latest_price: number;
  change: number;
  change_percent: string;
  company_name: string;
  ohlc: OhlcData;
  historical_prices: HistoricalPrice[];
  logo: string;
  chart: ChartData[];
  news: News;
}
  
export interface OhlcData {
  close: {
    price: number;
    time: string;
  };
  open: {
    price: number;
    time: string;
  };
  high: number;
  low: number;
}

export interface HistoricalPrice {
  close_dollar: string;
  close: number;
  high_dollar: string;
  high: number;
  low_dollar: string;
  low: number;
  open_dollar: string;
  open: number;
  change_over_time: number;
  change_over_time_s: string;
  u_open: number;
  u_open_dollar: string;
  u_close: number;
  u_close_dollar: string;
  u_high: number;
  u_high_dollar: string;
  u_low: number;
  u_low_dollar: string;
  u_volume: number;
  change_percent: number;
  change_percent_s: string;
  volume: number;
  date: string;
  label: string;
  change: number;
}

export interface ChartData {
  change_percent: number;
  change_percent_s: string;
  change_over_time: number;
  date: string;
  close: number;
  volume: number;
  change: number;
}

export interface News {
  language: string;
  paywalled: boolean;
  datetime: string;
  headline: string;
  source: string;
  url: string;
  summary: string;
  related: string[];
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