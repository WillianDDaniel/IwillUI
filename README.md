# IwillUI - A Reusable React UI Component Library

IwillUI is a comprehensive and reusable UI component library built with React, designed to provide a consistent and efficient development experience. This library aims to offer a collection of atomic, utility, and container components that can be easily integrated into any React project.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Component Categories](#component-categories)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Modular and Reusable**: Components are designed to be independent and easily reusable across different projects.
- **Consistent Design**: Adheres to a unified design language for a cohesive user experience.
- **Themable**: Easily customizable through CSS variables or prop-based styling. (Further details on theming will be added as the feature develops).
- **Well-documented**: Each component comes with its own `README.md` for clear usage instructions and prop details.

## Usage

Once installed, you can import and use any component from the library.

Example:

```jsx
import React from "react";
import { Button } from "iwillui/basic-components/Button"; // Example path, adjust as per actual export

function App() {
  return (
    <div>
      <Button
        componentClass="my-custom-button"
        onClick={() => alert("Button clicked!")}
        label="Click Me"
      ></Button>
    </div>
  );
}

export default App;
```

**Note**: The exact import paths might vary based on the library's build and export configuration. Please refer to the individual component's `README.md` for precise import statements.

## Component Categories

The components in this library are organized into three main categories to reflect their complexity and purpose:

- **`basic-components/`**: Atomic, low-level components that serve as fundamental building blocks.
  - Examples: `Button`, `Input`, `Label`, `Checkbox`, `Radio`, `Select`, `Switch`, `Textarea`, `NumberInput`, `FileInput`, `Range`, `TextareaAuto`.
- **`utility-components/`**: Lightweight, supportive components that provide contextual information or auxiliary behavior.
  - Examples: `Tooltip`, `Alert`, `Badge`, `Divider`, `Icon`, `Progress`, `Skeleton`, `Spinner`, `Tag`, `Toast`, `VisuallyHidden`.
- **`container-components/`**: Composite or layout-oriented components that can include other components or organize content visually.
  - Examples: `Card`, `Modal`.

## Project Structure

The project follows a clear and consistent structure:

```
src/
└── components/
    ├── basic-components/
    │   └── ComponentName/
    │       ├── index.jsx       // Component implementation
    │       ├── styles.css      // Component-specific styles
    │       └── README.md       // Component documentation
    ├── utility-components/
    │   └── AnotherComponent/
    │       ├── index.jsx
    │       ├── styles.css
    │       └── README.md
    └── container-components/
        └── YetAnotherComponent/
            ├── index.jsx
            ├── styles.css
            └── README.md
```

Each component resides in its own folder, containing its React implementation (`index.jsx`), dedicated stylesheet (`styles.css`), and comprehensive documentation (`README.md`).

## Contributing

We welcome contributions to IwillUI! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Ensure your code adheres to the existing style and conventions.
5.  Write tests for new features or bug fixes.
6.  Commit your changes (`git commit -m 'feat: Add new component X'`).
7.  Push to the branch (`git push origin feature/your-feature-name`).
8.  Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
