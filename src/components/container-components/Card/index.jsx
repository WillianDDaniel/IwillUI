import "./styles.css";
import React from "react";

/**
 * Card component
 *
 * A versatile container component for grouping related content.
 * Additional native HTML div attributes can be passed through ...rest.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g. "primary" → card--primary)
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @param {Object} rest - Any other native HTML div props for the card container.
 */
export const Card = ({
  componentClass = "",
  children,
  ...rest
}) => {
  componentClass = componentClass && `--${componentClass}`;

  return (
    <div
      className={`card${componentClass}`}
      {...rest}
    >
      {children}
    </div>
  );
};
