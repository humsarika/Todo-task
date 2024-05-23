import React from 'react';

const DeleteConfirmationPopup = ({ onCancel, onConfirm }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>Are you sure you want to delete this todo?</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
