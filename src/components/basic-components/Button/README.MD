# Button

The `Button` component renders a clickable HTML button element, with support for text labels, optional icons, and custom styling.

## Import

```jsx
import { Button } from './components/Button'; // Adjust the path according to your project structure
````

-----

## Props

The following table details the available props for the `Button` component.

| Prop             | Type                                | Default                               | Description                                                                                                                            |
| ---------------- | ----------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `label`          | `string`                            | `'Click me!'`                         | The text to be displayed inside the button.                                                                                            |
| `componentClass` | `string`                            | `""`                                  | A suffix for the BEM class (`button--${componentClass}`). Useful for creating style variants (e.g., "primary", "danger").          |
| `icon`           | `React.ReactNode` or `string`       | `null`                                | An icon (React component, SVG, emoji, etc.) to be displayed in the button.                                                             |
| `iconPosition`   | `'left'` or `'right'`               | `'left'`                              | Defines the position of the icon relative to the text (`label`).                                                                       |
| `onClick`        | `function`                          | `() => console.log("clicked!")`       | The function to be executed when the button is clicked.                                                                                |
| `disabled`       | `boolean`                           | `false`                               | If `true`, the button will be disabled and cannot be clicked.                                                                          |
| `type`           | `'button'`, `'submit'` or `'reset'` | `'button'`                            | The native `type` attribute of the HTML button.                                                                                        |
| `...rest`        | `Object`                            | `{}`                                  | Any other native HTML `<button>` attributes (e.g., `id`, `aria-label`, `data-*`) will be applied directly.                           |

-----

## Usage

### Basic

The simplest use of the component only requires the `label` prop.

```jsx
<Button label="Click Me" />
```

### Style Variants

Use the `componentClass` prop to apply different styles. For example, for a primary and secondary button, you can pass `"primary"` and `"secondary"`.

This will generate the classes `button--primary` and `button--secondary`, which you can style in your CSS.

```jsx
<Button label="Primary" componentClass="primary" />
<Button label="Secondary" componentClass="secondary" />
```

### With Icons

You can add an icon and control its position with the `icon` and `iconPosition` props.

```jsx
// Import your icon or use an emoji
import { FaBeer } from 'react-icons/fa';

// Icon on the left (default)
<Button label="Save" icon={<FaBeer />} />

// Icon on the right
<Button label="Next" icon="➡️" iconPosition="right" />
```

### Disabled State

To disable the button, pass the `disabled` prop.

```jsx
<Button label="Not Clickable" disabled />
```

### Passing Additional Attributes

Any other prop not listed above will be passed directly to the `<button>` element in the DOM. This is useful for accessibility and testing.

```jsx
<Button
  label="Submit Form"
  type="submit"
  id="submit-button"
  aria-label="Button to submit the contact form"
/>
```