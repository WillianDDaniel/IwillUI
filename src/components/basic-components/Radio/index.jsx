import "./styles.css";

/**
 * Radio component
 *
 * A basic radio button input.
 * Additional native HTML input attributes can be passed through ...rest.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g. "primary" → radio--primary)
 * @param {boolean} [props.checked=false] - Whether the radio button is checked
 * @param {boolean} [props.disabled=false] - Disable the radio button
 * @param {string} [props.name] - Name attribute for the input (important for grouping radio buttons)
 * @param {function} [props.onChange] - Change event handler
 * @param {string} [props.label] - Text label for the radio button
 * @param {string} [props.value] - Value of the radio button
 * @param {Object} rest - Any other native HTML input props
 */
export const Radio = ({
  componentClass = "",
  checked = false,
  disabled = false,
  name = "",
  onChange,
  label = "",
  value = "",
  ...rest
}) => {
  componentClass = componentClass && `--${componentClass}`;

  return (
    <label className={`radio-container${componentClass}`}>
      <input
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={value}
        className={`radio-input${componentClass}`}
        {...rest}
      />
      <span className={`radio-label${componentClass}`}>{label}</span>
    </label>
  );
};
