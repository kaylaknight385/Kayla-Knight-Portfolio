function PopupWindow({ message, onClose, initialPosition }) {
  return (
    <div className="popup-window" style={{ 
      left: `${initialPosition.x}px`, 
      top: `${initialPosition.y}px` 
    }}>
      <div className="popup-header">
        <span className="popup-title">♡ reminder:</span>
        <button className="popup-close" onClick={onClose}>×</button>
      </div>
      <div className="popup-body">
        <p>{message}</p>
        <button className="popup-ok" onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default PopupWindow;
