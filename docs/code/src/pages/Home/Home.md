Here is the generated documentation in Markdown format:

---
title: Home.tsx
description: 'Documentation for the Home component'
---

# Home

The `Home` component is the main entry point for the application. It renders a navigation menu and a main content area.

## Props

* `APIS`: an array of API names and URLs
* `Footer`: a footer component
* `Guide`: a guide component
* `Header`: a header component
* `SwaggerDoc`: a Swagger documentation component
* `useLanguage`: a hook to manage the application language
* `useQueryState`: a hook to manage the query state

## Methods

* `handleSelectAPI`: a function to handle the selection of an API
* `setSelectedAPI`: a function to set the selected API
* `setQueryState`: a function to set the query state

## Components

* `Header`: a header component that renders a navigation menu
* `Footer`: a footer component
* `Guide`: a guide component that renders a guide
* `SwaggerDoc`: a Swagger documentation component that renders a Swagger documentation
* `Separator`: a separator component that separates the navigation menu from the main content area

## Plugins

* `RenderMermaidOperationPlugin`: a plugin to render Mermaid diagrams
* `CleanMainDescriptionPlugin`: a plugin to clean the main description
* `CleanOperationDescriptionPlugin`: a plugin to clean the operation description

## Usage

The `Home` component can be used as follows:
```jsx
import { Home } from './Home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
```
Note: This documentation is generated based on the code provided and may not cover all the details of the component.