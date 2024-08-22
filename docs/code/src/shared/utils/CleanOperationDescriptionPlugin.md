Here is the generated documentation in Markdown format:

---
title: CleanOperationDescriptionPlugin
description: 'A plugin to clean operation descriptions by removing Mermaid code'
---

CleanOperationDescriptionPlugin
=============================

This plugin is used to clean operation descriptions by removing Mermaid code.

### Usage

The plugin wraps the `operation` component and checks if the operation has a description that matches the Mermaid regex pattern. If it does, it replaces the Mermaid code with an empty string and updates the operation description.

### Props

* `operation`: The operation object that contains the description to be cleaned.

### Return Value

The plugin returns an object with a `wrapComponents` property that contains a function to wrap the `operation` component.

### Example

```jsx
import React from 'react';
import { CleanOperationDescriptionPlugin } from './CleanOperationDescriptionPlugin';

const Operation = () => {
  // ...
};

const WrappedOperation = CleanOperationDescriptionPlugin.wrapComponents.operation(Operation);

const App = () => {
  return (
    <WrappedOperation operation={operation} />
  );
};
```

### Exported

The plugin is exported as `CleanOperationDescriptionPlugin`.

I hope this helps! Let me know if you have any questions or need further clarification.