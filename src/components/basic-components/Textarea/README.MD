# Textarea

The `Textarea` component renders a multi-line plain-text editing control, perfect for longer form inputs like comments or descriptions.

## Import

```jsx
import { Textarea } from './components/Textarea'; // Adjust the path according to your project structure
````

-----

## Props

The following table details the available props for the `Textarea` component.

| Prop             | Type     | Default     | Description                                                                                                                           |
| ---------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `value`          | `string` | `undefined` | The controlled value of the textarea.                                                                                                 |
| `onChange`       | `function` | `undefined` | **Required.** The change event handler, used to update state.                                                                         |
| `placeholder`    | `string` | `""`        | The placeholder text to display when the textarea is empty.                                                                           |
| `name`           | `string` | `""`        | The native `name` attribute for the textarea.                                                                                         |
| `disabled`       | `boolean`| `false`     | If `true`, the textarea will be disabled and non-interactive.                                                                         |
| `componentClass` | `string` | `""`        | An optional suffix for the BEM-style class (`textarea--${componentClass}`). Useful for creating style variants.                        |
| `...rest`        | `Object` | `{}`        | Any other native HTML `<textarea>` attributes (e.g., `id`, `rows`, `maxLength`, `required`) will be passed directly.                   |

-----

## Usage

Like the `Input` component, `Textarea` is a controlled component and requires state management.

### Basic Usage

Here is a standard implementation, paired with a `Label` for accessibility.

```jsx
import { useState } from 'react';
import { Label } from './components/Label'; // Assuming Label is in the same folder

function CommentSection() {
  const [comment, setComment] = useState('');

  return (
    <>
      <Label htmlFor="user-comment" text="Your Comment" />
      <Textarea
        id="user-comment"
        name="comment"
        placeholder="Leave your thoughts here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
    </>
  );
}
```

### Setting Initial Size

You can pass native textarea attributes like `rows` to suggest an initial visible size.

```jsx
<Textarea
  placeholder="This text area starts with 5 visible rows"
  rows={5}
/>
```

### Disabled State

Pass the `disabled` prop to make the textarea read-only.

```jsx
<Textarea
  placeholder="You can't edit this"
  value="This is some read-only text."
  disabled
/>
```