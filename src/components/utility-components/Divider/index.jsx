import './styles.css';

const Divider = ({ orientation = 'horizontal', componentClass, ...props }) => {
  const className = componentClass ? `divider divider-${orientation} ${componentClass}` : `divider divider-${orientation}`;
  return (
    <div className={className} role="separator" {...props} />
  );
};


export default Divider;
