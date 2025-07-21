# Alert

The `Alert` component displays a dismissible or non-dismissible contextual message to the user.

## Import

```jsx
import { Alert } from './components/Alert'; // Adjust the path according to your project structure
````

-----

## Props

The following table details the available props for the `Alert` component.

| Prop             | Type              | Default     | Description                                                                                                                               |
| ---------------- | ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `children`       | `React.ReactNode` | `undefined` | **Required.** The content of the alert message (e.g., text, other components).                                                            |
| `type`           | `"info" \| "success" \| "warning" \| "danger"` | `"info"`    | The visual style of the alert, indicating its purpose or severity.                                                                        |
| `componentClass` | `string`          | `""`        | An optional suffix for the BEM-style class (`alert--${componentClass}`). Useful for creating style variants.                            |
| `...rest`        | `Object`          | `{}`        | Any other native HTML `<div>` attributes for the alert container (e.g., `id`, `aria-live`) will be applied directly.                    |

-----

## Usage

The `Alert` component is used to provide feedback or important information to the user.

### Basic Usage

```jsx
import { Alert } from './components/Alert';

function App() {
  return (
    <div>
      <Alert type="info">
        This is an informational alert.
      </Alert>
      <Alert type="success">
        Your operation was successful!
      </Alert>
      <Alert type="warning">
        Warning: Your session is about to expire.
      </Alert>
      <Alert type="danger">
        Error: Something went wrong.
      </Alert>
    </div>
  );
}
```

### Custom Content

You can place any React content inside the `Alert` component.

```jsx
import { Alert } from './components/Alert';
import { Button } from './components/Button';

function App() {
  return (
    <Alert type="info">
      <h4>Heads up!</h4>
      <p>This is a more complex alert with a heading and a button.</p>
      <Button label="Dismiss" />
    </Alert>
  );
}
```

### Accessibility

The alert includes `role="alert"` for basic accessibility, which signals to assistive technologies that the content is important and should be announced.
