import './styles.css';

const FileInput = ({ componentClass = "", ...props }) => {
  componentClass = componentClass && `--${componentClass}`;
  return (
    <label className={`file-input${componentClass}`}>
      <input type="file" className={`file-input-hidden${componentClass}`} {...props} />
      <span className={`file-input-button${componentClass}`}>Choose File</span>
      <span className={`file-input-filename${componentClass}`}>No file chosen</span>
    </label>
  );
};

export default FileInput;
