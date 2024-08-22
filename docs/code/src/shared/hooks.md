Here is the generated documentation in Markdown format:

---
title: src/shared/hooks
description: Documentation for the hooks directory
---

# src/shared/hooks

This directory contains reusable React hooks for the application.

## Description

The hooks in this directory are designed to be used throughout the application to manage state and side effects. They provide a way to encapsulate complex logic and make it easier to reuse code.

## Hooks

### useQueryState

* Description: A hook to manage query state for the application.
* Usage: Import the hook and use it in your component to manage query state.

### useLanguage

* Description: A hook to manage language settings for the application.
* Usage: Import the hook and use it in your component to manage language settings.

## How to use

To use a hook, simply import it in your component and use it as needed. For example:
```jsx
import { useQueryState } from '../hooks';

function MyComponent() {
  const queryState = useQueryState();
  // Use the query state as needed
  return <div>{queryState}</div>;
}
```
I hope this helps! Let me know if you have any questions or need further clarification.