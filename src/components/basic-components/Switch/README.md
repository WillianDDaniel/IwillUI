# Switch

The `Switch` component is a modern toggle switch, providing a visual alternative to traditional checkboxes for activation/deactivation.

## Usage

```jsx
import Switch from './Switch';

function MyComponent() {
  return (
    <Switch
      checked={true}
      onChange={() => console.log('Switch toggled')}
      componentClass="my-custom-switch"
    />
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `componentClass` | `string` | Additional CSS class to apply to the main switch container. |
| `...props`     | `any`    | All other standard HTML input attributes are supported. |
