import React from "react";

const SellButton = ({ openModal }: { openModal: () => void }) => {
  const handleOpenModal = () => {
    openModal();
  };

  return (
    <button className="btn btn-md btn-primary shadow-md" onClick={handleOpenModal}>
      Sell
    </button>
  );
};

export default SellButton;
