# Prompt de criação — Eurotrip 2026 · v3

Adapte o projeto existente Eurotrip 2026 para uma terceira versão independente. Preserve integralmente a v2: trabalhe em outra pasta e publique em outro repositório e endereço. Reaproveite Astro, os dados, as fotografias, os capítulos, o mapa, os créditos e as páginas existentes.

## Intenção

Crie um diário de viagem pessoal com uma abertura cinematográfica interativa. O protagonista é o caminho percorrido por Douglas Mendes e Hugo Lima: Inglaterra, País Basco e Madeira. O público é nossa família e nossos amigos. A sensação deve ser a de receber uma carta de longe, entrar em um filme e encontrar pessoas conhecidas. Escreva em português brasileiro, com afeto, humor discreto e a voz já presente no diário.

A inspiração é o ritmo e o cuidado visual de um filme de produto premium. Traduza a câmera, as macros, a vista explodida e a remontagem para paisagens, detalhes do itinerário, a rota que se desenha e retratos da tripulação. Os efeitos precisam ajudar a contar a viagem.

## Experiência

A página inicial acontece em um palco fixo de tela inteira. A rolagem avança e retrocede uma sequência contínua, com interpolação suave e leve paralaxe. Use rolagem nativa como entrada para permitir trackpad, roda do mouse e toque. Não prenda a pessoa em uma animação que precise terminar. Mantenha controles de anterior/próximo, atalhos por cena e acesso permanente ao diário e aos capítulos.

A abertura é o convite; as páginas internas continuam disponíveis para leitura normal. A pessoa deve poder entrar direto no capítulo de Londres ou no mapa, sem atravessar a apresentação. Preserve todas as rotas anteriores dentro do novo endereço e mantenha a antiga página inicial como /diario.

## Direção de arte

Fotografia ocupando o quadro, tipografia grande e leve, enquadramentos precisos, bastante espaço para respirar. Paleta estrutural em preto e cinzas neutros; as fotografias conservam cor contida. Alterne cenas escuras e claras com dissoluções simples. Use as fontes já instaladas, com títulos leves e metadados em mono. Varie a composição: paisagem inteira, fotografia emoldurada, diagrama e retratos.

Evite aparência de catálogo turístico, painel administrativo, blocos comerciais, preços ou chamadas de venda. Não use borrões de movimento, raios, flashes agressivos ou efeitos que prejudiquem a leitura. Um cursor complementar discreto pode acompanhar o mouse sem remover o cursor nativo. Inclua um trilho mínimo de progresso.

## Sequência de dez momentos

1. **O começo.** Madeira acima das nuvens, título “Uma viagem. Seis capítulos.” e a assinatura de Douglas e Hugo. A primeira tela já oferece uma imagem forte e orientação clara para continuar. Texto pessoal de apresentação, sem som automático.
2. **A travessia.** Dissolução para cinza claro. Um desenho da rota ganha sua linha progressivamente: saída de São Paulo, Londres, Birmingham, Manchester, San Sebastián, Funchal e Ponta Delgada. Identifique o diagrama como esquema sem escala e ofereça o mapa geográfico completo.
3. **Londres.** Fotografia ampla e tipografia monumental. “A cidade segue. A gente chega.” Datas, texto existente e acesso ao capítulo.
4. **Birmingham.** Um respiro claro, fotografia enquadrada e composição mais íntima. “Uma pausa. Um amigo.” Preserve a história da escala com afeto.
5. **Manchester.** Retorno à fotografia em tela inteira. “Dias de tijolo. Noites de música.” Reaproveite o roteiro e seu texto, sem inventar experiências.
6. **San Sebastián.** Nova pausa clara. “A curva do caminho.” A mudança de rota é o ponto de virada da narrativa.
7. **Funchal.** A paisagem toma a tela. “Do concreto às nuvens.” O foco é a passagem das cidades para a Madeira.
8. **Ponta Delgada.** “Mais ao norte. Mais devagar.” Deixe explícito que é Ponta Delgada na costa norte da Madeira, conforme o projeto, e não a cidade dos Açores.
9. **Nós dois.** Retratos existentes de Douglas e Hugo, com nomes e funções. Composição de fotografias pessoais e link para a tripulação.
10. **Continua.** Uma estrada na Madeira, título “Vem com a gente.” e convite para abrir o diário ou consultar a jornada. Permita rever a abertura. Antes do embarque, mostre a contagem de dias com base na data existente, 16/10/2026 às 23:50 em São Paulo.

## Conteúdo e integridade

Use os dados do repositório como fonte para nomes, datas, cidades, relatos e fotografias. Não invente reservas, atrações visitadas, memórias, números ou depoimentos. A viagem ainda está planejada: não escreva como se já tivesse acontecido. Identifique fotografias de terceiros como imagens de referência e preserve os créditos. Preserve a proteção existente da área de bordo; não abra nem exponha seu conteúdo privado.

## Implementação e qualidade

Implemente a experiência de verdade no projeto existente. Prefira CSS, SVG para o diagrama e JavaScript leve. Acrescente Three.js somente se houver uma necessidade visual concreta que justifique seu peso. Carregue a imagem inicial com prioridade e prepare as próximas conforme a navegação avança. Evite trabalho contínuo de animação quando a tela está parada.

Garanta leitura e controles funcionais em desktop, janelas quadradas e celular. Respeite a preferência de reduzir movimento, oferecendo fluxo de leitura sem paralaxe. Ofereça uma alternativa sem JavaScript, foco visível, navegação por teclado, rótulos acessíveis e um menu com fechamento por Escape. Não deixe cenas ocultas receberem foco.

Inclua um controle de depuração para saltar às dez cenas. Abra a versão final no navegador, examine cada cena, teste os links e o menu em desktop e celular, corrija sobreposições e imagens quebradas e execute a compilação de produção. Não prometa uma taxa de quadros sem medi-la. Publique somente a v3, em endereço separado, e entregue o link da nova versão e este prompt.

## Revisão editorial — 15/09/2026

Preservar a v3 independente. Dar protagonismo à vontade de ver o Manchester United em Old Trafford e explorar a cultura do futebol britânico. Gustavo Barros é o amigo visitado em Birmingham; St Andrew’s, Anfield e os estádios de Londres são possibilidades, não reservas presumidas. Hugo torce pelo Arsenal: distinguir Emirates de Wembley. Conectar Ted Lasso a Richmond e Prince’s Head, explicando Selhurst Park / Crystal Palace como Nelson Road da ficção em outro ponto da cidade.

Usar tom leve, divertido e poético para familiares e amigos. Preferir encontros, curiosidade e detalhes concretos a sarcasmo, publicidade de turismo ou biografias inventadas. Remover o relato de Lisboa como destino descartado; mantê-la somente nas conexões dos voos. Combinar futebol com cinema, arte e contemplação da natureza.

Contextualizar FUMI e Sorgin pelas propostas fornecidas. FUMI: residência de Hugo França e Max Lamb em Trancoso, com etapa londrina proposta para 18–21/10. Sorgin: voz de Miriam Badaró e relação entre obras, espaço e paisagem; janela proposta 28–31/10. Não anunciar essas janelas como inaugurações nem reproduzir detalhes comerciais na narrativa.

Equipamentos informados: Sony FX3, A7V, G Master 24–70mm, 70–200mm, 50mm f/1.2 e Insta360 Ace Pro 2. Mostrar a lista do Hugo sem somar novamente itens comuns. Não inventar modelos, pesos ou valores.

Usar fotografias reais com fonte e licença, distinguindo referências anteriores à viagem de registros próprios. Preparar página de podcast para o áudio futuro do NotebookLM, com estado honesto sem arquivo, reprodutor nativo sem autoplay quando o episódio estiver pronto e espaço para transcrição. Manter material de pesquisa em docs/notebooklm.
