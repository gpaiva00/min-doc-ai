Here is the generated documentation in Markdown format:

---
title: stores
description: 'Documentation for the stores directory'
---

The `stores` directory contains the language store, which is responsible for managing the application's language settings.

### Language Store

The `languageStore.ts` file is responsible for managing the application's language settings. It provides a way to set and get the current language, as well as a way to switch between languages.

### Usage

To use the language store, you can import it in your component and use the `useLanguage` hook to get the current language. For example:
```jsx
import { useLanguage } from '../stores/languageStore';

function MyComponent() {
  const language = useLanguage();
  return <div>Hello, {language}!</div>;
}
```
You can also use the `setLanguage` function to set a new language. For example:
```jsx
import { setLanguage } from '../stores/languageStore';

function MyComponent() {
  setLanguage('pt-BR');
  return <div>Language set to Portuguese (Brazil)</div>;
}
```
### API

The language store provides the following API:

* `useLanguage()`: Returns the current language.
* `setLanguage(language: string)`: Sets a new language.

Note: This documentation is generated based on the provided directory structure and file names. If you need to add more information or clarify any points, please let me know!