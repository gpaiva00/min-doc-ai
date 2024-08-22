---
title: apis.ts
description: 'Constantes de APIs para o ambiente UAT'
---
Constantes de APIs para o ambiente UAT
=====================================

Este arquivo contém constantes de APIs para o ambiente UAT.

Constantes
----------

* `APP_ENV`: Define o ambiente como "uat".

APIS
----

A seguir estão listadas as constantes de APIs:

* `APIS`: Um array de objetos que representam as APIs disponíveis.
	+ `name`: O nome da API.
	+ `url`: A URL da API.

Exemplo:
```json
[
  {
    "name": "Autenticação",
    "url": "https://api-doc.fastpays.com.br/uat/autenticacao-openapi.json"
  },
  {
    "name": "Consumer",
    "url": "https://api-doc.fastpays.com.br/uat/consumer-openapi.json"
  },
  ...
]
```
Exportação
----------

O arquivo exporta a constante `APIS`.

```typescript
export { APIS };
```