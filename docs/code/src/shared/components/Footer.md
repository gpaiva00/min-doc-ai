Here is the generated documentation in Markdown format:

---
title: Footer.tsx
description: 'A component that renders the footer section of the application'
---

The `Footer` component is a reusable UI component that renders the footer section of the application. It is designed to be easily customizable and can be used across multiple pages.

### Props

The `Footer` component accepts a single prop, `translation`, which is an instance of `TFunction` from `i18next`. This prop is used to render the footer text in the desired language.

### Usage

To use the `Footer` component, simply import it and pass the `translation` prop:
```jsx
import { Footer } from './Footer';

const App = () => {
  return (
    <div>
      <Footer translation={t} />
    </div>
  );
};
```
### Code

Here is the code for the `Footer` component:
```jsx
import { TFunction } from 'i18next';

interface FooterProps {
  translation: TFunction;
}

function Footer({ translation: t }: FooterProps) {
  return (
    <footer className="md:mt-0 mt-4 bg-muted/40">
      <div className="flex justify-center py-4 text-sm text-gray-500">
        <p className="font-semibold">
          {t("footerText")}{" "}
          <a
            href="https://fastpays.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Fastpay
          </a>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
```
I hope this helps! Let me know if you have any questions or need further clarification.