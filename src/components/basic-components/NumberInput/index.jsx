import { useState } from 'react';
import './styles.css';

/**
 * NumberInput Component
 *
 * Numeric input with increment and decrement buttons.
 * Uses internal state but also supports an external `onChange` callback.
 *
 * @param {Object} props
 * @param {string} props.componentClass - Optional CSS modifier (BEM style).
 * @param {number} [props.initialValue=0] - Initial numeric value.
 * @param {number} [props.step=1] - Amount to increment/decrement.
 * @param {function} [props.onChange] - External callback fired when value changes.
 * @param {...Object} props - Other native HTML input props.
 */
export const NumberInput = ({
  componentClass,
  initialValue = 0,
  step = 1,
  onChange = () => { console.warn("onChange not defined for NumberInput"); },
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  componentClass = componentClass && `--${componentClass}`;

  const updateValue = (newValue) => {
    setValue(newValue);
    onChange(newValue); // always call external callback
  };

  const increment = () => {
    updateValue(value + step);
  };

  const decrement = () => {
    updateValue(Math.max(0, value - step));
  };

  return (
    <div className={`number-input${componentClass}`}>
      <button
        type="button"
        onClick={decrement}
        className={`decrement-button${componentClass}`}
      >
        -
      </button>

      <input
        type="number"
        value={value}
        onChange={(e) => updateValue(Number(e.target.value))}
        className={`number-input-input${componentClass}`}
        {...props}
      />

      <button
        type="button"
        onClick={increment}
        className={`increment-button${componentClass}`}
      >
        +
      </button>
    </div>
  );
};
