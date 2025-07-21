import React, { useState } from "react";
import "./styles.css";

/**
 * Tooltip component
 *
 * A simple tooltip that displays a text tip on hover over its children.
 * Additional native HTML div attributes can be passed through ...rest for the tooltip container.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g. "primary" → tooltip--primary)
 * @param {React.ReactNode} props.children - The element(s) that trigger the tooltip on hover.
 * @param {string} props.tip - The text content to display inside the tooltip.
 * @param {Object} rest - Any other native HTML div props for the tooltip container.
 */
export const Tooltip = ({
  componentClass = "",
  children,
  tip,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);

  componentClass = componentClass && `--${componentClass}`;

  return (
    <div
      className={`tooltip-container${componentClass}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...rest}
    >
      {children}
      {isVisible && (
        <div className={`tooltip-tip${componentClass}`}>
          {tip}
        </div>
      )}
    </div>
  );
};
