# Tooltip

The `Tooltip` component displays a small, contextual information box when the user hovers over an element.

## Import

```jsx
import { Tooltip } from './components/Tooltip'; // Adjust the path according to your project structure
````

-----

## Props

The following table details the available props for the `Tooltip` component.

| Prop             | Type              | Default     | Description                                                                                                                               |
| ---------------- | ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `children`       | `React.ReactNode` | `undefined` | **Required.** The element(s) that will trigger the tooltip when hovered over.                                                             |
| `tip`            | `string`          | `""`        | **Required.** The text content to be displayed inside the tooltip.                                                                        |
| `componentClass` | `string`          | `""`        | An optional suffix for the BEM-style class (`tooltip--${componentClass}`). Useful for creating style variants.                           |
| `...rest`        | `Object`          | `{}`        | Any other native HTML `<div>` attributes for the tooltip container (e.g., `id`, `aria-describedby`) will be applied directly.           |

-----

## Usage

The `Tooltip` component wraps around the element you want to have a tooltip. The `tip` prop provides the text that will be displayed.

### Basic Usage

```jsx
import { Tooltip } from './components/Tooltip';
import { Button } from './components/Button'; // Assuming you have a Button component

function App() {
  return (
    <div>
      <Tooltip tip="This is a helpful tip!">
        <Button label="Hover over me" />
      </Tooltip>

      <p>
        Some text with an <Tooltip tip="More info about this word.">important word</Tooltip>.
      </p>
    </div>
  );
}
```

### Customizing Position (CSS)

The default position is above the element. You can customize the positioning by overriding the CSS properties of `.tooltip-tip` (e.g., `top`, `bottom`, `left`, `right`, `transform`).
