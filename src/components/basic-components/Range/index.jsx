import './styles.css';

const Range = ({ componentClass, ...props }) => {
  const className = componentClass ? `range ${componentClass}` : 'range';
  return (
    <input type="range" className={className} {...props} />
  );
};

export default Range;
