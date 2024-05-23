import React from 'react';

const AddTodoNotificationPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>Empty todo cannot be added.</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default AddTodoNotificationPopup;
