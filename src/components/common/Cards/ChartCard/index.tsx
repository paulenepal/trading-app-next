import React from 'react';

const ChartCard = ({ chart }) => {
  return (
    <div className="w-96 h-96 bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
      {chart}
    </div>
  );
};

export default ChartCard;
