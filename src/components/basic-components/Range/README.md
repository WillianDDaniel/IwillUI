# Range

The `Range` component provides a slider input for selecting a numerical value within a specified range.

## Usage

```jsx
import Range from './Range';

function MyComponent() {
  return (
    <Range
      min="0"
      max="100"
      defaultValue="50"
      onChange={(e) => console.log(e.target.value)}
      componentClass="my-custom-range"
    />
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `componentClass` | `string` | Additional CSS class to apply to the main range input. |
| `...props`     | `any`    | All other standard HTML input attributes are supported. |
