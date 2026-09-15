import stories from './stories.json';
import type { ImageKey } from './images';

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------

export type Place = {
  name: string;
  category:
    | 'cinema' | 'café' | 'loja' | 'pub' | 'museu' | 'mirante' | 'trilha'
    | 'venue' | 'restaurante' | 'mercado' | 'trabalho' | 'base' | 'aeroporto' | 'estádio';
  blurb: string;
  lat: number;
  lng: number;
  query?: string; // consulta para o Google Maps quando o nome sozinho não basta
};

export type Chapter = {
  slug: string;
  act: 'Prólogo' | 'Ato I' | 'Ato II' | 'Ato III' | 'Epílogo';
  beat: string; // função dramática (jornada do herói)
  number: string; // 00..06
  title: string;
  city: string;
  country: string;
  flag: string;
  dates: string;
  nights: number;
  base: string;
  transport: string;
  accent: string;
  hero: ImageKey;
  gallery: ImageKey[];
  lead: string;
  paragraphs: string[];
  quote: string;
  film: { sentence: string; titles: string[] };
  places: Place[];
  keywords: string[];
  soundtrack: { title: string; artist: string; reason: string }[];
  center: { lat: number; lng: number; zoom: number };
  next?: string;
};

export type Day = {
  n: number;
  date: string; // 2026-10-16
  weekday: string;
  chapter: string; // slug
  city: string;
  intensity: 'leve' | 'médio' | 'pesado' | 'trânsito';
  title: string;
  morning?: string;
  afternoon?: string;
  night?: string;
  fixed?: string; // compromisso fixo com hora
  status?: 'confirmado' | 'esboço';
};

// ---------------------------------------------------------------------------
// Capítulos
// ---------------------------------------------------------------------------

export const chapters: Chapter[] = [
  {
    slug: 'partida',
    act: 'Prólogo',
    beat: 'O chamado',
    number: '00',
    title: 'Partida',
    city: 'São Paulo → Londres',
    country: 'Brasil',
    flag: '🇧🇷',
    dates: '16 → 17 out',
    nights: 1,
    base: 'Poltrona 39K, ou parecida',
    transport: 'LATAM LA 8084 · GRU 23:50 → LHR',
    accent: '#3A3A3E',
    hero: 'prologo',
    gallery: ['prologo'],
    lead: "Na mochila vão câmeras. Na cabeça, arquibancadas, encontros e a expectativa de começar uma nova história.",
    paragraphs: stories['partida'].sections.flatMap(section => section.paragraphs),
    quote: "A gente atravessa o oceano. Vocês vêm nas histórias.",
    film: {
      sentence: 'Alice nas Cidades inspira o olhar para o percurso, as imagens e os encontros. Lost in Translation acrescenta a sensação de chegar e começar a reconhecer um lugar.',
      titles: ['Alice in den Städten (Wim Wenders, 1974)', 'Lost in Translation (Sofia Coppola, 2003)'],
    },
    places: [
      { name: 'Aeroporto de Guarulhos (GRU)', category: 'aeroporto', blurb: 'Embarque 16/10 às 23:50. Revisar documentos e orientações da companhia antes do embarque.', lat: -23.4356, lng: -46.4731 },
      { name: 'Heathrow (LHR)', category: 'aeroporto', blurb: 'Pouso em 17/10 às 15:05. ETA aprovado no passaporte, Elizabeth line até o centro.', lat: 51.47, lng: -0.4543 },
    ],
    keywords: ['ENCONTROS', 'FUTEBOL', 'CINEMA', 'ARTE', 'NATUREZA', 'AMIZADE', 'TRAVESSIA'],
    soundtrack: [
      { title: 'Alice', artist: 'Can', reason: 'Motor de estrada antes de qualquer estrada.' },
      { title: 'Só Tinha de Ser com Você', artist: 'Elis & Tom', reason: 'A última música brasileira antes do modo avião.' },
    ],
    center: { lat: 14, lng: -22, zoom: 3 },
    next: 'londres',
  },
  {
    slug: 'londres',
    act: 'Ato I',
    beat: 'O mundo comum',
    number: '01',
    title: 'Londres',
    city: 'Londres',
    country: 'Reino Unido',
    flag: '🇬🇧',
    dates: '17 → 22 out',
    nights: 5,
    base: 'Westminster, Page Street',
    transport: 'Tube + a pé',
    accent: '#3A4148',
    hero: 'londres',
    gallery: ['londres', 'richmond', 'fumiAtelier', 'londresNoite'],
    lead: "Londres tem cinema, arte e futebol no mesmo mapa. Hugo leva o Arsenal no coração; a gente leva vontade de descobrir o resto.",
    paragraphs: stories['londres'].sections.flatMap(section => section.paragraphs),
    quote: "Uma cidade inteira lá fora. E tanta coisa boa para trazer para perto.",
    film: {
      sentence: 'As referências de Londres passam pela atenção de Cuarón ao espaço urbano e pelo uso de cor e memória de Edgar Wright. Queremos observar a cidade com essa curiosidade por luz, movimento e rostos.',
      titles: ['Children of Men (Alfonso Cuarón, 2006)', 'Naked (Mike Leigh, 1993)', 'We Need to Talk About Kevin (Lynne Ramsay, 2011)', 'Last Night in Soho (Edgar Wright, 2021)'],
    },
    places: [
      { name: 'Base · Westminster, Page Street', category: 'base', blurb: 'Cinco noites a dez minutos a pé do Tâmisa. Tate Britain na esquina, Pimlico e St James\'s Park no raio de caminhada.', lat: 51.4925, lng: -0.131, query: 'Page Street, London SW1P 4EX' },
      { name: 'Gallery FUMI', category: 'trabalho', blurb: 'Referência do projeto em Londres. A janela proposta com Max Lamb é 18–21/10; data e local da diária a alinhar.', lat: 51.5093, lng: -0.143, query: 'Gallery FUMI, 2-3 Hay Hill, London' },
      { name: 'BFI Southbank', category: 'cinema', blurb: 'Cinemateca britânica na beira do rio. Programação para escolher uma boa sessão quando a agenda permitir.', lat: 51.5069, lng: -0.1153 },
      { name: 'Prince Charles Cinema', category: 'cinema', blurb: 'Cinema em Leicester Square para descobrir uma sessão fora do roteiro.', lat: 51.5116, lng: -0.1301 },
      { name: 'Monmouth Coffee', category: 'café', blurb: 'Covent Garden. Caro demais e mesmo assim salva a manhã.', lat: 51.5136, lng: -0.1263, query: 'Monmouth Coffee Covent Garden' },
      { name: 'Park Cameras', category: 'loja', blurb: 'Bond Street. Olhar lentes e conversar sobre fotografia.', lat: 51.5142, lng: -0.1425, query: 'Park Cameras London' },
      { name: 'Brick Lane', category: 'mercado', blurb: 'Domingo de leste: vintage, food hall, pôster rasgado na parede.', lat: 51.5215, lng: -0.0717 },
      { name: 'Broadway Market', category: 'mercado', blurb: 'Sábado em Hackney. Café specialty na esquina e gente carregando flores no frio.', lat: 51.5365, lng: -0.0616 },
      { name: 'Tate Modern', category: 'museu', blurb: 'Coleção permanente gratuita na antiga usina. Millennium Bridge e Bankside até Borough Market.', lat: 51.5076, lng: -0.0994 },
      { name: 'Tate Britain', category: 'museu', blurb: 'A cinco minutos da base. Turner de manhã, antes de a cidade acordar.', lat: 51.491, lng: -0.1278 },
      { name: 'Ronnie Scott\'s', category: 'venue', blurb: 'Jazz histórico em Soho. Comprar antecipado, chegar antes, deixar a câmera quieta.', lat: 51.5134, lng: -0.1318 },
      { name: 'Bussey Building', category: 'venue', blurb: 'Peckham. Galerias e rooftop, vista cinematográfica quando a noite cai cedo.', lat: 51.4707, lng: -0.0691, query: 'Bussey Building Peckham' },
    ],
    keywords: ['CONCRETO', 'SOUTHBANK', 'CINEMA', 'PUBS', 'TUBE', 'GRIS', 'HACKNEY', 'CAFÉ CARO', 'MAYFAIR', 'MAX LAMB', 'DOCUMENTAL'],
    soundtrack: [
      { title: 'Disorder', artist: 'Joy Division', reason: 'O peso cinza certo para chegar.' },
      { title: 'Archangel', artist: 'Burial', reason: 'Londres noturna, chuva fina e tube quase vazio.' },
      { title: 'Ghost Town', artist: 'The Specials', reason: 'Cidade grande de luz baixa e rua molhada.' },
      { title: 'Hell Is Round the Corner', artist: 'Tricky', reason: 'A bruma de South London em forma de som.' },
      { title: 'Outdoor Miner', artist: 'Wire', reason: 'Dois minutos secos para uma manhã apressada.' },
    ],
    center: { lat: 51.507, lng: -0.11, zoom: 12 },
    next: 'birmingham',
  },
  {
    slug: 'birmingham',
    act: 'Ato I',
    beat: 'O mentor',
    number: '02',
    title: 'Birmingham',
    city: 'Birmingham',
    country: 'Reino Unido',
    flag: '🇬🇧',
    dates: '22 → 23 out',
    nights: 1,
    base: 'Casa do Gustavo Barros',
    transport: 'Trem Euston → New Street',
    accent: '#6B5B4B',
    hero: 'birmingham',
    gallery: ['birmingham', 'stAndrews'],
    lead: "Birmingham tem endereço de amigo: Gustavo Barros. Queremos colocar a conversa em dia, caminhar pelos canais e, se der tempo, conhecer St Andrew’s.",
    paragraphs: stories['birmingham'].sections.flatMap(section => section.paragraphs),
    quote: "Às vezes, o lugar mais bonito da viagem é a mesa de um amigo.",
    film: {
      sentence: 'Peaky Blinders entra como referência de atmosfera e de atenção ao passado industrial. No passeio, queremos descobrir a luz dos canais, as texturas dos tijolos e o cotidiano da cidade.',
      titles: ['Peaky Blinders (Steven Knight, 2013–2022)', 'Felicia\'s Journey (Atom Egoyan, 1999)'],
    },
    places: [
      { name: 'Birmingham New Street', category: 'aeroporto', blurb: 'Chegada de trem vinda de Euston, ~1h25. Saída no dia seguinte para Manchester Piccadilly, ~1h30.', lat: 52.4778, lng: -1.8985, query: 'Birmingham New Street station' },
      { name: 'Digbeth', category: 'mirante', blurb: 'Custard Factory, grafite, tijolo industrial. A parte da cidade que filma bem.', lat: 52.4757, lng: -1.8848, query: 'Digbeth Custard Factory Birmingham' },
      { name: 'Gas Street Basin', category: 'mirante', blurb: 'Canais, narrowboats e pub na beira da água. Luz de fim de tarde.', lat: 52.4776, lng: -1.9101, query: 'Gas Street Basin Birmingham' },
      { name: 'Library of Birmingham', category: 'museu', blurb: 'Terraço gratuito com vista da cidade. A fachada de anéis vale o plano aberto.', lat: 52.4797, lng: -1.9077 },
      { name: 'O2 Institute Birmingham', category: 'venue', blurb: 'Onde estão os ingressos de 25/10 da tour da TDWP. Conflita com o jogo. Ver Manchester.', lat: 52.4738, lng: -1.8856, query: 'O2 Institute Birmingham' },
    ],
    keywords: ['CANAL', 'DIGBETH', 'GUSTAVO', 'SOFÁ', 'ENCOMENDAS', 'TIJOLO', 'NEW STREET'],
    soundtrack: [
      { title: 'Paranoid', artist: 'Black Sabbath', reason: 'A cidade inventou o heavy metal. Respeito.' },
      { title: 'Ghost Town', artist: 'The Specials', reason: 'Coventry fica ao lado, o clima é o mesmo.' },
    ],
    center: { lat: 52.478, lng: -1.9, zoom: 13 },
    next: 'manchester',
  },
  {
    slug: 'manchester',
    act: 'Ato II',
    beat: 'A provação',
    number: '03',
    title: 'Manchester',
    city: 'Manchester',
    country: 'Reino Unido',
    flag: '🇬🇧',
    dates: '23 → 28 out',
    nights: 5,
    base: 'Hulme, City Road',
    transport: 'A pé + Metrolink',
    accent: '#A8442C',
    hero: 'oldTraffordJogo',
    gallery: ['oldTraffordJogo', 'manchester', 'oldTraffordFachada', 'liverpool'],
    lead: "Ver o Manchester United de perto é uma das grandes razões desta viagem. Old Trafford no horizonte; o coração já chegou antes.",
    paragraphs: stories['manchester'].sections.flatMap(section => section.paragraphs),
    quote: "A tela mostrou o caminho. Agora a gente quer ouvir a arquibancada.",
    film: {
      sentence: 'Control e 24 Hour Party People entram como referências para olhar a relação entre música, pessoas e cidade. Looking for Eric aproxima esse universo da presença do futebol na vida cotidiana.',
      titles: ['Control (Anton Corbijn, 2007)', '24 Hour Party People (Michael Winterbottom, 2002)', 'This Is England (Shane Meadows, 2006)', 'Looking for Eric (Ken Loach, 2009)'],
    },
    places: [
      { name: 'Base · Hulme, City Road', category: 'base', blurb: 'Dois quartos a vinte minutos a pé de Old Trafford e quinze do centro.', lat: 53.4685, lng: -2.253, query: '343 City Road, Manchester M15' },
      { name: 'Old Trafford', category: 'estádio', blurb: 'Domingo 25/10, 14:00. MU x Bournemouth, \'92 Suite. Tour em outro dia, conforme disponibilidade. Horário do jogo sujeito a alteração pelo clube.', lat: 53.4631, lng: -2.2913 },
      { name: 'New Century Hall', category: 'venue', blurb: 'Sábado 24/10. The Devil Wears Prada + Novelists + 156/Silence. A data que resolve o conflito com o jogo.', lat: 53.4855, lng: -2.24, query: 'New Century Hall Manchester' },
      { name: 'Mackie Mayor', category: 'mercado', blurb: 'Food hall em mercado vitoriano restaurado. Chegada de trem cai bem aqui.', lat: 53.4851, lng: -2.2366 },
      { name: 'Afflecks', category: 'loja', blurb: 'Quatro andares de bugiganga e estilo. Northern Quarter em estado puro.', lat: 53.4831, lng: -2.2361 },
      { name: 'Vinyl Exchange', category: 'loja', blurb: 'Sebo de vinil onde a cidade guarda Factory, Smiths e Oasis.', lat: 53.4824, lng: -2.2378 },
      { name: 'Stevenson Square', category: 'mirante', blurb: 'Parede grafitada que muda de mês em mês.', lat: 53.4836, lng: -2.2345 },
      { name: 'Castle Hotel', category: 'pub', blurb: 'Pub histórico com venue nos fundos. Cerveja escura que parece cenário.', lat: 53.4851, lng: -2.2349, query: 'The Castle Hotel Oldham Street Manchester' },
      { name: 'This & That', category: 'restaurante', blurb: 'Curry barato e clássico da cidade.', lat: 53.4849, lng: -2.2378, query: 'This & That Cafe Manchester' },
      { name: 'National Football Museum', category: 'museu', blurb: 'Histórias do futebol e de quem faz o jogo acontecer. Consultar ingressos no site do museu.', lat: 53.4857, lng: -2.2419 },
      { name: 'Salford Quays / MediaCity', category: 'mirante', blurb: 'BBC e o peso de televisão vista a vida inteira.', lat: 53.4722, lng: -2.2967 },
      { name: 'Liverpool · Anfield', category: 'estádio', blurb: 'Possível visita a Anfield no bate-volta a Liverpool. Tour e data ainda a combinar.', lat: 53.4308, lng: -2.9608 },
      { name: 'Liverpool · Albert Dock', category: 'mirante', blurb: 'Tate Liverpool, Beatles Story, arquitetura portuária do século XIX.', lat: 53.4009, lng: -2.9925 },
      { name: 'Liverpool · Cavern Club', category: 'venue', blurb: 'Uma parada possível para conhecer a memória musical de Liverpool.', lat: 53.4061, lng: -2.9871 },
    ],
    keywords: ['TIJOLO', 'OLD TRAFFORD', 'JOY DIVISION', 'CURRY', 'NORTHERN QUARTER', 'CHUVA', 'CERVEJA', 'FACTORY', 'NEW CENTURY HALL', 'ANFIELD', 'OASIS'],
    soundtrack: [
      { title: 'Love Will Tear Us Apart', artist: 'Joy Division', reason: 'Antes de qualquer outra coisa, é Joy Division.' },
      { title: 'Bigmouth Strikes Again', artist: 'The Smiths', reason: 'Manchester que começou nessas mesmas esquinas.' },
      { title: 'Cigarettes & Alcohol', artist: 'Oasis', reason: 'Tijolo, pub e domingo de ressaca.' },
      { title: 'Voodoo Ray', artist: 'A Guy Called Gerald', reason: 'Uma referência para escutar a noite de Manchester.' },
      { title: 'I Am the Resurrection', artist: 'The Stone Roses', reason: 'Pós-jogo, caminhada longa de volta do estádio.' },
    ],
    center: { lat: 53.475, lng: -2.26, zoom: 12 },
    next: 'san-sebastian',
  },
  {
    slug: 'san-sebastian',
    act: 'Ato II',
    beat: 'A virada',
    number: '04',
    title: 'San Sebastián',
    city: 'San Sebastián',
    country: 'Espanha',
    flag: '🇪🇸',
    dates: '28 → 31 out',
    nights: 3,
    base: 'Casa da Miriam',
    transport: 'KLM MAN → AMS → BIO · carro até Donostia',
    accent: '#2E5C8A',
    hero: 'sorginCampo',
    gallery: ['sorginCampo', 'sanSebastian', 'sanSebastianRua'],
    lead: "No País Basco, a câmera encontra a Sorgin Gallery. Arte, conversa e o Cantábrico atravessando a janela.",
    paragraphs: stories['san-sebastian'].sections.flatMap(section => section.paragraphs),
    quote: "Olhar uma obra. Escutar uma pessoa. Deixar o lugar contar o resto.",
    film: {
      sentence: 'Handia e Loreak inspiram a atenção aos gestos, à paisagem e ao tempo de observar. São referências para chegar ao País Basco com curiosidade pelo cinema e pelas histórias do lugar.',
      titles: ['Handia (Aitor Arregi, Jon Garaño, 2017)', 'Loreak (Garaño, Goenaga, 2014)', 'Mientras dure la guerra (Alejandro Amenábar, 2019)'],
    },
    places: [
      { name: 'Aeroporto de Bilbao (BIO)', category: 'aeroporto', blurb: 'Pouso KLM 28/10 às 16:30. Retirada do carro. Saída TAP 31/10 às 12:25, check-in fecha 11:40.', lat: 43.3011, lng: -2.9106 },
      { name: 'Sorgin Gallery', category: 'trabalho', blurb: 'Gravação com Miriam Badaró, 28 a 31/10. Endereço exato a confirmar com a Miriam.', lat: 43.3183, lng: -1.9812, query: 'Sorgin Gallery San Sebastián' },
      { name: 'Praia da Concha', category: 'mirante', blurb: 'A baía em forma de concha. Caminhar o passeio inteiro ao entardecer.', lat: 43.3167, lng: -1.9903, query: 'Playa de la Concha' },
      { name: 'Monte Igueldo', category: 'mirante', blurb: 'Funicular de 1912 e a vista inteira da baía. Plano geral obrigatório.', lat: 43.3133, lng: -2.0106 },
      { name: 'Parte Vieja', category: 'restaurante', blurb: 'Pintxos de bar em bar. Ganbara, Borda Berri, La Cuchara de San Telmo. Sem reserva, com fome.', lat: 43.3235, lng: -1.9851, query: 'Parte Vieja Donostia' },
      { name: 'Tabakalera', category: 'museu', blurb: 'Centro de cultura contemporânea numa antiga fábrica de tabaco. Cinema, exposições, terraço.', lat: 43.3169, lng: -1.9769 },
      { name: 'Peine del Viento', category: 'mirante', blurb: 'Esculturas de Chillida enfrentando o Cantábrico. Vento, spray, aço.', lat: 43.3199, lng: -2.0097, query: 'Peine del Viento Chillida' },
      { name: 'Guggenheim Bilbao', category: 'museu', blurb: 'No caminho de volta ao aeroporto, 31/10 de manhã cedo. Abre às 10:00; com o check-in às 11:40, é mais fachada do que sala.', lat: 43.2687, lng: -2.934 },
    ],
    keywords: ['DONOSTIA', 'PINTXOS', 'CONCHA', 'ZINEMALDIA', 'CANTÁBRICO', 'GUGGENHEIM', 'AP-8', 'MIRIAM', 'SORGIN'],
    soundtrack: [
      { title: 'Zinemaldia', artist: 'Tulsa', reason: 'Da própria cidade, para a própria cidade.' },
      { title: 'Ilargia', artist: 'Ken Zazpi', reason: 'Euskera no rádio do carro pela AP-8.' },
      { title: 'Ocean Rain', artist: 'Echo & the Bunnymen', reason: 'O mar verde-escuro visto do Igueldo.' },
    ],
    center: { lat: 43.3, lng: -2.45, zoom: 9 },
    next: 'funchal',
  },
  {
    slug: 'funchal',
    act: 'Ato III',
    beat: 'O tesouro',
    number: '05',
    title: 'Funchal',
    city: 'Funchal',
    country: 'Portugal · Madeira',
    flag: '🇵🇹',
    dates: '31 out → 3 nov',
    nights: 3,
    base: 'São Martinho',
    transport: 'TAP BIO → LIS → FNC · carro alugado',
    accent: '#2E5538',
    hero: 'areeiro',
    gallery: ['areeiro', 'funchal', 'saoLourenco', 'areeiroEstrada'],
    lead: "Depois das arquibancadas e dos sets, a Madeira muda o volume. Montanha, mar e tempo para simplesmente olhar.",
    paragraphs: stories['funchal'].sections.flatMap(section => section.paragraphs),
    quote: "Uma pausa também é um jeito de seguir viagem.",
    film: {
      sentence: 'Madeira tem a tensão geológica de "Aguirre", do Herzog, e o silêncio florestal dos filmes do Apichatpong: luz mineral, vegetação de outra era e um clima que muda antes de você terminar a frase.',
      titles: ['Aguirre, der Zorn Gottes (Werner Herzog, 1972)', 'Uncle Boonmee (Apichatpong Weerasethakul, 2010)', 'Stalker (Andrei Tarkovsky, 1979)', 'The Tree of Life (Terrence Malick, 2011)'],
    },
    places: [
      { name: 'Aeroporto da Madeira (FNC)', category: 'aeroporto', blurb: 'Pouso TAP 31/10 às 17:10. Retirada do carro. Voo de volta 05/11 às 18:10.', lat: 32.6979, lng: -16.7745, query: 'Aeroporto da Madeira Cristiano Ronaldo' },
      { name: 'Base · São Martinho', category: 'base', blurb: 'Rua Velha da Ajuda. Três noites, lado oeste de Funchal, a dez minutos do centro.', lat: 32.641, lng: -16.937, query: 'Rua Velha da Ajuda 28, Funchal' },
      { name: 'Pico do Areeiro', category: 'trilha', blurb: '35 min de carro. Sair às 4:30. Nascer do sol acima das nuvens; Consultar as condições oficiais dos percursos antes de planejar a trilha.', lat: 32.7355, lng: -16.929 },
      { name: 'Ponta de São Lourenço', category: 'trilha', blurb: '32 min. Península vulcânica, oito quilômetros ida e volta, vento e mar dos dois lados.', lat: 32.7436, lng: -16.696 },
      { name: 'Cabo Girão', category: 'mirante', blurb: 'Skywalk de vidro numa das falésias mais altas da Europa. Plano aberto sobre o Atlântico.', lat: 32.656, lng: -17.005 },
      { name: 'Câmara de Lobos', category: 'restaurante', blurb: 'Vila de pescadores. Barco colorido, poncha e peixe fresco em tasca de beira-mar.', lat: 32.6483, lng: -16.976 },
      { name: 'Mercado dos Lavradores', category: 'mercado', blurb: 'Peixe-espada preto, fruta exótica, azulejo. Onde a manhã começa.', lat: 32.6493, lng: -16.9054 },
      { name: 'Zona Velha · Rua de Santa Maria', category: 'mirante', blurb: 'Portas pintadas e luz de fim de tarde. Sessão de fotografia sem precisar dirigir.', lat: 32.648, lng: -16.9033, query: 'Rua de Santa Maria Funchal' },
      { name: 'Venda Velha', category: 'pub', blurb: 'Poncha tradicional na Zona Velha. Fim de trilha.', lat: 32.6482, lng: -16.9045, query: 'Venda Velha Funchal' },
      { name: 'Eira do Serrado', category: 'mirante', blurb: 'Curral das Freiras visto de cima. Vila num vale profundo entre montanhas; luz difícil, vale a espera.', lat: 32.7003, lng: -16.9583 },
    ],
    keywords: ['LEVADA', 'VULCÃO', 'MIRADOURO', 'ATLÂNTICO', 'PONCHA', 'AREEIRO', 'SÃO LOURENÇO', 'CABO GIRÃO'],
    soundtrack: [
      { title: 'An Ending (Ascent)', artist: 'Brian Eno', reason: 'Luz mineral subindo no Areeiro antes do sol.' },
      { title: 'Teardrop', artist: 'Massive Attack', reason: 'Atlântico profundo batendo na falésia.' },
      { title: 'Cliffs', artist: 'Hammock', reason: 'Geologia fazendo metade do trabalho da câmera.' },
    ],
    center: { lat: 32.69, lng: -16.87, zoom: 11 },
    next: 'ponta-delgada',
  },
  {
    slug: 'ponta-delgada',
    act: 'Epílogo',
    beat: 'O retorno',
    number: '06',
    title: 'Ponta Delgada',
    city: 'Costa norte da Madeira',
    country: 'Portugal · Madeira',
    flag: '🇵🇹',
    dates: '3 → 5 nov',
    nights: 2,
    base: 'Beco House, Ponta Delgada',
    transport: 'Carro · TAP FNC → LIS → GRU',
    accent: '#1F3D33',
    hero: 'fanal',
    gallery: ['fanal', 'portoMoniz', 'portoMonizOndas'],
    lead: "Na costa norte da Madeira, o roteiro desacelera. O mar continua; a vontade de dividir tudo com vocês também.",
    paragraphs: stories['ponta-delgada'].sections.flatMap(section => section.paragraphs),
    quote: "A gente volta para casa. A viagem continua nas conversas.",
    film: {
      sentence: 'Coração de Cristal e A Árvore da Vida inspiram a atenção ao tempo, à luz e à presença da paisagem. Queremos observar o norte da Madeira com espaço para o silêncio.',
      titles: ['Herz aus Glas (Werner Herzog, 1976)', 'The Tree of Life (Terrence Malick, 2011)', 'Nostalghia (Andrei Tarkovsky, 1983)'],
    },
    places: [
      { name: 'Base · Beco House, Ponta Delgada', category: 'base', blurb: 'Dois quartos na costa norte. Preferido dos hóspedes, 4,85 com 156 avaliações.', lat: 32.8155, lng: -16.9905, query: 'Ponta Delgada, Madeira 9240' },
      { name: 'Fanal', category: 'trilha', blurb: '36 min. Floresta de loureiros no Paul da Serra. Cena principal da viagem. Ir cedo, esperar a neblina.', lat: 32.8125, lng: -17.1467, query: 'Fanal Madeira' },
      { name: 'Seixal · piscinas naturais', category: 'mirante', blurb: '15 min. Praia de areia preta e piscinas naturais na pedra vulcânica.', lat: 32.824, lng: -17.113, query: 'Piscinas Naturais do Seixal' },
      { name: 'Porto Moniz', category: 'mirante', blurb: '21 min. Piscinas vulcânicas, ondas quebrando na costa. Acesso conforme condições do mar e funcionamento local.', lat: 32.8667, lng: -17.1667, query: 'Piscinas Naturais Porto Moniz' },
      { name: 'Santana', category: 'mirante', blurb: '26 min. Casas típicas de telhado de colmo. Almoço tardio.', lat: 32.8, lng: -16.883 },
      { name: 'São Vicente', category: 'mirante', blurb: 'Vila entre montanhas, grutas vulcânicas, igreja no vale. No caminho de tudo.', lat: 32.7967, lng: -17.0433, query: 'São Vicente Madeira' },
      { name: 'Levada das 25 Fontes', category: 'trilha', blurb: 'Rabaçal. Onze quilômetros, ritmo médio, lanterna obrigatória no túnel. Se sobrar dia.', lat: 32.7625, lng: -17.1297, query: 'Levada das 25 Fontes Rabaçal' },
      { name: 'Aeroporto da Madeira (FNC)', category: 'aeroporto', blurb: '43 min. Devolver o carro até 16:00. TP1692 às 18:10.', lat: 32.6979, lng: -16.7745, query: 'Aeroporto da Madeira Cristiano Ronaldo' },
    ],
    keywords: ['FANAL', 'NEBLINA', 'LAURISSILVA', 'SEIXAL', 'PORTO MONIZ', 'SANTANA', 'AREIA PRETA', 'VOLTA'],
    soundtrack: [
      { title: 'Avril 14th', artist: 'Aphex Twin', reason: 'Neblina do Fanal, piano sozinho, tripé baixo.' },
      { title: 'Svefn-g-englar', artist: 'Sigur Rós', reason: 'Vegetação de outra era, clima que muda antes da frase terminar.' },
      { title: 'Cravo e Canela', artist: 'Milton Nascimento', reason: 'A primeira música brasileira quando o modo avião desligar.' },
    ],
    center: { lat: 32.8, lng: -17.0, zoom: 11 },
  },
];

export const chapterBySlug = (slug: string) => chapters.find((c) => c.slug === slug);

// ---------------------------------------------------------------------------
// Timeline · 21 dias, 19 noites
// ---------------------------------------------------------------------------

export const days: Day[] = [
  { n: 0, date: '2026-10-16', weekday: 'sex', chapter: 'partida', city: 'São Paulo', intensity: 'trânsito', title: 'Embarque', afternoon: 'Conferir o kit, os documentos e as regras da bagagem de cada trecho.', night: 'GRU 23:50, LATAM LA 8084. Reservar tempo para os procedimentos de embarque.', fixed: '23:50 · LA 8084', status: 'confirmado' },
  { n: 1, date: '2026-10-17', weekday: 'sáb', chapter: 'londres', city: 'Londres', intensity: 'leve', title: 'Chegada', morning: 'Ainda sobre o Atlântico.', afternoon: 'Pouso em Heathrow às 15:05. Elizabeth line. Check-in em Westminster a partir das 15:00.', night: 'Caminhada sem câmera pelo Tâmisa. Jantar cedo. Jet lag manda.', status: 'esboço' },
  { n: 2, date: '2026-10-18', weekday: 'dom', chapter: 'londres', city: 'Londres', intensity: 'médio', title: 'Brick Lane · janela FUMI', morning: 'Brick Lane, Columbia Road Flower Market.', afternoon: 'Reconhecimento na Gallery FUMI, Mayfair. Luz, tomadas, planta.', night: 'Soho. Prince Charles Cinema se houver sessão.', fixed: 'janela de gravação FUMI 18 a 21/10', status: 'esboço' },
  { n: 3, date: '2026-10-19', weekday: 'seg', chapter: 'londres', city: 'Londres', intensity: 'pesado', title: '🎬 Gallery FUMI', morning: 'Montagem. Meia diária com Max Lamb, data provável.', afternoon: 'Entrevista e planos de detalhe das peças de Hugo França.', night: 'Backup duplo dos cartões. Pub perto da base.', fixed: '🎬 gravação com Max Lamb (provável)', status: 'esboço' },
  { n: 4, date: '2026-10-20', weekday: 'ter', chapter: 'londres', city: 'Londres', intensity: 'médio', title: 'Southbank', morning: 'Tate Modern, Millennium Bridge, Borough Market.', afternoon: 'BFI Southbank. Complementos da FUMI se necessário.', night: 'Ronnie Scott\'s, se houver ingresso.', status: 'esboço' },
  { n: 5, date: '2026-10-21', weekday: 'qua', chapter: 'londres', city: 'Londres', intensity: 'médio', title: 'Richmond ou estádio · a combinar', morning: 'Possível passeio pelas locações de Ted Lasso em Richmond, se a diária FUMI permitir.', afternoon: 'Alternativa ao passeio por Richmond: escolher uma visita entre Emirates, Wembley ou Stamford Bridge, conforme agenda e reservas.', night: 'Jantar e passeio perto da base. Os outros estádios ficam como possibilidades, sem compromisso de visitar todos.', status: 'esboço' },
  { n: 6, date: '2026-10-22', weekday: 'qui', chapter: 'birmingham', city: 'Birmingham', intensity: 'trânsito', title: 'Euston → New Street', morning: 'Check-out. Trem Euston → Birmingham New Street, ~1h25.', afternoon: 'Visitar Gustavo Barros. Possível passeio por Digbeth ou St Andrew’s, conforme a agenda.', night: 'Pub nos canais.', fixed: 'trem a comprar', status: 'esboço' },
  { n: 7, date: '2026-10-23', weekday: 'sex', chapter: 'manchester', city: 'Manchester', intensity: 'trânsito', title: 'New Street → Piccadilly', morning: 'Trem Birmingham → Manchester Piccadilly, ~1h30.', afternoon: 'Check-in em Hulme. Northern Quarter, Afflecks, Vinyl Exchange.', night: 'Mackie Mayor.', fixed: 'trem a comprar', status: 'esboço' },
  { n: 8, date: '2026-10-24', weekday: 'sáb', chapter: 'manchester', city: 'Manchester', intensity: 'pesado', title: 'Tour + show', morning: 'Possível tour de Old Trafford; consultar disponibilidade e ingresso.', afternoon: 'National Football Museum. Stevenson Square.', night: 'New Century Hall: The Devil Wears Prada + Novelists.', fixed: '🎸 TDWP · New Century Hall · a confirmar compra', status: 'esboço' },
  { n: 9, date: '2026-10-25', weekday: 'dom', chapter: 'manchester', city: 'Manchester', intensity: 'pesado', title: '⚽ Old Trafford', morning: 'Caminhar até o estádio com a multidão. Filmar de longe.', afternoon: 'MU x Bournemouth, 14:00, \'92 Suite. A partida fica para o olho.', night: 'Castle Hotel. Ou o que sobrar de voz.', fixed: '⚽ 14:00 · MU x Bournemouth', status: 'confirmado' },
  { n: 10, date: '2026-10-26', weekday: 'seg', chapter: 'manchester', city: 'Liverpool', intensity: 'médio', title: 'Liverpool · possível bate-volta', morning: 'Trem para Liverpool. Possível visita a Anfield, a combinar com os horários do tour.', afternoon: 'Albert Dock, Tate Liverpool. Bold Street.', night: 'Cavern Club. Volta a Manchester.', status: 'esboço' },
  { n: 11, date: '2026-10-27', weekday: 'ter', chapter: 'manchester', city: 'Manchester', intensity: 'leve', title: 'Respiro', morning: 'Whitworth Gallery e o parque.', afternoon: 'Salford Quays, MediaCity. Arrumar as malas: 23 kg despachados na KLM.', night: 'This & That. Última pint.', status: 'esboço' },
  { n: 12, date: '2026-10-28', weekday: 'qua', chapter: 'san-sebastian', city: 'Bilbao → San Sebastián', intensity: 'trânsito', title: 'MAN → AMS → BIO', morning: 'KL1032 MAN 10:55 → AMS 13:15.', afternoon: 'KL1525 AMS 14:25 → BIO 16:30. Carro. AP-8 até Donostia, ~1h.', night: 'Casa da Miriam. Pintxos na Parte Vieja.', fixed: '✈️ KLM · manhã inteira', status: 'confirmado' },
  { n: 13, date: '2026-10-29', weekday: 'qui', chapter: 'san-sebastian', city: 'San Sebastián', intensity: 'pesado', title: '🎬 Sorgin Gallery', morning: 'Gravação. Banco de imagens.', afternoon: 'Gravação. Retratos da Miriam.', night: 'Concha ao entardecer.', fixed: '🎬 Sorgin · 28 a 31/10', status: 'esboço' },
  { n: 14, date: '2026-10-30', weekday: 'sex', chapter: 'san-sebastian', city: 'San Sebastián', intensity: 'pesado', title: '🎬 Sorgin Gallery · Igueldo', morning: 'Gravação. Complementos.', afternoon: 'Monte Igueldo, Peine del Viento.', night: 'Tabakalera. Backup.', fixed: '🎬 Sorgin', status: 'esboço' },
  { n: 15, date: '2026-10-31', weekday: 'sáb', chapter: 'funchal', city: 'Bilbao → Funchal', intensity: 'trânsito', title: 'BIO → LIS → FNC', morning: 'Sair de Donostia às 8:00. Guggenheim pela fachada. Devolver carro até 10:30. Check-in fecha 11:40.', afternoon: 'TP1063 BIO 12:25 → LIS 13:05. TP1691 LIS 15:20 → FNC 17:10. Carro no aeroporto.', night: 'Check-in em São Martinho. Câmara de Lobos para jantar.', fixed: '✈️ TAP · check-in fecha 11:40', status: 'confirmado' },
  { n: 16, date: '2026-11-01', weekday: 'dom', chapter: 'funchal', city: 'Madeira', intensity: 'pesado', title: 'Pico do Areeiro', morning: 'Sair às 4:30. Nascer do sol acima das nuvens. Percurso apenas se aberto e com condições adequadas; conferir informação oficial antes de sair.', afternoon: 'Descer. Eira do Serrado. Almoço tardio.', night: 'Zona Velha, poncha na Venda Velha.', status: 'esboço' },
  { n: 17, date: '2026-11-02', weekday: 'seg', chapter: 'funchal', city: 'Madeira', intensity: 'médio', title: 'São Lourenço · Cabo Girão', morning: 'Mercado dos Lavradores.', afternoon: 'Ponta de São Lourenço na luz lateral. Plano aberto da península.', night: 'Cabo Girão ao pôr do sol. Peixe em Câmara de Lobos.', status: 'esboço' },
  { n: 18, date: '2026-11-03', weekday: 'ter', chapter: 'ponta-delgada', city: 'Funchal → Ponta Delgada', intensity: 'médio', title: 'Travessia para o norte', morning: 'Check-out às 11:00. Túneis até São Vicente.', afternoon: 'Check-in às 15:00 na Beco House. Seixal, 15 min.', night: 'Jantar em São Vicente. Ver a previsão de neblina.', status: 'esboço' },
  { n: 19, date: '2026-11-04', weekday: 'qua', chapter: 'ponta-delgada', city: 'Costa norte', intensity: 'pesado', title: '🎬 Fanal', morning: 'Fanal cedo. Esperar a neblina. Planos longos no tripé.', afternoon: 'Porto Moniz, piscinas vulcânicas.', night: 'Santana. Última noite.', status: 'esboço' },
  { n: 20, date: '2026-11-05', weekday: 'qui', chapter: 'ponta-delgada', city: 'Madeira → São Paulo', intensity: 'trânsito', title: 'Volta', morning: 'Check-out 11:00. Santana, conforme o tempo disponível.', afternoon: 'Aeroporto às 15:00, devolver o carro até 16:00. TP1692 FNC 18:10 → LIS.', night: 'TP87 LIS → GRU. Pouso na manhã de sexta.', fixed: '✈️ TAP · 18:10', status: 'confirmado' },
];

// ---------------------------------------------------------------------------
// Rota (para o mapa)
// ---------------------------------------------------------------------------

export const route: { name: string; lat: number; lng: number; chapter: string; mode: 'avião' | 'trem' | 'carro' | 'base' }[] = [
  { name: 'São Paulo', lat: -23.4356, lng: -46.4731, chapter: 'partida', mode: 'avião' },
  { name: 'Londres', lat: 51.4925, lng: -0.131, chapter: 'londres', mode: 'base' },
  { name: 'Birmingham', lat: 52.4797, lng: -1.9028, chapter: 'birmingham', mode: 'trem' },
  { name: 'Manchester', lat: 53.4685, lng: -2.253, chapter: 'manchester', mode: 'trem' },
  { name: 'Amsterdã', lat: 52.3105, lng: 4.7683, chapter: 'san-sebastian', mode: 'avião' },
  { name: 'Bilbao', lat: 43.3011, lng: -2.9106, chapter: 'san-sebastian', mode: 'avião' },
  { name: 'San Sebastián', lat: 43.3183, lng: -1.9812, chapter: 'san-sebastian', mode: 'carro' },
  { name: 'Lisboa · conexão aérea', lat: 38.7742, lng: -9.1342, chapter: 'funchal', mode: 'avião' },
  { name: 'Funchal', lat: 32.641, lng: -16.937, chapter: 'funchal', mode: 'avião' },
  { name: 'Ponta Delgada', lat: 32.8155, lng: -16.9905, chapter: 'ponta-delgada', mode: 'carro' },
];

export const stats = [
  { n: '19', label: 'noites' },
  { n: '6', label: 'bases' },
  { n: '4', label: 'voos emitidos' },
  { n: '2', label: 'trabalhos' },
  { n: '1', label: 'jogo em Old Trafford' },
];

export const lastUpdate = '15 de setembro de 2026';
