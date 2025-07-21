# Icon

The `Icon` component is used to render accessible SVG images.

## Usage

```jsx
import Icon from './Icon';
import MySvg from './my-icon.svg'; // Example SVG import

function MyComponent() {
  return (
    <Icon src={MySvg} alt="My custom icon" componentClass="my-custom-icon" />
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `src`            | `string` | The source URL of the SVG image.                |
| `alt`            | `string` | The alt text for the SVG image, for accessibility. |
| `componentClass` | `string` | Additional CSS class to apply to the main icon container. |
| `...props`     | `any`    | All other standard HTML img attributes are supported. |
