---
title: routes.tsx
description: 'Define as rotas da aplicação'
---
# routes.tsx

Este arquivo define as rotas da aplicação utilizando o React Router.

## Importações

* `Route`, `BrowserRouter` e `Routes` do pacote `react-router-dom`
* `Hero` e `Home` de `@/pages/Hero` e `@/pages/Home`, respectivamente

## Função AppRoutes

A função `AppRoutes` retorna um componente `Router` que contém um componente `Routes`. O componente `Routes` define as rotas da aplicação.

### Rotas

* `Route` com path `/` e elemento `<Hero>`
* `Route` com path `/docs` e elemento `<Home>`

### Exportação

A função `AppRoutes` é exportada como um módulo.

Note: This documentation is generated based on the provided file content and structure. If you need any changes or modifications, please let me know!