# Range Component

The `Range` component is a styled slider input for selecting a numerical value within a specified range. It is designed to be a **controlled component**.

## Basic Usage

To use the `Range` component, you must manage its state in a parent component, passing the `value` and an `onChange` handler.

```jsx
import React, { useState } from 'react';
import { Range } from './index';

const MyComponent = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleRangeChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <p>Current Value: {sliderValue}</p>
      <Range
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleRangeChange}
      />
    </div>
  );
}
```

## Examples

### Disabled State

```jsx
<Range value={50} disabled />
```

### With a Custom Style

```jsx
<Range value={75} componentClass="primary" />
```

## Props

| Prop             | Type       | Default | Description                                                                                                     |
| ---------------- | ---------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `componentClass`   | `string`   | `""`      | Optional CSS class modifier for BEM-style customization (e.g., `primary` results in `range--primary`).          |
| `value`          | `number`   | -       | **Required.** The controlled value of the slider.                                                               |
| `onChange`       | `function` | `()`    | **Required.** A callback function that is invoked when the slider value changes. It receives the native `event`. |
| `...props`       | `object`   | `{}`    | Any other standard HTML `<input type="range">` attributes (e.g., `disabled`, `min`, `max`, `step`, `name`).      |
