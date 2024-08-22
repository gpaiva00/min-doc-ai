---
title: CleanMainDescriptionPlugin.tsx
description: 'Plugin para limpar a descrição principal de uma operação'
---
# CleanMainDescriptionPlugin

O plugin `CleanMainDescriptionPlugin` é responsável por limpar a descrição principal de uma operação, removendo qualquer conteúdo que contenha a marcação de linguagem de diagrama de fluxo (Mermaid).

## Interface

O plugin tem dois interfaces principais: `Info` e `CleanMainDescriptionPluginProps`.

* `Info`: uma interface que define dois métodos: `get` e `setIn`. O método `get` é usado para obter o valor de uma chave específica, enquanto o método `setIn` é usado para setar um valor em uma chave específica.
* `CleanMainDescriptionPluginProps`: uma interface que define um único propriedade, `info`, que é um objeto `Info`.

## Função

A função `CleanMainDescriptionPlugin` é uma função que retorna um objeto com uma propriedade `wrapComponents`. Essa propriedade é uma função que recebe um componente original e retorna um novo componente que é uma wrapper do original.

A função `wrapComponents` é responsável por limpar a descrição principal de uma operação. Ela faz isso verificando se a descrição contém a marcação de linguagem de diagrama de fluxo (Mermaid). Se a descrição contiver a marcação, a função substitui a marcação por um diagrama de fluxo gerado com a ajuda da biblioteca Mermaid.

## Uso

O plugin pode ser usado em qualquer lugar da aplicação onde seja necessário limpar a descrição principal de uma operação. Para usar o plugin, basta importá-lo e passar o objeto `Info` como propriedade para o componente que deseja wrapper.

Exemplo:
```jsx
import { CleanMainDescriptionPlugin } from "@/shared/utils/CleanMainDescriptionPlugin";

const MyComponent = () => {
  const info = {
    get: (key: string) => "Este é um exemplo de descrição",
    setIn: (path: string[], value: string) => info,
  };

  return (
    <CleanMainDescriptionPlugin info={info}>
      <div>Este é um exemplo de conteúdo</div>
    </CleanMainDescriptionPlugin>
  );
};
```