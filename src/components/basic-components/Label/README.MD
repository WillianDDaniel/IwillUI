# Label

The `Label` component renders an HTML `<label>` element, crucial for form accessibility by associating descriptive text with a form control.

## Import

```jsx
import { Label } from './components/Label'; // Adjust the path according to your project structure
````

-----

## Props

The following table details the available props for the `Label` component.

| Prop             | Type     | Default | Description                                                                                                                             |
| ---------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `text`           | `string` | `""`    | The text content to be displayed inside the label.                                                                                      |
| `htmlFor`        | `string` | `""`    | **Required.** The `id` of the form element that the label is associated with. This is critical for accessibility.                        |
| `componentClass` | `string` | `""`    | An optional suffix for the BEM-style class (`label--${componentClass}`). Useful for creating style variants.                             |
| `...rest`        | `Object` | `{}`    | Any other native HTML `<label>` attributes (e.g., `id`, `title`) will be passed directly.                                                 |

-----

## Usage

### Basic Usage

The primary purpose of a `Label` is to be paired with a form control like an `Input`. The `htmlFor` prop of the `Label` must match the `id` of the `Input`.

```jsx
// Make sure to import the Input component as well
import { Input } from './components/Input';

<>
  <Label htmlFor="user-name" text="Your Name" />
  <Input
    id="user-name"
    name="userName"
    placeholder="e.g., Jane Doe"
  />
</>
```

### Passing Additional Attributes

You can pass any standard HTML attributes to the label for additional context or functionality.

```jsx
<Label
  htmlFor="user-email"
  text="Email Address"
  title="Please provide your main email address."
/>
```