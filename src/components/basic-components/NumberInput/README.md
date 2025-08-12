# NumberInput

The `NumberInput` component provides a user-friendly interface for entering numerical values. It features integrated increment and decrement buttons and manages its own state, while providing an `onChange` callback to communicate value changes to the parent component.

This makes it a highly reusable component, suitable for forms, e-commerce carts, and any other scenario where a numeric input is required.

## Usage

```jsx
import { NumberInput } from './index';

const MyComponent = () => {
  const handleValueChange = (newValue) => {
    console.log("The new value is:", newValue);
  };

  return (
    <NumberInput
      initialValue={10}
      step={2}
      onChange={handleValueChange}
    />
  );
}
```

## Examples

### With a Custom Style

You can apply a BEM-style modifier to customize the component's appearance.

```jsx
<NumberInput initialValue={5} componentClass="primary" />
```

### Disabled State

The component can be disabled by passing the standard `disabled` prop.

```jsx
<NumberInput initialValue={10} disabled />
```

## Props

| Prop             | Type       | Default | Description                                                                                                  |
| ---------------- | ---------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `componentClass`   | `string`   | `""`      | Optional CSS class modifier for BEM-style customization (e.g., `primary` results in `number-input--primary`).    |
| `initialValue`   | `number`   | `0`     | The starting value for the number input.                                                                     |
| `step`           | `number`   | `1`     | The amount by which the value increments or decrements with each button click.                               |
| `onChange`       | `function` | `()`    | A callback function that is invoked whenever the value changes. It receives the new `number` as its only argument. |
| `...props`       | `object`   | `{}`    | Any other standard HTML `<input>` attributes (e.g., `disabled`, `min`, `max`, `name`) will be passed through.      |


### With Min and Max Values

Standard input attributes like `min` and `max` are passed directly to the underlying input element.

```jsx
<NumberInput initialValue={5} min={0} max={20} />
```

### Passing Additional Attributes

Any other prop not listed above will be passed directly to the `<input>` element. This is useful for accessibility and HTML validation attributes.

```jsx
<NumberInput
  placeholder="Username"
  maxLength={15}
  id="username-field"
  aria-label="Enter your desired username"
/>
```