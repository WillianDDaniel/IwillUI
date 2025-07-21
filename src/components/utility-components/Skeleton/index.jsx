import React from 'react';
import './styles.css';

const Skeleton = ({ componentClass, ...props }) => {
  const className = componentClass ? `skeleton ${componentClass}` : 'skeleton';
  return (
    <div className={className} {...props}>
      <div className="skeleton-line"></div>
      <div className="skeleton-line short"></div>
      <div className="skeleton-line medium"></div>
    </div>
  );
};

export default Skeleton;
