# Contributing to IwillUI

First off, thank you for considering contributing to IwillUI! It's people like you that make open source such a great community. We welcome any type of contribution, from reporting bugs to proposing new features or components.

## Code of Conduct

To ensure a welcoming and inclusive environment, this project has a [Code of Conduct](./CODE_OF_CONDUCT.md) that all contributors are expected to adhere to. Please read it before contributing.

## How to Contribute

There are many ways to contribute:

- **Reporting Bugs:** If you find a bug, please open an issue and provide as much detail as possible, including steps to reproduce it.
- **Suggesting Enhancements:** If you have an idea for a new feature or an improvement to an existing one, open an issue to discuss it.
- **Pull Requests:** If you want to contribute with code, that's awesome! Please open an issue first to discuss the change you wish to make.

## Getting Started: Setting Up Your Environment

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** to your local machine:
    ```bash
    git clone https://github.com/YOUR_USERNAME/IwillUI.git
    ```
3.  **Navigate to the project directory**:
    ```bash
    cd IwillUI
    ```
4.  **Install the dependencies**:
    ```bash
    npm install
    ```
5.  **Run the development server**:
    ```bash
    npm run dev
    ```
    This will start the Vite development server and you can see the components in action.

## Development Workflow

1.  **Create a new branch** for your changes. Please use a descriptive branch name:
    - For new features: `feature/my-new-feature`
    - For bug fixes: `fix/my-bug-fix`
    ```bash
    git checkout -b feature/my-new-feature
    ```

2.  **Make your changes**. Ensure you follow the project's coding style.
    - Create or update components following the existing structure (`/src/components/...`).
    - If you add a new component, please include its `index.jsx`, `styles.css`, and `README.md`.

3.  **Format and lint your code** before committing:
    ```bash
    npm run format
    npm run lint
    ```

4.  **Commit your changes** with a clear and descriptive commit message.

5.  **Push your branch** to your fork on GitHub:
    ```bash
    git push origin feature/my-new-feature
    ```

## Submitting a Pull Request (PR)

- Once your changes are on your fork, open a Pull Request to the `main` branch of the original IwillUI repository.
- Provide a clear title and a detailed description of the changes you've made.
- If your PR fixes an issue, please reference it in the description (e.g., `Fixes #123`).
- A core team member will review your PR. We may suggest some changes or improvements.

Thank you again for your contribution!