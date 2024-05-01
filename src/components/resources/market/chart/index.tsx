import React from "react";
import { Line } from 'react-chartjs-2';

type LineChartConfig = {
  chartData: {
    date: string;
    close: number;
  }[];
};
