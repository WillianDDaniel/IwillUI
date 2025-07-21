# Card

The `Card` component is a flexible container used to group and display related content in a visually distinct block.

## Import

```jsx
import { Card } from './components/Card'; // Adjust the path according to your project structure
````

-----

## Props

The following table details the available props for the `Card` component.

| Prop             | Type              | Default     | Description                                                                                                                               |
| ---------------- | ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `children`       | `React.ReactNode` | `undefined` | **Required.** The content to be rendered inside the card. This can be any valid React node (text, other components, etc.).                |
| `componentClass` | `string`          | `""`        | An optional suffix for the BEM-style class (`card--${componentClass}`). Useful for creating style variants (e.g., `card--primary`).     |
| `...rest`        | `Object`          | `{}`        | Any other native HTML `<div>` attributes for the card container (e.g., `id`, `aria-label`) will be applied directly.                    |

-----

## Usage

The `Card` component is a versatile container. You can place any content inside it.

### Basic Usage

```jsx
import { Card } from './components/Card';

function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>This is some content inside the card.</p>
      <p>It can contain text, images, or other components.</p>
    </Card>
  );
}
```

### With Other Components

Cards are often used to group form elements, buttons, or other UI components.

```jsx
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card>
      <h3>Login</h3>
      <Label htmlFor="username" text="Username" />
      <Input
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <Label htmlFor="password" text="Password" />
      <Input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <Button label="Login" type="submit" />
    </Card>
  );
}
```

### Style Variants

You can use the `componentClass` prop to apply different visual styles to the card.

```jsx
<Card componentClass="primary">
  <h3>Primary Card</h3>
  <p>This card has a primary style.</p>
</Card>

<Card componentClass="dark">
  <h3>Dark Card</h3>
  <p>This card has a dark background.</p>
</Card>
```
