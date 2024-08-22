---
title: vite-env.d.ts
description: 'Configuração de ambiente para o Vite'
---
# vite-env.d.ts

Este arquivo é uma configuração de ambiente para o Vite, um framework de desenvolvimento web.

## Interfaces

O arquivo define duas interfaces: `ImportMetaEnv` e `ImportMeta`.

### ImportMetaEnv

A interface `ImportMetaEnv` define a propriedade `VITE_APP_ENV`, que é uma string que representa o ambiente de aplicação.

### ImportMeta

A interface `ImportMeta` define a propriedade `env`, que é um objeto que implementa a interface `ImportMetaEnv`.

## Referências

O arquivo utiliza a referência `/// <reference types="vite/client" />` para importar as tipos do Vite.