## Gemini Added Memories

# Project Memory: UI Component Library

## 1. Project Overview

- **Project Type**: This is a reusable UI component library.
- **Technology Stack**: The library is built with JavaScript and React.
- **Core Principle**: Consistency is key. When creating or updating components, you must analyze the existing components and replicate their structure, coding patterns, and file organization.

## 2. Directory and File Structure

### Folder Categorization

The project structure reflects a hierarchy based on component complexity and purpose. Every new component must be placed in the appropriate category:

- `basic-components/`: Atomic, low-level components that act as the fundamental building blocks of the UI.  
  **Examples**: `Button`, `Input`, `Label`, `Checkbox`.

- `utility-components/`: Lightweight, supportive components that provide contextual information or auxiliary behavior.  
  **Examples**: `Tooltip`, `Alert`, `Badge`.

- `container-components/`: Composite or layout-oriented components that may include other components or organize content visually.  
  **Examples**: `Card`, `Modal`, `Accordion`.

### Component File Structure

Every individual component must reside in its own folder, containing the following files:

- `index.jsx`: The React component implementation.
- `styles.css`: The dedicated stylesheet for the component.
- `README.md`: Documentation for the component, including usage, props, and examples.

## 3. Component Standards and Patterns

### Code Implementation

- **Consistency**: Always follow the same structure, logic, and import/export patterns used in existing components.
- **Comments**: All comments must be written in clear and simple English.
- **Reusability**: Components should be focused, decoupled, and easily reusable across the library.
- **Prop Types**: Do not use `PropTypes` for prop validation in new components.

### Styling

- **`componentClass` Prop**: All components must accept a `componentClass` prop (`string`), which applies a CSS class to the root element.
- **Purpose**: This prop allows consumers to customize, extend, or override base styles using a BEM-style modifier system (`--modifier`). This ensures visual consistency and flexibility across all components.

## 4. Workflow for New Component Creation

Whenever you are asked to generate a new component, you must follow these steps:

1. **Categorize**  
   Determine whether the component is `basic`, `utility`, or `container` based on its purpose and complexity.

2. **Place**  
   Create the component in the appropriate folder under `basic-components/`, `utility-components/`, or `container-components/`.

3. **Scaffold**  
   Create the required three files:

   - `index.jsx`
   - `styles.css`
   - `README.md`

4. **Implement and Document**  
   Implement the component with consistent structure and logic. Ensure that:
   - The code aligns with patterns seen in other components.
   - The `componentClass` prop is used correctly.
   - The `README.md` includes props, usage examples, and relevant documentation.

---

This structure is designed to be extensible. If new categories are introduced in the future (e.g., `form-components/`), they must follow the same architectural and stylistic principles defined here.