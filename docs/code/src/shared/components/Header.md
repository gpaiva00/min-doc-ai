---
title: Header.tsx
description: 'Documentation for the Header component'
---
# Header

The `Header` component is a reusable UI component used to render the top-level navigation menu for the Fastpay application.

## Props

The `Header` component accepts the following props:

* `apis`: An optional prop that accepts an object containing API information.
* `onChooseAPI`: An optional prop that accepts a function to handle API selection.
* `onChangeLanguage`: A required prop that accepts a function to handle language changes.
* `selectedLanguage`: A required prop that accepts the currently selected language.
* `translation`: A required prop that accepts the translation function.

## Usage

The `Header` component can be used as follows:
```jsx
import { Header } from '@shared/components/Header';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedAPI, setSelectedAPI] = useState('guide');

  return (
    <Header
      onChangeLanguage={(language) => setSelectedLanguage(language)}
      selectedLanguage={selectedLanguage}
      selectedAPI={selectedAPI}
      onChooseAPI={(url) => setSelectedAPI(url)}
    />
  );
}
```
## Component Structure

The `Header` component consists of the following elements:

* A navigation menu with links to the Fastpay documentation and other pages.
* A dropdown menu for selecting the language.
* A dropdown menu for selecting the API.
* A button to toggle the navigation menu.

## CSS Classes

The `Header` component uses the following CSS classes:

* `sticky`: A CSS class to make the header sticky.
* `top-0`: A CSS class to position the header at the top of the page.
* `flex`: A CSS class to make the header a flex container.
* `h-16`: A CSS class to set the height of the header to 16px.
* `items-center`: A CSS class to center the content of the header.
* `gap-4`: A CSS class to add a gap of 4px between the elements in the header.
* `md:px-8`: A CSS class to add a padding of 8px to the header on medium-sized screens and above.
* `text-lg`: A CSS class to set the font size of the header text to 16px.
* `font-medium`: A CSS class to set the font weight of the header text to medium.
* `md:text-sm`: A CSS class to set the font size of the header text to 14px on medium-sized screens and above.
* `lg:gap-6`: A CSS class to add a gap of 6px between the elements in the header on large-sized screens and above.
* `w-full`: A CSS class to make the header a full-width container.

## React Hooks

The `Header` component uses the following React hooks:

* `useState`: A hook to manage the state of the selected language and API.
* `useEffect`: A hook to handle the API selection and language changes.

## Dependencies

The `Header` component depends on the following dependencies:

* `react-router-dom`: A library for managing client-side routing in React applications.
* `i18next`: A library for internationalization and localization in React applications.
* `lucide-react`: A library for using Lucide icons in React applications.
* `@shared/components/ui`: A library for shared UI components in the Fastpay application.