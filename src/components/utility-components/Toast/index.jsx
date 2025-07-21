import React, { useEffect, useState } from 'react';
import './styles.css';

const Toast = ({ children, componentClass, type = 'info', onClose, duration = 3000, ...props }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) {
          onClose();
        }
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const className = componentClass ? `toast toast-${type} ${componentClass}` : `toast toast-${type}`;

  if (!visible) return null;

  return (
    <div className={className} role="alert" {...props}>
      <div className="toast-content">{children}</div>
      {onClose && (
        <button type="button" className="toast-close-button" onClick={() => {
          setVisible(false);
          onClose();
        }}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Toast;
