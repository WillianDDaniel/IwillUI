# Tag

The `Tag` component is a small, often removable, label or keyword, typically used for categorization or filtering.

## Usage

```jsx
import Tag from './Tag';
import React, { useState } from 'react';

function MyComponent() {
  const [tags, setTags] = useState(['React', 'JavaScript', 'CSS']);

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div>
      {tags.map(tag => (
        <Tag key={tag} onClose={() => handleRemoveTag(tag)} componentClass="my-custom-tag">
          {tag}
        </Tag>
      ))}
    </div>
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `children`       | `node`   | The content to be displayed inside the tag.     |
| `componentClass` | `string` | Additional CSS class to apply to the main tag container. |
| `onClose`        | `func`   | Optional callback function when the close button is clicked. If provided, a close button will be rendered. |
| `...props`     | `any`    | All other standard HTML span attributes are supported. |
