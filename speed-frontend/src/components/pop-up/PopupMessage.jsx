import React from 'react';
import './PopupMessage.scss'; // Import your CSS file

function PopupMessage({ message, show, onClose }) {
  return show ? (
    <div className="popup-container">
      <div className="popup">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null;
}

export default PopupMessage;