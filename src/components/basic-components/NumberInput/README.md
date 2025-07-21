# NumberInput

The `NumberInput` component provides an input field for numerical values with integrated increment and decrement buttons.

## Usage

```jsx
import NumberInput from './NumberInput';

function MyComponent() {
  return (
    <NumberInput
      initialValue={10}
      step={2}
      onChange={(e) => console.log(e.target.value)}
      componentClass="my-custom-number-input"
    />
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `componentClass` | `string` | Additional CSS class to apply to the main number input container. |
| `initialValue`   | `number` | The initial value of the input. Defaults to 0. |
| `step`           | `number` | The amount to increment or decrement the value. Defaults to 1. |
| `...props`     | `any`    | All other standard HTML input attributes are supported. |
