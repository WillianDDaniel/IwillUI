import './styles.css';

const Switch = ({ componentClass, ...props }) => {
  const className = componentClass ? `switch ${componentClass}` : 'switch';
  return (
    <label className={className}>
      <input type="checkbox" className="switch-input" {...props} />
      <span className="switch-slider"></span>
    </label>
  );
};

export default Switch;
