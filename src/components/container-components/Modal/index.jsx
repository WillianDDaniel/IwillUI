import "./styles.css";
import React from "react";

/**
 * Modal component
 *
 * A basic modal dialog.
 * Additional native HTML div attributes can be passed through ...rest for the modal content.
 *
 * @param {Object} props
 * @param {string} [props.componentClass] - Optional suffix for BEM-style class (e.g. "primary" → modal--primary)
 * @param {boolean} props.isOpen - Controls the visibility of the modal.
 * @param {function} props.onClose - Function to call when the modal should be closed (e.g., clicking outside or close button).
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal.
 * @param {Object} rest - Any other native HTML div props for the modal content container.
 */
export const Modal = ({
  componentClass = "",
  isOpen,
  onClose,
  children,
  ...rest
}) => {
  if (!isOpen) {
    return null;
  }

  componentClass = componentClass && `--${componentClass}`;

  return (
    <div className={`modal-overlay${componentClass}`} onClick={onClose}>
      <div
        className={`modal-content${componentClass}`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
        role="dialog"
        aria-modal="true"
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};
