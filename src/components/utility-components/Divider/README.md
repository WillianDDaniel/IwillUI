# Divider

The `Divider` component creates a visual separation between content, either horizontally or vertically.

## Usage

```jsx
import Divider from './Divider';

function MyComponent() {
  return (
    <>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>

      <div style={{ display: 'flex', height: '50px' }}>
        <span>Left</span>
        <Divider orientation="vertical" />
        <span>Right</span>
      </div>
    </>
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `orientation`    | `string` | The orientation of the divider. Can be `horizontal` (default) or `vertical`. |
| `componentClass` | `string` | Additional CSS class to apply to the main divider container. |
| `...props`     | `any`    | All other standard HTML div attributes are supported. |
