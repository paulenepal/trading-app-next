export const openModal = (modalName) => {
  const modal = document.getElementById(modalName);
  if (modal && typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    console.error('Modal not found');
  }
};

export const closeModal = (modalName) => {
  const modal = document.getElementById(modalName);
  if (modal && typeof modal.close === 'function') {
    modal.close();
  } else {
    console.error('Modal not found');
  }
};