import "./styles.css";
import React from "react";

/**
 * Button component
 *
 * A simple button that supports label, optional icon (left or right), and external styling via componentClass.
 * Additional native HTML button attributes can be passed through ...rest.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g. "primary" → button--primary)
 * @param {boolean} [props.disabled=false] - Disable the button
 * @param {React.ReactNode|string} [props.icon] - Icon element or emoji to show
 * @param {"left"|"right"} [props.iconPosition="right"] - Where to place the icon
 * @param {string} props.label - Text inside the button
 * @param {function} [props.onClick] - Button click handler
 * @param {"button"|"submit"|"reset"} [props.type="button"] - Button type
 * @param {Object} rest - Any other native HTML button props
 */
export const Button = ({
  componentClass = "",
  disabled = false,
  icon = null,
  iconPosition = "left",
  label = "Click me!",
  onClick = () => {console.warn("onClick not defined");},
  type = "button",
  ...rest
}) => {

  componentClass = componentClass && `--${componentClass}`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`button${componentClass}`}
      {...rest}
    >
      {icon && iconPosition === "left" && (
        <span className={`button-icon-left${componentClass}`}>
          {icon}
        </span>
      )}

      <span className={`button-label${componentClass}`}>
        {label}
      </span>

      {icon && iconPosition === "right" && (
        <span className={`button-icon-right${componentClass}`}>
          {icon}
        </span>
      )}
    </button>
  );
};