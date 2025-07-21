import React from 'react';
import './styles.css';

const Tag = ({ children, componentClass, onClose, ...props }) => {
  const className = componentClass ? `tag ${componentClass}` : 'tag';
  return (
    <span className={className} {...props}>
      {children}
      {onClose && (
        <button type="button" className="tag-close-button" onClick={onClose}>
          &times;
        </button>
      )}
    </span>
  );
};

export default Tag;
