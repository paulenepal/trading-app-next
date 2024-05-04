import React from "react";

const TradeButton = ({ openModal }: { openModal: () => void }) => {
  const handleOpenModal = () => {
    openModal();
  };

  return (
    <button className="btn btn-lg btn-primary shadow-md" onClick={handleOpenModal}>
      Trade
    </button>
  );
};

export default TradeButton;