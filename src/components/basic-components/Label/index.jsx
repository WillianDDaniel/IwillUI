import "./styles.css";
import React from "react";

/**
 * Label component
 *
 * A simple label that associates with a form control and supports external styling via componentClass.
 * Additional native HTML label attributes can be passed through ...rest.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g. "primary" → label--primary)
 * @param {string} [props.htmlFor] - The id of the form element this label is for
 * @param {string} [props.text] - Text content of the label
 * @param {Object} rest - Any other native HTML label props
 */
export const Label = ({
  componentClass = "",
  htmlFor = "",
  text = "",
  ...rest
}) => {
  componentClass = componentClass && `--${componentClass}`;

  return (
    <label
      htmlFor={htmlFor}
      className={`label${componentClass}`}
      {...rest}
    >
      <span className={`label-text${componentClass}`}>{text}</span>
    </label>
  );
};
