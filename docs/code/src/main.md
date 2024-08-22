Here is the generated documentation in Markdown format:

---
title: main.tsx
description: 'Main entry point for the application'
---

This file is the main entry point for the application. It sets up the React environment and renders the application routes.

It imports the following modules:

* `@/i18n`: Internationalization module
* `jotai`: State management library
* `react`: React library
* `react-dom`: React DOM library
* `swagger-ui-react`: Swagger UI React library
* `flag-icons`: Flag icons library

It also imports the `AppRoutes` component from the `routes` directory.

The file creates a store using the `createStore` function from `jotai` and renders the application routes using the `ReactDOM` library.

The `ReactDOM.createRoot` method is used to create a root element for the React application, and the `render` method is used to render the application routes.

The `AppRoutes` component is rendered as a child of the `Provider` component, which provides the store to the application.

This file is the entry point for the application and sets up the React environment and renders the application routes.