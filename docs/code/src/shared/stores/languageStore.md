---
title: languageStore.ts
description: 'Documentation for the languageStore.ts file'
---
# languageStore.ts

This file contains the implementation of the `languageAtom` atom, which is used to store the current language of the application.

## Overview

The `languageAtom` is an atom that uses the `atomWithStorage` utility from `jotai/utils` to store the current language of the application. The atom is initialized with the default value `"pt-BR"`.

## Code

```typescript
import { atomWithStorage } from "jotai/utils";

const languageAtom = atomWithStorage("@fastForDevs", "pt-BR");

export { languageAtom };
```

## Usage

To use the `languageAtom`, you can import it in your component and use the `useAtom` hook to get the current value of the atom.

```typescript
import { useAtom } from "jotai";
import { languageAtom } from "./languageStore";

function MyComponent() {
  const [language, setLanguage] = useAtom(languageAtom);

  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={() => setLanguage("en-US")}>Change language to English</button>
    </div>
  );
}
```

In this example, the `MyComponent` component uses the `useAtom` hook to get the current value of the `languageAtom` and display it on the screen. The component also includes a button that changes the language to English when clicked.