import './styles.css';

const Badge = ({ children, componentClass, ...props }) => {
  const className = componentClass ? `badge ${componentClass}` : 'badge';
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};

export default Badge;
