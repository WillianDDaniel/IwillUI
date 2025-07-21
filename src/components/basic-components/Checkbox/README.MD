# Checkbox

The `Checkbox` component renders a customizable HTML checkbox input.

## Import

```jsx
import { Checkbox } from "./components/Checkbox"; // Adjust the path according to your project structure
```

---

## Props

The following table details the available props for the `Checkbox` component.

| Prop             | Type       | Default     | Description                                                                                                              |
| ---------------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `checked`        | `boolean`  | `Undefined` | Controls whether the checkbox is checked.                                                                                |
| `onChange`       | `function` | `undefined` | **Required.** The change event handler, typically used to update state.                                                  |
| `label`          | `string`   | `""`        | The text label displayed next to the checkbox.                                                                           |
| `name`           | `string`   | `""`        | The native `name` attribute for the input, useful for forms.                                                             |
| `disabled`       | `boolean`  | `false`     | If `true`, the checkbox will be disabled and non-interactive.                                                            |
| `componentClass` | `string`   | `""`        | An optional suffix for the BEM-style class (`checkbox--${componentClass}`). Useful for creating style variants.          |
| `...rest`        | `Object`   | `{}`        | Any other native HTML `<input type="checkbox">` attributes (e.g., `id`, `value`, `aria-label`) will be applied directly. |

---

## Usage

The `Checkbox` is a controlled component, so you must manage its state using the `checked` and `onChange` props.

### Basic Usage

Here is a standard implementation for a controlled checkbox.

```jsx
import { useState } from "react";

function MyForm() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      label="Agree to terms and conditions"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
  );
}
```

### Disabled State

To disable the checkbox, pass the `disabled` prop.

```jsx
<Checkbox label="This checkbox is disabled" checked={true} disabled />
```

### Passing Additional Attributes

Any other prop not listed above will be passed directly to the `<input>` element. This is useful for accessibility and HTML validation attributes.

```jsx
<Checkbox
  label="Remember me"
  id="remember-me"
  value="true"
  aria-label="Remember my login details"
/>
```
