Here is the generated documentation in Markdown format:

---
title: Mermaid.tsx
description: 'A component for rendering Mermaid diagrams'
---

# Mermaid.tsx

This component is used to render Mermaid diagrams in the application. It imports the `mermaid` library and initializes it with default settings.

## Usage

The component takes a `chart` prop, which is a string representing the Mermaid diagram code. It uses the `useEffect` hook to ensure that the Mermaid content is loaded after the component is mounted.

## Code

```typescript
import mermaid from "mermaid";
import { useEffect } from "react";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
  fontFamily: "monospace",
});

const Mermaid = ({ chart }: { chart: string }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export { Mermaid };
```

I hope this meets your requirements! Let me know if you need any further assistance.