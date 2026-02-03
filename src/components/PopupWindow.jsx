import Draggable from 'react-draggable';

function PopupWindow({ message, onClose, initialPosition }) {
  return (
    <Draggable
      defaultPosition={initialPosition}
      handle=".popup-header"
    >
      <div className="popup-window" style={{ position: 'fixed' }}>
        <div className="popup-header" style={{ cursor: 'grab' }}>
          <span className="popup-title">♡ reminder:</span>
          <button className="popup-close" onClick={onClose}>×</button>
        </div>
        <div className="popup-body">
          <p>{message}</p>
          <button className="popup-ok" onClick={onClose}>OK</button>
        </div>
      </div>
    </Draggable>
  );
}

export default PopupWindow;
