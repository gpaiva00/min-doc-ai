Here is the generated documentation in Markdown format:

---
title: useQueryState
description: 'Hook para gerenciar o estado da query'
---

# useQueryState

Hook para gerenciar o estado da query.

## Importação

```jsx
import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
```

## Tipo de dados

### QueryState

Tipo para representar o estado da query.

### SetQueryFunction

Tipo para a função de atualização do estado.

## Função

```jsx
function useQueryState(
  initialState: QueryState = {},
): [QueryState, SetQueryFunction] {
  // ...
}
```

## Descrição

O hook `useQueryState` é responsável por gerenciar o estado da query. Ele utiliza o estado inicial fornecido e o parsea a partir da URL atual. Além disso, ele também atualiza o estado da query quando o usuário navega para uma nova página.

## Parâmetros

### initialState

Parâmetro opcional que define o estado inicial da query.

## Retorno

O hook `useQueryState` retorna um array com dois elementos:

### queryState

O estado atual da query.

### setQuery

A função de atualização do estado da query.

## Uso

```jsx
import { useQueryState } from "./useQueryState";

function MyComponent() {
  const [queryState, setQuery] = useQueryState();

  // ...
}
```

## Notas

* O hook `useQueryState` utiliza o estado inicial fornecido e o parsea a partir da URL atual.
* Ele também atualiza o estado da query quando o usuário navega para uma nova página.
* O estado da query é armazenado no estado do componente.