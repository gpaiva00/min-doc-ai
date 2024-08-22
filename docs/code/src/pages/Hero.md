Here is the generated documentation in Markdown format:

---
title: Hero
description: Documentation for the Hero component
---

The Hero component is a part of the Fastpay REST API documentation. It is responsible for rendering the hero section of the application.

### Structure

The Hero component is located in the `src/pages/Hero` directory and is composed of the following files:

* `Hero.tsx`: The main component file that renders the hero section.
* `index.ts`: An index file that exports the Hero component.

### Usage

To use the Hero component, you can import it in your application and render it as follows:
```jsx
import Hero from '../pages/Hero';

function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}
```
### Props

The Hero component accepts the following props:

* `title`: The title of the hero section.
* `description`: The description of the hero section.
* `image`: The image to be displayed in the hero section.

### Hooks

The Hero component uses the following hooks:

* `useQueryState`: A hook that manages the state of the hero section.
* `useLanguage`: A hook that manages the language of the hero section.

### Stores

The Hero component uses the following stores:

* `languageStore`: A store that manages the language of the application.

### Utilities

The Hero component uses the following utilities:

* `CleanMainDescriptionPlugin`: A utility that cleans the main description of the hero section.
* `CleanOperationDescriptionPlugin`: A utility that cleans the operation description of the hero section.
* `RenderMermaidOperationPlugin`: A utility that renders the Mermaid operation diagram.

### Components

The Hero component uses the following components:

* `Footer`: A component that renders the footer of the application.
* `Guide`: A component that renders the guide of the application.
* `Header`: A component that renders the header of the application.
* `SwaggerDoc`: A component that renders the Swagger documentation.
* `Mermaid`: A component that renders the Mermaid diagram.

I hope this documentation helps you understand how to use the Hero component in your application. If you have any questions or need further assistance, please don't hesitate to ask.