# Skeleton

The `Skeleton` component provides an animated placeholder, commonly used to indicate that content is being loaded.

## Usage

```jsx
import Skeleton from './Skeleton';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Skeleton componentClass="my-custom-skeleton" />
      ) : (
        <div>
          <h2>Loaded Content</h2>
          <p>This is the content that was loaded.</p>
        </div>
      )}
    </div>
  );
}
```

## Props

| Prop           | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `componentClass` | `string` | Additional CSS class to apply to the main skeleton container. |
| `...props`     | `any`    | All other standard HTML div attributes are supported. |
