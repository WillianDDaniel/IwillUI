import './styles.css';

const Spinner = ({ componentClass, ...props }) => {
  const className = componentClass ? `spinner ${componentClass}` : 'spinner';
  return (
    <div className={className} {...props}>
      <div className="spinner-inner"></div>
    </div>
  );
};


export default Spinner;
