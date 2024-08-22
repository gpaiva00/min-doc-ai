---
title: useLanguage
description: 'Hook para lidar com a linguagem do aplicativo'
---
UseLanguage é um hook que fornece informações sobre a linguagem atual do aplicativo e permite mudanças na linguagem.

## Importação

O hook é importado da pasta `src/shared/hooks` e depende de outras bibliotecas como `i18n`, `useAtom` e `useTranslation`.

```typescript
import i18n from "@/i18n";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { languageAtom } from "@/shared";
```

## Função useLanguage

A função `useLanguage` é responsável por gerenciar a linguagem do aplicativo. Ela utiliza o estado `languageAtom` e o hook `useTranslation` para obter a linguagem atual e a função para mudanças na linguagem.

```typescript
function useLanguage() {
  const [language, setLanguage] = useAtom(languageAtom);
  const { t } = useTranslation();

  function onChangeLanguage(lang: string) {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }

  return {
    language,
    t,
    onChangeLanguage,
  };
}
```

## Retorno

O hook `useLanguage` retorna um objeto com as seguintes propriedades:

* `language`: a linguagem atual do aplicativo
* `t`: a função para traduzir mensagens
* `onChangeLanguage`: a função para mudanças na linguagem

## Uso

O hook `useLanguage` pode ser usado em qualquer componente do aplicativo para lidar com a linguagem. Por exemplo:

```typescript
import { useLanguage } from "@/shared/hooks/useLanguage";

function MyComponent() {
  const { language, t, onChangeLanguage } = useLanguage();

  return (
    <div>
      <p>{t("hello")}</p>
      <button onClick={() => onChangeLanguage("pt-BR")}>Mudar para português</button>
    </div>
  );
}
```

Espero que isso ajude! Se tiver alguma dúvida ou precisar de mais informações, sinta-se à vontade para perguntar.