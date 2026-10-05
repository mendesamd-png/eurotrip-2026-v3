/** Deslocamentos ponto a ponto: voos com horário de saída e chegada, e trechos terrestres
 *  entre aeroporto/estação e a base de cada capítulo. Tempos terrestres são estimativas
 *  (Google Maps, sem trânsito) e ficam marcados com "~". Horários de voo vêm dos bilhetes. */

export type Leg = {
  chapter: string;            // capítulo em que o trecho acontece (o de chegada)
  date: string;               // dd/mm
  from: string;
  to: string;
  mode: 'voo' | 'trem' | 'metrô' | 'carro' | 'a pé' | 'ônibus';
  dep?: string;               // horário de saída (local)
  arr?: string;               // horário de chegada (local)
  est?: string;               // duração estimada, já com "~"
  how: string;                // descrição curta
  status: 'emitido' | 'a comprar' | 'a reservar' | 'estimativa' | 'a confirmar';
  directions?: { from: string; to: string; mode?: 'transit' | 'driving' | 'walking' };
  note?: string;
};

const dir = (from: string, to: string, mode: 'transit' | 'driving' | 'walking' = 'transit') => ({ from, to, mode });

export const legs: Leg[] = [
  // ---- partida → Londres
  { chapter: 'londres', date: '16/10', from: 'GRU · Guarulhos', to: 'LHR · Heathrow', mode: 'voo', dep: '23:50', arr: '15:05 (17/10)', how: 'LATAM LA 8084 · direto · 11h15 de voo · +4h de fuso', status: 'emitido' },
  { chapter: 'londres', date: '17/10', from: 'LHR · Heathrow', to: 'Page Street, Westminster', mode: 'metrô', est: '~55 min', how: 'Piccadilly line até Green Park, Victoria line até Pimlico, 8 min a pé. Elizabeth line + Victoria dá tempo parecido', status: 'estimativa', directions: dir('Heathrow Airport', 'Page Street, London SW1P 4EX'), note: 'Chegada no apartamento por volta das 16:30, contando imigração com ETA e bagagem' },
  // ---- Londres ⇄ Birmingham (bate e volta)
  { chapter: 'birmingham', date: '18/10', from: 'Page Street', to: 'London Euston', mode: 'metrô', est: '~25 min', how: 'Victoria line de Pimlico a Euston, direto', status: 'estimativa', directions: dir('Page Street, London SW1P 4EX', 'London Euston'), note: 'Domingo cedo: conferir o horário do primeiro metrô' },
  { chapter: 'birmingham', date: '18/10', from: 'London Euston', to: 'Birmingham New Street', mode: 'trem', dep: '08:06', arr: '10:02', how: 'Avanti West Coast, direto, assentos marcados', status: 'emitido', note: 'Bilhete Advance: vale só neste trem' },
  { chapter: 'birmingham', date: '18/10', from: 'Birmingham New Street', to: 'Casa do Gustavo', mode: 'a pé', est: '~5 min', how: 'A casa fica na região da New Street, perto da estação', status: 'estimativa' },
  { chapter: 'birmingham', date: '18/10', from: 'Birmingham New Street', to: 'London Euston', mode: 'trem', dep: '21:06', arr: '23:38', how: 'London Northwestern Railway, sem assento marcado', status: 'emitido', note: 'Bilhete Advance: vale só neste trem' },
  // ---- Londres → Paris
  { chapter: 'paris', date: '22/10', from: 'Page Street', to: 'London St Pancras', mode: 'metrô', est: '~20 min', how: 'Victoria line de Pimlico a King’s Cross St Pancras, direto', status: 'estimativa', directions: dir('Page Street, London SW1P 4EX', 'St Pancras International'), note: 'O Eurostar tem controle de passaporte antes do embarque. Conferir no bilhete a antecedência pedida e o horário do primeiro metrô; táxi é o plano B' },
  { chapter: 'paris', date: '22/10', from: 'London St Pancras', to: 'Paris Gare du Nord', mode: 'trem', dep: '07:01', arr: '10:29', how: 'Eurostar 9004 · direto · 2h28 · +1h de fuso', status: 'emitido', note: 'Preencher os dados de passageiro (API) no site da Eurostar antes de viajar' },
  { chapter: 'paris', date: '22/10', from: 'Gare du Nord', to: 'Mercure Montparnasse', mode: 'metrô', est: '~25 min', how: 'Linha 4, direto até Montparnasse-Bienvenüe, e alguns minutos a pé', status: 'estimativa', directions: dir('Gare du Nord, Paris', 'Mercure Paris Gare Montparnasse TGV'), note: 'Check-in a partir das 16:00. Perguntar se o hotel guarda as malas antes disso' },
  { chapter: 'paris', date: '23/10', from: 'Mercure Montparnasse', to: 'Design Miami/Paris', mode: 'metrô', est: '~15 min', how: 'Linha 12 de Montparnasse-Bienvenüe até Solférino ou Rue du Bac, e uma caminhada curta', status: 'estimativa', directions: dir('Mercure Paris Gare Montparnasse TGV', 'Design Miami/ Paris, Rue de l’Université, 75007 Paris') },
  // ---- Paris → Manchester
  { chapter: 'paris', date: '24/10', from: 'Mercure Montparnasse', to: 'Porte Maillot', mode: 'metrô', est: '~30 min', how: 'Linha 6 até Charles de Gaulle–Étoile e linha 1 até Porte Maillot', status: 'estimativa', directions: dir('Mercure Paris Gare Montparnasse TGV', 'Porte Maillot, Paris'), note: 'Sair do hotel por volta das 06:00. Conferir o primeiro metrô; táxi é o plano B' },
  { chapter: 'paris', date: '24/10', from: 'Porte Maillot', to: 'BVA · Beauvais', mode: 'ônibus', est: '~1h15 a 1h30', how: 'Aérobus, o ônibus oficial do aeroporto, com saída do Boulevard Pershing', status: 'a comprar', directions: dir('Porte Maillot, Paris', 'Aéroport Paris-Beauvais', 'driving'), note: 'Comprar o bilhete online e conferir qual ônibus atende o voo das 10:15' },
  { chapter: 'manchester', date: '24/10', from: 'BVA · Beauvais', to: 'MAN · Manchester', mode: 'voo', dep: '10:15', arr: '10:35', how: 'Ryanair FR 3723 · direto · −1h de fuso · mala de 20 kg incluída', status: 'emitido' },
  { chapter: 'manchester', date: '24/10', from: 'MAN · Manchester Airport', to: 'City Road, Hulme', mode: 'trem', est: '~40 min', how: 'Trem do aeroporto até Piccadilly (cerca de 20 min) e Uber até Hulme. Uber direto leva cerca de 30 min', status: 'estimativa', directions: dir('Manchester Airport', '343 City Road, Manchester M15') },
  { chapter: 'manchester', date: '26/10', from: 'Deansgate', to: 'Liverpool Lime Street', mode: 'trem', dep: '10:00', arr: '10:53', how: 'Northern, direto. Volta às 21:03, chegada às 21:58', status: 'emitido', note: 'Bilhetes Advance: valem só nesses trens' },
  { chapter: 'manchester', date: '25/10', from: 'City Road, Hulme', to: 'Old Trafford', mode: 'metrô', est: '~20 min', how: 'Metrolink de Cornbrook ou Deansgate-Castlefield até Old Trafford. A pé são ~35 min pela Chester Road', status: 'estimativa', directions: dir('343 City Road, Manchester M15', 'Old Trafford Stadium'), note: 'Chegar 90 min antes do apito por causa do hospitality' },
  { chapter: 'manchester', date: '28/10', from: 'City Road, Hulme', to: 'MAN · Manchester Airport', mode: 'trem', est: '~40 min', how: 'Uber até Piccadilly (12 min) e trem até o aeroporto (20 min). Uber direto: ~30 min, £30 a £40', status: 'estimativa', directions: dir('343 City Road, Manchester M15', 'Manchester Airport'), note: 'Voo às 10:55: sair de casa até as 08:00' },
  // ---- Manchester → Bilbao → San Sebastián
  { chapter: 'san-sebastian', date: '28/10', from: 'MAN · Manchester', to: 'AMS · Amsterdã', mode: 'voo', dep: '10:55', arr: '13:15', how: 'KLM KL1032 · 1h20 de voo · +1h de fuso', status: 'emitido' },
  { chapter: 'san-sebastian', date: '28/10', from: 'AMS · Amsterdã', to: 'BIO · Bilbao', mode: 'voo', dep: '14:25', arr: '16:30', how: 'KLM KL1525 · 2h05 de voo · conexão de 1h10 em Schiphol', status: 'emitido' },
  { chapter: 'san-sebastian', date: '28/10', from: 'BIO · Bilbao', to: 'San Sebastián', mode: 'carro', est: '~1h05', how: 'AP-8, ~100 km, pedágio. Retirada do carro no aeroporto', status: 'a reservar', directions: dir('Bilbao Airport', 'San Sebastián', 'driving'), note: 'Chegada em San Sebastián por volta das 18:15, já no escuro no fim de outubro' },
  // ---- San Sebastián → Bilbao → Funchal
  { chapter: 'funchal', date: '31/10', from: 'San Sebastián', to: 'BIO · Bilbao', mode: 'carro', est: '~1h05', how: 'AP-8 de volta, devolução do carro no aeroporto', status: 'a reservar', directions: dir('San Sebastián', 'Bilbao Airport', 'driving'), note: 'Check-in fecha às 11:40. Sair de San Sebastián até as 09:00' },
  { chapter: 'funchal', date: '31/10', from: 'BIO · Bilbao', to: 'LIS · Lisboa', mode: 'voo', dep: '12:25', arr: '13:05', how: 'TAP TP1063 · 1h40 de voo · −1h de fuso', status: 'emitido' },
  { chapter: 'funchal', date: '31/10', from: 'LIS · Lisboa', to: 'FNC · Madeira', mode: 'voo', dep: '15:20', arr: '17:10', how: 'TAP TP1691 · 1h50 de voo · conexão de 2h15', status: 'emitido' },
  { chapter: 'funchal', date: '31/10', from: 'FNC · Madeira', to: 'Rua Velha da Ajuda, São Martinho', mode: 'carro', est: '~25 min', how: 'VR1 até Funchal, 22 km. Retirada do carro no aeroporto', status: 'a reservar', directions: dir('Madeira Airport', 'Rua Velha da Ajuda 28, Funchal', 'driving'), note: 'Check-in do Airbnb a partir das 15:00, chegada prevista ~18:00' },
  // ---- Funchal → Ponta Delgada
  { chapter: 'ponta-delgada', date: '03/11', from: 'São Martinho, Funchal', to: 'Ponta Delgada, costa norte', mode: 'carro', est: '~37 min', how: 'VR1 e túneis da ER104, 39 km', status: 'estimativa', directions: dir('Rua Velha da Ajuda 28, Funchal', 'Ponta Delgada, Madeira', 'driving'), note: 'Check-out 11:00, check-in 15:00: a manhã serve para o Areeiro ou para a Zona Velha' },
  // ---- volta
  { chapter: 'ponta-delgada', date: '05/11', from: 'Ponta Delgada', to: 'FNC · Madeira', mode: 'carro', est: '~43 min', how: '39 km pela costa e VR1. Devolução do carro no aeroporto', status: 'estimativa', directions: dir('Ponta Delgada, Madeira', 'Madeira Airport', 'driving'), note: 'Voo às 18:10: devolver o carro até as 16:00' },
  { chapter: 'ponta-delgada', date: '05/11', from: 'FNC · Madeira', to: 'LIS · Lisboa', mode: 'voo', dep: '18:10', arr: '19:55', how: 'TAP TP1692 · 1h45 de voo', status: 'emitido' },
  { chapter: 'ponta-delgada', date: '05/11', from: 'LIS · Lisboa', to: 'GRU · Guarulhos', mode: 'voo', dep: '23:25', arr: '06:50 (06/11)', how: 'TAP TP87 · conexão de 3h30 em Lisboa', status: 'emitido' },
];

export const legsOf = (chapter: string) => legs.filter((l) => l.chapter === chapter);

export const directionsUrl = (d: NonNullable<Leg['directions']>) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(d.from)}&destination=${encodeURIComponent(d.to)}&travelmode=${d.mode ?? 'transit'}`;
