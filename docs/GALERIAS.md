# Galerias por destino

A abertura e as páginas dos seis destinos usam a seleção de `src/data/galleries.ts`. Cada lista tem seis fotografias e aceita até dez. A ordem da lista define a apresentação.

## Interação

- Troca automática a cada oito segundos, com transição suave.
- Setas para avançar e voltar, incluindo a passagem entre a última e a primeira foto.
- A escolha manual pausa a troca automática. O botão de reprodução a retoma.
- As setas do teclado funcionam quando os controles têm foco.
- A reprodução acompanha a cena visível e pausa ao sair da aba.
- Movimento reduzido inicia a galeria pausada e retira a transição.
- A área de texto mantém sua rolagem independente.

## Fotografias

As fotos são referências anteriores à viagem. Os arquivos das galerias ficam em `public/images/galleries`. As novas imagens do Wikimedia Commons têm autor, página de origem e licença em `src/data/gallery-images.json`. Os demais créditos ficam em `src/data/images.ts`. A página de créditos reúne todos eles.

Para incluir uma foto própria, salve uma versão otimizada no diretório de imagens, cadastre sua descrição e autoria e inclua a chave na lista do destino. As licenças indicadas acompanham as fotografias correspondentes.

## Verificação

A validação de publicação confere o intervalo de seis a dez fotos, imagens duplicadas, descrições, créditos e existência dos arquivos referenciados.
