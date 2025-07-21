import "./styles.css";
import React from "react";

/**
 * Input component
 *
 * A basic text-like input that supports limited types and external styling via componentClass.
 * Invalid types fall back to "text" and log an error.
 * Additional native HTML input attributes can be passed through ...rest.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g. "primary" → input--primary)
 * @param {boolean} [props.disabled=false] - Disable the input
 * @param {string} [props.name] - Name attribute for the input
 * @param {function} [props.onChange] - Change event handler
 * @param {string} [props.placeholder] - Placeholder text
 * @param {"text"|"email"|"password"|"tel"|"number"|"url"|"search"} [props.type="text"] - Input type (one of: text, email, password, tel, number, url, search)
 * @param {string|number} [props.value] - Controlled value
 * @param {Object} rest - Any other native HTML input props
 */
export const Input = ({
  componentClass = "",
  disabled = false,
  name = "",
  onChange,
  placeholder = "",
  type = "text",
  value,
  ...rest
}) => {
  const allowed = ["text", "email", "password", "tel", "number", "url", "search"];

  let finalType = "text";
  if (allowed.includes(type)) {
    finalType = type;
  } else {
    console.error(`[Input]: invalid type "${type}" — falling back to "text".`);
  }

  componentClass = componentClass && `--${componentClass}`;

  return (
    <input
      type={finalType}
      name={name}
      value={value && value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      className={`input${componentClass}`}
      {...rest}
    />
  );
};
