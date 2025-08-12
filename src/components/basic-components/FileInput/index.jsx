import './styles.css';
import React from 'react';

/**
 * FileInput component
 *
 * A custom-styled file input that allows for better visual consistency.
 * It shows the selected filename and allows for custom button text and placeholder.
 * Additional native HTML input attributes can be passed through ...rest.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g., "primary" -> "file-input--primary").
 * @param {string} [props.buttonText="Choose File"] - Text to display on the button part of the input.
 * @param {string} [props.placeholder="No file chosen"] - Text to display when no file is selected.
 * @param {function} [props.onChange] - Change event handler.
 * @param {boolean} [props.disabled=false] - Disables the file input.
 * @param {Object} rest - Any other native HTML input props.
 */
export const FileInput = ({
  componentClass = "",
  buttonText = "Choose File",
  placeholder = "No file chosen",
  onChange = () => { console.warn("onChange not defined"); },
  disabled = false,
  ...rest
}) => {
  const [filename, setFilename] = React.useState("");

  const effectiveClass = componentClass ? `--${componentClass}` : "";

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFilename(file.name);
    } else {
      setFilename("");
    }
    onChange(event);
  };

  return (
    <label className={`file-input${effectiveClass}${disabled ? ' file-input--disabled' : ''}`}>
      <input
        type="file"
        className={`file-input-hidden${effectiveClass}`}
        onChange={handleFileChange}
        disabled={disabled}
        {...rest}
      />
      <span className={`file-input-button${effectiveClass}`}>{buttonText}</span>
      <span className={`file-input-filename${effectiveClass}`}>
        {filename || placeholder}
      </span>
    </label>
  );
};
