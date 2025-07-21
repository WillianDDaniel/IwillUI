# Modal

The `Modal` component renders a customizable modal dialog that overlays the current content.

## Import

```jsx
import { Modal } from './components/Modal'; // Adjust the path according to your project structure
````

-----

## Props

The following table details the available props for the `Modal` component.

| Prop             | Type              | Default     | Description                                                                                                                               |
| ---------------- | ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpen`         | `boolean`         | `false`     | **Required.** Controls the visibility of the modal. If `true`, the modal is shown.                                                        |
| `onClose`        | `function`        | `undefined` | **Required.** A function to be called when the modal should be closed (e.g., when the overlay is clicked).                                |
| `children`       | `React.ReactNode` | `undefined` | The content to be rendered inside the modal body.                                                                                         |
| `componentClass` | `string`          | `""`        | An optional suffix for the BEM-style class (`modal--${componentClass}`). Useful for creating style variants.                            |
| `...rest`        | `Object`          | `{}`        | Any other native HTML `<div>` attributes for the modal content container (e.g., `id`, `aria-labelledby`) will be applied directly.      |

-----

## Usage

The `Modal` component is controlled by the `isOpen` prop. You typically manage its visibility with a state variable.

### Basic Usage

```jsx
import { useState } from 'react';
import { Modal } from './components/Modal';
import { Button } from './components/Button'; // Assuming you have a Button component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button label="Open Modal" onClick={handleOpenModal} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <Button label="Close" onClick={handleCloseModal} />
      </Modal>
    </div>
  );
}
```

### Preventing Close on Content Click

The modal is designed to close when the overlay is clicked. Clicks on the modal content itself are prevented from closing the modal by default.

### Accessibility

The modal includes `role="dialog"` and `aria-modal="true"` for basic accessibility. You should ensure that focus management is handled appropriately in your application (e.g., trapping focus within the modal when open).
