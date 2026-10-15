# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é

**CentralHS**: portal estático da Health & Safety, uma tela única com cards que linkam para os
sistemas internos (DataCoreHS, ControlHS, ChamadosHS, GrowthHS, GestorHS, TaskHS, HelpHS,
TalentHS, HealthScore), todos em subdomínios de `healthsafetytech.com`. Não tem backend, não tem
roteamento, não tem estado, não chama API.

Stack: React 19 + TypeScript + Vite 7 (plugin SWC) + Tailwind **3**. O `README.md` é o boilerplate do template do Vite e não descreve o projeto.

## Comandos

```bash
npm run dev       # servidor de desenvolvimento (Vite)
npm run build     # tsc -b (checagem de tipos) + vite build -> dist/
npm run lint      # eslint .
npm run preview   # serve o dist/ localmente
docker compose up --build   # build de produção em nginx, porta 80
```

Não há testes. O `tsconfig.app.json` é `strict` com `noUnusedLocals`/`noUnusedParameters`, então
variável ou import sobrando quebra o `npm run build`.

## Arquitetura

- **`src/App.tsx`** concentra tudo: o array `systems` (a fonte de dados dos cards), o layout
  (header, grid, footer) e as animações CSS em um bloco `<style>` inline no fim do componente.
  As classes `animate-fade-in*`, `animate-logo-pulse` e `delay-1000` vêm desse bloco, **não** do
  Tailwind.
- **`src/components/SystemCard.tsx`** renderiza um card. O card vira placeholder desabilitado
  (`div` sem link, opaco) quando **`name === 'Em breve'`**: a checagem é pelo nome, não por um
  campo próprio.
- **`src/types/system.ts`** define a interface `System` (`id`, `name`, `description`, `url`, `icon`).

### Adicionar ou trocar um sistema

Editar o array `systems` em `App.tsx`. O normal é substituir um dos placeholders "Em breve" em
vez de acrescentar item, porque a grade tem 4 colunas (`lg`) e a página é `h-screen` com
`overflow-hidden`: linhas extras podem ser cortadas em vez de rolar.

O `icon` de cada sistema é o **logo com o nome escrito** (símbolo H&S + "NomeHS"), em
`src/assets/sistemas/<sistema>.webp`, e o card mostra esse logo **no lugar** do título. Só o
placeholder "Em breve" usa o `logoIcon` genérico com o título em texto. Os originais em alta
(`src/assets/*-Logo.png`, 1792×1008 com muita borda transparente) passam por `magick <arquivo>
-trim +repage -resize x160 -quality 90 sistemas/<sistema>.webp` antes de entrar.

## Deploy

`Dockerfile` multi-stage: `node:20-alpine` faz o `npm run build` e `nginx:alpine` serve o `dist/`.
⚠️ A linha que copia o `nginx.conf` está **comentada** no Dockerfile, então gzip, headers de
segurança e regras de cache desse arquivo **não** valem em produção, que roda com a config padrão
do nginx.
