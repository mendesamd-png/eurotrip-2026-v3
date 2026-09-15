# Eurotrip 2026 · v3

Versão independente do diário de Douglas Mendes e Hugo Lima. A v2 permanece intacta em seu repositório e endereço originais.

## Experiência

Abertura cinematográfica em dez cenas, guiada pela rolagem, com navegação por teclado, menu de capítulos, imagens de referência identificadas e alternativa sem movimento. O diário, os capítulos, o kit e a tripulação receberam a revisão editorial de 15/09/2026. A área de bordo cifrada foi preservada. Novas páginas: `/futebol`, `/trabalhos` e `/podcast`.

- Site: https://mendesamd-png.github.io/eurotrip-2026-v3/
- Pacote NotebookLM: [docs/Eurotrip-2026-NotebookLM.zip](docs/Eurotrip-2026-NotebookLM.zip)
- Integração do áudio futuro: [docs/PODCAST-INTEGRACAO.md](docs/PODCAST-INTEGRACAO.md)
- Prompt adaptado: [docs/PROMPT-V3.md](docs/PROMPT-V3.md)
- `src/pages/index.astro`: abertura
- `src/scripts/cinema.ts`: timeline, navegação e acessibilidade
- `src/styles/cinema.css`: direção visual e composição responsiva
- `src/data/trip.ts`: conteúdo revisado da viagem

## Desenvolvimento

```sh
npm ci
npm run dev
npm run build
```

Prévia: http://localhost:4321/eurotrip-2026-v3/

Depuração: acrescente `?cena=0` até `?cena=9` ao endereço. No console, `window.eurotripFilm.goTo(5)` abre San Sebastián.

## Publicação

O código fica na branch `main`. O GitHub Pages publica os arquivos compilados da branch `gh-pages`, na pasta raiz. Para atualizar, compile e valide localmente, depois publique o conteúdo de `dist/` nessa branch, incluindo `.nojekyll`. Atualizar somente `main` não altera o site publicado.

Há um exemplo opcional de automação em `docs/deploy-workflow.example.yml`. Ele não está ativado: a conexão usada na primeira publicação não possui permissão para criar workflows.

Verificação local: `npm run build` seguido de `python3 scripts/check-site.py`.

## Conteúdo e privacidade

Fotografias de referência combinam imagens já usadas na v2, registros de estádios e Richmond com licenças CC BY-SA e imagens das propostas da Rota. Créditos e licenças estão em `/colophon`. A autoria individual da fotografia da Sorgin ainda precisa ser confirmada. Os retratos são os fornecidos no projeto original. Os dados de `private/` não são versionados; o arquivo `public/bordo.enc` continua cifrado e não foi aberto nesta adaptação.
