# Input

The `Input` component renders a standard HTML `<input>` element. It supports a limited set of types, can be styled externally, and gracefully handles invalid `type` props by defaulting to "text".

## Import

```jsx
import { Input } from './components/Input'; // Adjust the path according to your project structure
````

-----

## Props

The following table details the available props for the `Input` component.

| Prop             | Type                                                              | Default     | Description                                                                                                                               |
| ---------------- | ----------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `value`          | `string` or `number`                                              | `undefined` | The controlled value of the input.                                                                                                        |
| `onChange`       | `function`                                                        | `undefined` | **Required.** The change event handler, typically used to update state.                                                                   |
| `placeholder`    | `string`                                                          | `""`        | The placeholder text to display when the input is empty.                                                                                  |
| `type`           | `string`                                                          | `'text'`    | The input type. Must be one of: `"text"`, `"email"`, `"password"`, `"tel"`, `"number"`, `"url"`, or `"search"`. Invalid types fall back to `text`. |
| `name`           | `string`                                                          | `""`        | The native `name` attribute for the input, useful for forms.                                                                              |
| `disabled`       | `boolean`                                                         | `false`     | If `true`, the input will be disabled and non-interactive.                                                                                |
| `componentClass` | `string`                                                          | `""`        | An optional suffix for the BEM-style class (`input--${componentClass}`). Useful for creating style variants.                               |
| `...rest`        | `Object`                                                          | `{}`        | Any other native HTML `<input>` attributes (e.g., `id`, `maxLength`, `aria-label`) will be applied directly.                              |

-----

## Usage

The `Input` is a controlled component, so you must manage its state using the `value` and `onChange` props.

### Basic Usage

Here is a standard implementation for a controlled text input.

```jsx
import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');

  return (
    <Input
      name="fullName"
      placeholder="Enter your full name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

### Input Types

You can specify the input type for built-in browser validation and functionality.

```jsx
<>
  <Input
    type="email"
    name="emailAddress"
    placeholder="email@example.com"
    // value and onChange handlers would be here
  />
  <Input
    type="password"
    name="userPassword"
    placeholder="Password"
    // value and onChange handlers would be here
  />
</>
```

### Disabled State

To disable the input, pass the `disabled` prop.

```jsx
<Input
  placeholder="You can't type here"
  value="Some unchangeable value"
  disabled
/>
```

### Passing Additional Attributes

Any other prop not listed above will be passed directly to the `<input>` element. This is useful for accessibility and HTML validation attributes.

```jsx
<Input
  placeholder="Username"
  maxLength={15}
  id="username-field"
  aria-label="Enter your desired username"
/>
```