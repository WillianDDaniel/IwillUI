# TextareaAuto

The `TextareaAuto` component is a textarea that automatically adjusts its height to fit its content, providing a seamless typing experience.

## Usage

```jsx
import TextareaAuto from './TextareaAuto';
import React, { useState } from 'react';

function MyComponent() {
  const [text, setText] = useState('');

  return (
    <TextareaAuto
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type something..."
      componentClass="my-custom-textarea"
    />
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `componentClass` | `string` | Additional CSS class to apply to the main textarea. |
| `...props`     | `any`    | All other standard HTML textarea attributes are supported. |
