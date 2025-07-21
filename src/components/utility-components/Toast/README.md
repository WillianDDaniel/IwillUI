# Toast

The `Toast` component displays a floating notification message to provide feedback to the user, such as success, error, or informational messages.

## Usage

```jsx
import Toast from './Toast';
import React, { useState } from 'react';

function MyComponent() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    // Toast will automatically close after 3 seconds (default duration)
  };

  return (
    <div>
      <button onClick={handleShowToast}>Show Toast</button>
      {showToast && (
        <Toast
          type="success"
          onClose={() => setShowToast(false)}
          duration={5000} // Show for 5 seconds
          componentClass="my-custom-toast"
        >
          Operation completed successfully!
        </Toast>
      )}
    </div>
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `children`       | `node`   | The content of the toast message.               |
| `componentClass` | `string` | Additional CSS class to apply to the main toast container. |
| `type`           | `string` | The type of toast: `info` (default), `success`, `error`, `warning`. |
| `onClose`        | `func`   | Callback function when the toast is closed (either by duration or close button). |
| `duration`       | `number` | How long the toast should be visible in milliseconds. Defaults to 3000ms. Set to 0 for persistent toast (requires `onClose` to dismiss). |
| `...props`     | `any`    | All other standard HTML div attributes are supported. |
