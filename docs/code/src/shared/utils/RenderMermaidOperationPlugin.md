Here is the generated documentation in Markdown format:

---
title: RenderMermaidOperationPlugin
description: 'A plugin that renders Mermaid diagrams for operations'
---

RenderMermaidOperationPlugin
==========================

This plugin is used to render Mermaid diagrams for operations. It checks if the operation has a corresponding Mermaid chart in the `mermaidMap` and if so, wraps the original component with the Mermaid diagram.

### Props

* `operation`: An `Operation` object that provides the `get` method to retrieve the operation ID.

### Usage

This plugin can be used by wrapping the original component with the `wrapComponents` method. For example:
```jsx
import { RenderMermaidOperationPlugin } from "@/shared/utils/RenderMermaidOperationPlugin";

const OriginalComponent = () => {
  // ...
};

const WrappedComponent = RenderMermaidOperationPlugin.wrapComponents(OriginalComponent);

export default WrappedComponent;
```
### Exported

* `RenderMermaidOperationPlugin`: The plugin function that wraps the original component with the Mermaid diagram.

Note: This documentation is generated based on the provided code and may not cover all possible use cases or edge cases.