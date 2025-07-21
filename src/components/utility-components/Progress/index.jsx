import './styles.css';

const Progress = ({ value, componentClass, ...props }) => {
  const className = componentClass ? `progress ${componentClass}` : 'progress';
  const progressBarClassName = value !== undefined ? 'progress-bar' : 'progress-bar progress-bar-indeterminate';

  return (
    <div className={className} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" {...props}>
      <div className={progressBarClassName} style={value !== undefined ? { width: `${value}%` } : {}}></div>
    </div>
  );
};

export default Progress;
