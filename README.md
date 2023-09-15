# [react-vitest-issue](https://github.com/sombriks/react-vitest-issue)

[![testing](https://github.com/sombriks/react-vitest-issue/actions/workflows/main.yml/badge.svg)](https://github.com/sombriks/react-vitest-issue/actions/workflows/node.js.yml)

Sample project to explore a testing issue

## The issue

Some tests weren't proper firing the expected updates. mainly the tests rendering
just the hooks instead of the complete documents, like this:

```javascript
const hooks = renderHook(() => useFeedHooks())
// the rest of the test
```

This hook has a `useEffect` hook.

When rendering the component the expected behavior is present:

```jsx
const component = render(<Feed/>)
// the rest of the test
```

Basically when rendering just the hooks, the `useEffect` hook **has no effect**.

## The solution

For now, don't depende on useEffects inside custom hooks.

More investigation is needed.

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast
  Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
  ecmaVersion: 'latest',
    sourceType
:
  'module',
    project
:
  ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir
:
  __dirname,
}
,
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked`
  or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and
  add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
