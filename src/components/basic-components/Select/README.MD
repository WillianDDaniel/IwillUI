# Select

The `Select` component renders a customizable HTML dropdown select element.

## Import

```jsx
import { Select } from './components/Select'; // Adjust the path according to your project structure
````

-----

## Props

The following table details the available props for the `Select` component.

| Prop             | Type            | Default     | Description                                                                                                                               |
| ---------------- | --------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `value`          | `string` or `number` | `undefined` | The controlled value of the select.                                                                                                       |
| `onChange`       | `function`      | `undefined` | **Required.** The change event handler, typically used to update state.                                                                   |
| `children`       | `React.ReactNode` | `undefined` | The `<option>` elements to be rendered inside the select.                                                                                 |
| `name`           | `string`        | `""`        | The native `name` attribute for the select.                                                                                               |
| `disabled`       | `boolean`       | `false`     | If `true`, the select will be disabled and non-interactive.                                                                               |
| `componentClass` | `string`        | `""`        | An optional suffix for the BEM-style class (`select--${componentClass}`). Useful for creating style variants.                            |
| `...rest`        | `Object`        | `{}`        | Any other native HTML `<select>` attributes (e.g., `id`, `multiple`, `aria-label`) will be applied directly.                              |

-----

## Usage

The `Select` is a controlled component, so you must manage its state using the `value` and `onChange` props. The options are passed as children.

### Basic Usage

Here is a standard implementation for a controlled select input.

```jsx
import { useState } from 'react';

function MyForm() {
  const [selectedFruit, setSelectedFruit] = useState('apple');

  return (
    <Select
      name="fruit"
      value={selectedFruit}
      onChange={(e) => setSelectedFruit(e.target.value)}
    >
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
    </Select>
  );
}
```

### Disabled State

To disable the select, pass the `disabled` prop.

```jsx
<Select
  value="option1"
  disabled
>
  <option value="option1">Option 1 (Disabled)</option>
</Select>
```

### Passing Additional Attributes

Any other prop not listed above will be passed directly to the `<select>` element. This is useful for accessibility and HTML validation attributes.

```jsx
<Select
  name="country"
  id="country-select"
  aria-label="Select your country"
>
  <option value="">--Please choose an option--</option>
  <option value="usa">United States</option>
  <option value="canada">Canada</option>
</Select>
```
