import "./styles.css";
import React from "react";

/**
 * Alert component
 *
 * A simple alert message component.
 * Additional native HTML div attributes can be passed through ...rest.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g. "primary" → alert--primary)
 * @param {React.ReactNode} props.children - The content of the alert message.
 * @param {"info"|"success"|"warning"|"danger"} [props.type="info"] - The type of alert, influencing its styling.
 * @param {Object} rest - Any other native HTML div props for the alert container.
 */
export const Alert = ({
  componentClass = "",
  children,
  type = "info",
  ...rest
}) => {
  const allowedTypes = ["info", "success", "warning", "danger"];
  const finalType = allowedTypes.includes(type) ? type : "info";

  componentClass = componentClass && `--${componentClass}`;

  return (
    <div
      className={`alert alert--${finalType}${componentClass}`}
      role="alert"
      {...rest}
    >
      {children}
    </div>
  );
};
