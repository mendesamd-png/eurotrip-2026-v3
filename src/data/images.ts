// Imagens de terceiros (Unsplash, licença Unsplash). Hotlink via images.unsplash.com,
// como a licença permite. Todas creditadas em /colophon. Substituir por fotos
// próprias conforme o material da viagem chegar.

import { u } from './url';
import galleryImages from './gallery-images.json';
export type Img = {
  id: string; // photo-xxxx
  alt: string;
  author: string; // handle Unsplash
  authorName?: string;
  src?: string;
  credit?: string;
  source?: string;
  license?: string;
  tone?: 'solar';
};

export const unsplash = (img: Img, w = 1800, q = 72) =>
  img.src ? u(img.src) : `https://images.unsplash.com/${img.id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  ...galleryImages,
  oldTraffordJogo: { id: 'old-trafford-jogo', src: '/images/football/old-trafford.jpg', alt: 'Old Trafford lotado à noite, visto da Stretford End em 2023', author: 'Joris van Rooden', credit: 'Joris van Rooden · Wikimedia Commons · CC BY-SA 4.0 · enquadramento recortado', source: 'https://commons.wikimedia.org/wiki/File:Old_Trafford,_view_from_Stretford_End_2.jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' },
  richmond: { id: 'richmond-pub', src: '/images/football/richmond.jpg', alt: 'Fachada branca do Prince’s Head em Richmond, fotografia de 2017', author: 'Ewan-M', credit: 'Ewan-M · Wikimedia Commons · CC BY-SA 2.0 · enquadramento recortado', source: 'https://commons.wikimedia.org/wiki/File:Prince%27s_Head,_Richmond,_TW9.jpg', license: 'https://creativecommons.org/licenses/by-sa/2.0/' },
  stAndrews: { id: 'st-andrews', src: '/images/football/st-andrews.jpg', alt: 'Gramado e arquibancadas azuis de St Andrew’s, em 2017', author: 'Roger Cornfoot', credit: 'Roger Cornfoot · Geograph / Wikimedia Commons · CC BY-SA 2.0 · enquadramento recortado', source: 'https://commons.wikimedia.org/wiki/File:St_Andrews_Stadium,_Birmingham_-_geograph.org.uk_-_5248635.jpg', license: 'https://creativecommons.org/licenses/by-sa/2.0/' },
  fumiAtelier: { id: 'fumi-atelier', src: '/images/work/fumi-atelier.jpg', alt: 'Hugo França e Max Lamb trabalhando no ateliê em Trancoso', author: 'Rota', credit: 'Imagem do material da Rota para a FUMI · registro anterior à viagem', source: 'https://rota-fumi.netlify.app/' },
  sorginCampo: { id: 'sorgin-campo', src: '/images/work/sorgin-campo.jpg', alt: 'A Sorgin Gallery vista do campo, em San Sebastián', author: 'Material Sorgin', credit: 'Imagem da proposta Rota / Sorgin · autoria fotográfica a confirmar', source: 'https://rota-sorgin.netlify.app/' },
  prologo: { id: 'photo-1542382248-cc0aa645262c', alt: 'Cidade vista de cima, à noite, pela janela do avião', author: 'dulhiier' },
  londres: { id: 'photo-1655704554443-9957eeaaaba6', src: '/images/cities/londres-solar.jpg', alt: 'Sol da manhã sobre Westminster, Big Ben e a ponte, com céu azul e um ônibus vermelho', author: 'N R', credit: 'N R · Unsplash · imagem de referência', source: 'https://unsplash.com/photos/a-bridge-over-a-river-with-a-clock-tower-in-the-background-pF4qfacfDuA', license: 'https://unsplash.com/license', tone: 'solar' },
  londresRua: { id: 'photo-1633382599869-313515a421a4', alt: 'Guarda-chuva numa rua molhada de Londres', author: 'devsnice' },
  londresNoite: { id: 'photo-1664695484183-c15c18786a21', alt: 'Rua molhada à noite, Londres', author: 'thenowtime' },
  birmingham: { id: 'photo-1719669753130-38c2245c014b', src: '/images/cities/birmingham-solar.jpg', alt: 'Barcos e fachadas coloridas nos canais de Birmingham em um dia de sol, com reflexos e céu azul', author: 'Lulu Black', credit: 'Lulu Black · Unsplash · imagem de referência', source: 'https://unsplash.com/photos/a-body-of-water-filled-with-lots-of-boats-tsTQuqKr4fk', license: 'https://unsplash.com/license', tone: 'solar' },
  manchester: { id: 'photo-1647629317640-fb319a698aa6', src: '/images/galleries/photo-1647629317640-fb319a698aa6.webp', alt: 'Tijolo vermelho numa esquina do Northern Quarter', author: 'supergios' },
  oldTrafford: { id: 'photo-1642763907630-17bad0853f15', src: '/images/galleries/photo-1642763907630-17bad0853f15.webp', alt: 'Old Trafford vazio, assentos vermelhos e gramado', author: 'harrywwalsh' },
  oldTraffordFachada: { id: 'photo-1623607915241-a3151d59a9c8', src: '/images/galleries/photo-1623607915241-a3151d59a9c8.webp', alt: 'Fachada de Old Trafford', author: 'callacrap' },
  liverpool: { id: 'photo-1505833779582-e28ba8f922f8', alt: 'Albert Dock, Liverpool', author: 'marcuslcramer' },
  bilbao: { id: 'photo-1559211568-8ce901de931b', alt: 'Museu Guggenheim Bilbao sob céu branco', author: 'avusnex' },
  sanSebastian: { id: 'photo-1553455010-bdb488ac12e5', src: '/images/galleries/photo-1553455010-bdb488ac12e5.webp', alt: 'Baía de La Concha, San Sebastián', author: 'raulcachophoto' },
  sanSebastianRua: { id: 'photo-1675529734661-ef763f1a51be', src: '/images/galleries/photo-1675529734661-ef763f1a51be.webp', alt: 'Pessoas caminhando à beira-mar em San Sebastián', author: 'mikhail_volkov' },
  funchal: { id: 'photo-1674333362725-84e9996aa6fb', src: '/images/galleries/photo-1674333362725-84e9996aa6fb.webp', alt: 'Funchal visto do alto, cidade e mar', author: 'sofiavilaflor' },
  funchalMar: { id: 'photo-1725380055922-2454eb809737', src: '/images/galleries/photo-1725380055922-2454eb809737.webp', alt: 'Banhistas no mar em Funchal', author: 'mickkirch' },
  areeiro: { id: 'photo-1686026368380-abb0b5d24b9c', src: '/images/galleries/photo-1686026368380-abb0b5d24b9c.webp', alt: 'Caminhantes acima das nuvens no Pico do Areeiro', author: 'mylifeart' },
  areeiroEstrada: { id: 'photo-1585308013711-6b134e2c6a52', src: '/images/galleries/areeiro-road.webp', alt: 'Estrada de montanha ao pôr do sol, Madeira', author: 'timroosjen' },
  fanal: { id: 'photo-1762705003217-7bdc7caaacf7', src: '/images/galleries/photo-1762705003217-7bdc7caaacf7.webp', alt: 'Loureiros retorcidos na neblina do Fanal', author: 'johnny_slav' },
  portoMoniz: { id: 'photo-1636964518395-ef7b9eb1cbb5', src: '/images/galleries/photo-1636964518395-ef7b9eb1cbb5.webp', alt: 'Vila à beira-mar na costa norte da Madeira', author: 'partyparrotgreg' },
  portoMonizOndas: { id: 'photo-1487613970413-2ef9ab51ecbd', src: '/images/galleries/photo-1487613970413-2ef9ab51ecbd.webp', alt: 'Ondas quebrando na costa vulcânica', author: 'ab220' },
  saoLourenco: { id: 'photo-1583570986513-be4e73a452b3', src: '/images/galleries/photo-1583570986513-be4e73a452b3.webp', alt: 'Ponta de São Lourenço, terra vulcânica e mar', author: 'kefiijrw' },
  kitCamera: { id: 'photo-1697311622332-184b7bb19a46', alt: 'Câmera Sony sobre tecido', author: 'mattmutluu' },
  kitLente: { id: 'photo-1617468264204-92588bd6485a', alt: 'Lente de câmera', author: 'photofeaver' },
  parisSacreCoeur: { id: 'photo-1751634851652-646db47de447', alt: 'Basílica do Sacré-Cœur em Paris, com a escadaria e o céu claro', author: 'mbuff', authorName: 'Sung Jin Cho', credit: 'Sung Jin Cho (@mbuff) · Unsplash', source: 'https://unsplash.com/photos/the-sacre-coeur-basilica-in-paris-KIvp_ZwY7ys', license: 'https://unsplash.com/license' },
  parisAlexandre: { id: 'photo-1758066277905-ea3fd91a864a', alt: 'Ponte Alexandre III sobre o Sena, em Paris', author: 'lupan_g', authorName: 'GHEORGHE LUPAN', credit: 'GHEORGHE LUPAN (@lupan_g) · Unsplash', source: 'https://unsplash.com/photos/alexandre-iii-bridge-in-paris-over-the-seine-river-xVj6PmizDcg', license: 'https://unsplash.com/license' },
  parisCafe: { id: 'photo-1763932430062-db9b688b8881', alt: 'Esquina de rua com café e calçada de paralelepípedos em Paris', author: 'benjamin_photo_lab', authorName: 'Benjamin Chambon', credit: 'Benjamin Chambon (@benjamin_photo_lab) · Unsplash', source: 'https://unsplash.com/photos/parisian-street-corner-with-a-cafe-and-cobblestone-street-YyPBZHKs11o', license: 'https://unsplash.com/license' },
  parisEiffel: { id: 'photo-1743065272129-5e261bad0c46', alt: 'Torre Eiffel alta entre nuvens', author: 'ericbarbeau', authorName: 'Eric BARBEAU', credit: 'Eric BARBEAU (@ericbarbeau) · Unsplash', source: 'https://unsplash.com/photos/the-eiffel-tower-reaches-high-into-the-cloudy-sky-RyRuudzKonE', license: 'https://unsplash.com/license' },
  parisSeine: { id: 'photo-1477089884677-c596568bd120', alt: 'Ponte iluminada sobre o Sena, em Paris', author: 'anthonydelanoix', authorName: 'Anthony DELANOIX', credit: 'Anthony DELANOIX (@anthonydelanoix) · Unsplash', source: 'https://unsplash.com/photos/illuminated-bridge-on-seine-pt4j4bGSPmw', license: 'https://unsplash.com/license' },
  parisEiffelBaixo: { id: 'photo-1722969560476-1e8984e24261', alt: 'Torre Eiffel vista de baixo', author: 'bozh_ntu', authorName: 'Bo Zhang', credit: 'Bo Zhang (@bozh_ntu) · Unsplash', source: 'https://unsplash.com/photos/a-view-of-the-eiffel-tower-from-below-a0S6vx85DiE', license: 'https://unsplash.com/license' },
  trilhaPicoRuivo: { id: 'photo-1661517158076-cb8ed5343c8a', alt: 'Pôr do sol sobre uma montanha, Pico Ruivo, Madeira', author: 'travelalphawolf', authorName: 'Julio Wolf', credit: 'Julio Wolf (@travelalphawolf) · Unsplash', source: 'https://unsplash.com/photos/a-sunset-over-a-mountain-SUM29zNGjuU', license: 'https://unsplash.com/license' },
  trilhaBalcoes: { id: 'photo-1535502841082-b76eedcb990a', alt: 'Floresta verde da Laurissilva em Ribeiro Frio, Madeira', author: 'bartzimny', authorName: 'Bart Zimny', credit: 'Bart Zimny (@bartzimny) · Unsplash', source: 'https://unsplash.com/photos/green-trees-xzaR7lEA1E4', license: 'https://unsplash.com/license' },
  trilhaRisco: { id: 'photo-1699694927257-89ac5ce509a1', alt: 'Cascata do Risco, Madeira, ponto de partida compartilhado com a Levada das 25 Fontes', author: 'danieljschwarz', authorName: 'Daniel J. Schwarz', credit: 'Daniel J. Schwarz (@danieljschwarz) · Unsplash', source: 'https://unsplash.com/photos/a-waterfall-in-the-middle-of-a-foggy-forest-w4KMb33fg3w', license: 'https://unsplash.com/license' },
} satisfies Record<string, Img>;

export type ImageKey = keyof typeof images;
