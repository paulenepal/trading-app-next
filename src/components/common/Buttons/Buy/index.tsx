import React from "react";

const BuyButton = ({ openModal }: { openModal: () => void }) => {
  const handleOpenModal = () => {
    openModal();
  };

  return (
    <button className="btn btn-md btn-primary shadow-md" onClick={handleOpenModal}>
      Buy
    </button>
  );
};

export default BuyButton;
