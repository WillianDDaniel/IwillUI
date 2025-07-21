# FileInput

The `FileInput` component provides a styled file upload field, offering a more visually appealing and customizable alternative to the browser's default file input.

## Usage

```jsx
import FileInput from './FileInput';

function MyComponent() {
  return (
    <FileInput
      onChange={(e) => console.log(e.target.files[0].name)}
      componentClass="my-custom-file-input"
    />
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `componentClass` | `string` | Additional CSS class to apply to the main file input container. |
| `...props`     | `any`    | All other standard HTML input attributes are supported. |
