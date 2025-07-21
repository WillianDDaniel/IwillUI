# Progress

The `Progress` component displays a progress bar, which can be determinate (showing a specific value) or indeterminate (showing ongoing activity).

## Usage

### Determinate Progress

```jsx
import Progress from './Progress';

function MyDeterminateProgress() {
  return (
    <Progress value={75} componentClass="my-custom-progress" />
  );
}
```

### Indeterminate Progress

```jsx
import Progress from './Progress';

function MyIndeterminateProgress() {
  return (
    <Progress componentClass="my-custom-progress" />
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `value`          | `number` | The current progress value (0-100). If omitted, the progress bar will be indeterminate. |
| `componentClass` | `string` | Additional CSS class to apply to the main progress container. |
| `...props`     | `any`    | All other standard HTML div attributes are supported. |
