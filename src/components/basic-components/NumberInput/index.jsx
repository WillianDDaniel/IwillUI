import { useState } from 'react';
import './styles.css';

const NumberInput = ({ componentClass, initialValue = 0, step = 1, ...props }) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue(prevValue => prevValue + step);
  };

  const decrement = () => {
    setValue(prevValue => Math.max(0, prevValue - step)); // Ensure value doesn't go below 0
  };

  const className = componentClass ? `number-input ${componentClass}` : 'number-input';

  return (
    <div className={className}>
      <button type="button" onClick={decrement} className="number-input-button decrement">-</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="number-input-field"
        {...props}
      />
      <button type="button" onClick={increment} className="number-input-button increment">+</button>
    </div>
  );
};

export default NumberInput;
