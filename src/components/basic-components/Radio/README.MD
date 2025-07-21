# Radio

The `Radio` component renders a customizable HTML radio button input.

## Import

```jsx
import { Radio } from './components/Radio'; // Adjust the path according to your project structure
````

-----

## Props

The following table details the available props for the `Radio` component.

| Prop             | Type      | Default     | Description                                                                                                                               |
| ---------------- | --------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `checked`        | `boolean` | `false`     | Controls whether the radio button is checked.                                                                                             |
| `onChange`       | `function`| `undefined` | **Required.** The change event handler, typically used to update state.                                                                   |
| `label`          | `string`  | `""`        | The text label displayed next to the radio button.                                                                                        |
| `name`           | `string`  | `""`        | The native `name` attribute for the input. **Crucial for grouping radio buttons** so only one can be selected within a group.             |
| `value`          | `string`  | `""`        | The value associated with the radio button.                                                                                               |
| `disabled`       | `boolean` | `false`     | If `true`, the radio button will be disabled and non-interactive.                                                                         |
| `componentClass` | `string`  | `""`        | An optional suffix for the BEM-style class (`radio--${componentClass}`). Useful for creating style variants.                             |
| `...rest`        | `Object`  | `{}`        | Any other native HTML `<input type="radio">` attributes (e.g., `id`, `aria-label`) will be applied directly.                            |

-----

## Usage

The `Radio` is a controlled component, so you must manage its state using the `checked` and `onChange` props. Radio buttons are typically used in groups, where only one option can be selected at a time. This is managed by giving all radio buttons in a group the same `name` attribute.

### Basic Usage

Here is a standard implementation for a controlled radio button group.

```jsx
import { useState } from 'react';

function MyForm() {
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <form>
      <Radio
        name="myOptions"
        label="Option 1"
        value="option1"
        checked={selectedOption === 'option1'}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <Radio
        name="myOptions"
        label="Option 2"
        value="option2"
        checked={selectedOption === 'option2'}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <Radio
        name="myOptions"
        label="Option 3"
        value="option3"
        checked={selectedOption === 'option3'}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
    </form>
  );
}
```

### Disabled State

To disable a radio button, pass the `disabled` prop.

```jsx
<Radio
  name="disabledOptions"
  label="This option is disabled"
  value="disabled"
  checked={false}
  disabled
/>
```

### Passing Additional Attributes

Any other prop not listed above will be passed directly to the `<input>` element. This is useful for accessibility and HTML validation attributes.

```jsx
<Radio
  name="userChoice"
  label="Yes"
  value="yes"
  id="choice-yes"
  aria-label="Select yes"
/>
```
