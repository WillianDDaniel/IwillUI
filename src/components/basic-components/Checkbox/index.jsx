import "./styles.css";
/**
 * Checkbox component
 *
 * A basic checkbox input.
 * Additional native HTML input attributes can be passed through ...rest.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g. "primary" → checkbox--primary)
 * @param {boolean} [props.checked=false] - Whether the checkbox is checked
 * @param {boolean} [props.disabled=false] - Disable the checkbox
 * @param {string} [props.name] - Name attribute for the input
 * @param {function} [props.onChange] - Change event handler
 * @param {string} [props.label] - Text label for the checkbox
 * @param {Object} rest - Any other native HTML input props
 */
export const Checkbox = ({
  componentClass = "",
  checked,
  disabled = false,
  name = "",
  onChange = () => {console.warn("onChange not defined");},
  label = "Agree to terms and conditions",
  ...rest
}) => {
  componentClass = componentClass && `--${componentClass}`;

  return (
    <label className={`checkbox${componentClass}`}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={`checkbox-input${componentClass}`}
        {...rest}
      />
      <span className={`checkbox-label${componentClass}`}>{label}</span>
    </label>
  );
};
