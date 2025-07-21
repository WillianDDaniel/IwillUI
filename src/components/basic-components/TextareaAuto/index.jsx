import { useRef, useEffect } from 'react';
import './styles.css';

const TextareaAuto = ({ componentClass, ...props }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px'; // Reset height to recalculate
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [props.value]); // Re-run when value changes

  const className = componentClass ? `textarea-auto ${componentClass}` : 'textarea-auto';

  return (
    <textarea
      ref={textareaRef}
      className={className}
      rows="1"
      {...props}
    />
  );
};

export default TextareaAuto;
