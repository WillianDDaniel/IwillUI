import "./styles.css";
import React from "react";

/**
 * Textarea component
 *
 * A multi-line text area with external styling via componentClass.
 * Additional native HTML textarea attributes can be passed through ...rest.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional BEM suffix (e.g. "primary" → textarea--primary)
 * @param {boolean} [props.disabled=false] - Disable the textarea
 * @param {string} [props.name] - Name attribute
 * @param {function} [props.onChange] - Change event handler
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Controlled value
 * @param {Object} rest - Other native textarea props
 */
export const Textarea = ({
  componentClass = "",
  disabled = false,
  name = "",
  onChange,
  placeholder = "",
  value,
  ...rest
}) => {
  componentClass = componentClass && `--${componentClass}`;

  return (
    <textarea
      name={name}
      value={value && value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      className={`textarea${componentClass}`}
      {...rest}
    />
  );
};