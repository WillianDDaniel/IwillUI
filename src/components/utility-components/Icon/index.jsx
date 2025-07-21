import React from 'react';
import './styles.css';

const Icon = ({ src, alt, componentClass, ...props }) => {
  const className = componentClass ? `icon ${componentClass}` : 'icon';
  return (
    <img src={src} alt={alt} className={className} {...props} />
  );
};

export default Icon;
