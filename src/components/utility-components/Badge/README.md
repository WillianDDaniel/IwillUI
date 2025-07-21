# Badge

The `Badge` component is a small visual label used to display status, categories, or counts.

## Usage

```jsx
import Badge from './Badge';

function MyComponent() {
  return (
    <>
      <Badge>New</Badge>
      <Badge componentClass="primary">Primary</Badge>
      <Badge componentClass="success">Success</Badge>
    </>
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `children`       | `node`   | The content to be displayed inside the badge.   |
| `componentClass` | `string` | Additional CSS class to apply to the main badge container. |
| `...props`     | `any`    | All other standard HTML span attributes are supported. |
