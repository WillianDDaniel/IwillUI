# VisuallyHidden

The `VisuallyHidden` component allows content to be hidden visually from the screen but remain accessible to assistive technologies like screen readers.

## Usage

```jsx
import VisuallyHidden from './VisuallyHidden';

function MyComponent() {
  return (
    <button>
      <VisuallyHidden>Read more about this item</VisuallyHidden>
      <span>Info</span>
    </button>
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `children`       | `node`   | The content to be visually hidden.              |
| `componentClass` | `string` | Additional CSS class to apply to the main container. |
| `...props`     | `any`    | All other standard HTML span attributes are supported. |
