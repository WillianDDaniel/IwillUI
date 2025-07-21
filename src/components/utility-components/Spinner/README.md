# Spinner

The `Spinner` component provides a visual loading indicator, typically used to show that content is being loaded or an operation is in progress.

## Usage

```jsx
import Spinner from './Spinner';

function MyComponent() {
  return (
    <Spinner componentClass="my-custom-spinner" />
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `componentClass` | `string` | Additional CSS class to apply to the main spinner container. |
| `...props`     | `any`    | All other standard HTML div attributes are supported. |
