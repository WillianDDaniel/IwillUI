import "./styles.css";
import React from "react";

/**
 * Range component
 *
 * A styled range slider input, designed to be used as a controlled component.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional BEM suffix for styling (e.g., "primary" -> "range--primary").
 * @param {number|string} props.value - The controlled value of the range input.
 * @param {function} props.onChange - Callback fired when the value changes. Receives the event.
 * @param {boolean} [props.disabled=false] - If true, the range input is disabled.
 * @param {Object} rest - Any other native HTML input props (e.g., min, max, step).
 */
export const Range = ({
  componentClass = "",
  value,
  onChange = () => { console.warn("onChange not defined for Range"); },
  disabled = false,
  ...rest
}) => {

  componentClass = componentClass && `--${componentClass}`;

  return (
    <input
      type="range"
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`range${componentClass}`}
      {...rest}
    />
  );
};
