import "./styles.css";
import React from "react";

/**
 * Select component
 *
 * A basic dropdown select input.
 * Additional native HTML select attributes can be passed through ...rest.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g. "primary" → select--primary)
 * @param {boolean} [props.disabled=false] - Disable the select
 * @param {string} [props.name] - Name attribute for the select
 * @param {function} [props.onChange] - Change event handler
 * @param {string|number} [props.value] - Controlled value
 * @param {React.ReactNode} [props.children] - Option elements to be rendered inside the select
 * @param {Object} rest - Any other native HTML select props
 */
export const Select = ({
  componentClass = "",
  disabled = false,
  name = "",
  onChange,
  value,
  children,
  ...rest
}) => {
  componentClass = componentClass && `--${componentClass}`;

  return (
    <select
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
      className={`select${componentClass}`}
      {...rest}
    >
      {children}
    </select>
  );
};
