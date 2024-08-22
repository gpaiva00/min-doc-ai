---
title: SwaggerDoc.tsx
description: 'Documentation for the SwaggerDoc component'
---
# SwaggerDoc.tsx

The `SwaggerDoc.tsx` component is a wrapper for the Swagger UI React library, allowing you to easily integrate Swagger documentation into your application.

## Import

The component is imported from the `swagger-ui-react` library:
```jsx
import SwaggerUI, { SwaggerUIProps } from "swagger-ui-react";
```
## Component

The `SwaggerDoc` component is a functional component that takes a `SwaggerUIProps` object as a prop. It returns a `SwaggerUI` component from the `swagger-ui-react` library, with the `displayOperationId` and `docExpansion` props set to `false` and `none`, respectively.
```jsx
function SwaggerDoc(props: SwaggerUIProps) {
  return (
    <SwaggerUI displayOperationId={false} docExpansion="none" {...props} />
  );
}
```
## Export

The `SwaggerDoc` component is exported as a named export:
```jsx
export { SwaggerDoc };
```
This allows you to import and use the component in your application.