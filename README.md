# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # React State Management: Theme Switcher and Task Manager

  A React and TypeScript app demonstrating global theme state with the Context API and task state with `useReducer`.

  ## Features

  - Switch between light and dark themes using a typed context and custom hook.
  - Add tasks, including by pressing Enter, and remove them from the task list.
  - Keep the reducer, context, components, constants, and styles in separate modules.

  ## Run Locally

  Requires Node.js and npm.

  ```bash
  npm install
  npm run dev
  ```

  Open the local URL printed by Vite. To verify the production build and lint rules, run:

  ```bash
  npm run build
  npm run lint
  ```
```
