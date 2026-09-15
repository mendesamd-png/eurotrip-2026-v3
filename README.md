# Eurotrip 2026 · v3

Versão independente do diário de Douglas Mendes e Hugo Lima. A v2 permanece intacta em seu repositório e endereço originais.

## Experiência

Abertura cinematográfica em dez cenas, guiada pela rolagem, com navegação por teclado, menu de capítulos, imagens de referência identificadas e alternativa sem movimento. A antiga página inicial continua em `/diario`; as demais páginas e a área de bordo cifrada foram preservadas.

- Site: https://mendesamd-png.github.io/eurotrip-2026-v3/
- Prompt adaptado: [docs/PROMPT-V3.md](docs/PROMPT-V3.md)
- `src/pages/index.astro`: abertura
- `src/scripts/cinema.ts`: timeline, navegação e acessibilidade
- `src/styles/cinema.css`: direção visual e composição responsiva
- `src/data/trip.ts`: conteúdo original da viagem

## Desenvolvimento

```sh
npm ci
npm run dev
npm run build
```

Prévia: http://localhost:4321/eurotrip-2026-v3/

Depuração: acrescente `?cena=0` até `?cena=9` ao endereço. No console, `window.eurotripFilm.goTo(5)` abre San Sebastián.

## Publicação

O código fica na branch `main`. O GitHub Pages publica os arquivos compilados da branch `gh-pages`, pasta raiz. Alterações no código precisam de nova compilação e atualização da branch de publicação. Não há publicação automática a cada commit nesta versão.

## Conteúdo e privacidade

Fotografias de referência são as imagens já usadas na v2, com créditos em `/colophon`. Os retratos são os fornecidos no projeto original. Os dados de `private/` não são versionados; o arquivo `public/bordo.enc` continua cifrado e não foi aberto nesta adaptação.
