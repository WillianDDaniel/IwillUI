import './styles.css';

const VisuallyHidden = ({ children, componentClass, ...props }) => {
  const className = componentClass ? `visually-hidden ${componentClass}` : 'visually-hidden';
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
