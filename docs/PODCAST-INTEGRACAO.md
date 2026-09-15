# Publicar um episódio na v3

A página `/podcast/` está pronta, mas não há arquivo de áudio. O estado atual é “Em preparação”, sem botão de reprodução fictício.

1. Receber e revisar o episódio exportado do NotebookLM.
2. Colocar o arquivo real em `public/audio/`, preservando uma extensão compatível com o formato (por exemplo `.mp3`, `.m4a` ou `.wav`). Não basta renomear um formato para outro.
3. Em `src/data/podcast-episodes.json`, localizar o episódio pelo campo `slug` e trocar `"audio": null` pelo caminho real, por exemplo `"audio": "/audio/episodio-01.mp3"`.
4. Atualizar título e descrição, e adicionar à lista `transcript` os parágrafos da transcrição revisada. Ela aparece em um painel expansível.
5. Conferir no navegador: reprodução, pausa, avançar no áudio, download, teclado, celular e transcrição. A página não usa autoplay.
6. Executar `npm run build` e `python3 scripts/check-site.py`. Enviar o código à branch `main` e o conteúdo compilado de `dist/` à branch `gh-pages`, preservando `.nojekyll`. O GitHub Pages publica esta segunda branch. A v2 permanece independente.

O reprodutor usa controles nativos do navegador. O prefixo `/eurotrip-2026-v3` é adicionado automaticamente a caminhos locais. Também é aceito um URL HTTPS direto para um arquivo de áudio; um link de compartilhamento do notebook não é um arquivo de áudio e não funciona como `src` do player.

O texto de atribuição do episódio publicado pressupõe revisão de Douglas e Hugo. Só ativar depois dessa revisão. Não inserir áudio de teste no site publicado.
