# React Context and Reducer Activity

A React and TypeScript task manager demonstrating two state-management patterns:

- `useContext` shares the selected theme across the app.
- `useReducer` manages task additions and removals with typed actions.

## Features

- Toggle between light and dark themes from the navigation bar.
- Add tasks with the button or Enter, and remove tasks from the list.
- Keep theme state, reducer logic, UI components, and styles in separate modules.

## Project Structure

```text
src/
	components/  Navbar and TaskManager UI and styles
	constants/   Theme values
	context/     Theme provider and custom hook
	reducers/    Typed task reducer
```

## Theme Palette

| Theme | Background | Text | Button |
| --- | --- | --- | --- |
| Light | `#FFFFFF` | `#000000` | `#1E90FF` |
| Dark | `#242629` | `#FFFFFF` | `#85D1B0` |

## Run Locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

## Verify

```bash
npm run build
npm run lint
```

The repository ignores `node_modules`; install dependencies with `npm install` after cloning.
