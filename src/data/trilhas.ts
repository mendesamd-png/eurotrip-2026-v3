import type { ImageKey } from './images';

export type Trilha = {
  codigo: string;
  nome: string;
  inicio: string;
  dificuldade: 'fácil' | 'média';
  ida: string;
  duracao: string;
  historia: string;
  chegada: string;
  reserva: string;
  foto: ImageKey;
  alerta?: string;
};

export const trilhas: Trilha[] = [
  {
    codigo: 'PR1.2',
    nome: 'Vereda do Pico Ruivo',
    inicio: 'Achada do Teixeira',
    dificuldade: 'média',
    ida: '2,8 km de ida e 2,8 km de volta',
    duracao: 'cerca de 1h30 de ida e volta',
    historia: 'O caminho sobe até o ponto mais alto da Madeira, a 1.862 m. Perto do início, a formação de basalto conhecida como Homem em Pé. Na subida há abrigos, porque o tempo muda rápido e o mar de nuvens é frequente.',
    chegada: 'Parte da Achada do Teixeira, onde fica a casa de abrigo. No Pico Ruivo, a trilha se conecta com o Areeiro e com outras veredas.',
    reserva: 'Reserva obrigatória no SIMplifica. No roteiro, saída às 16h de 01/11 para o pôr do sol.',
    foto: 'trilhaPicoRuivo',
    alerta: 'Conferir a hora do pôr do sol em 01/11 antes de sair.',
  },
  {
    codigo: 'PR1',
    nome: 'Vereda do Areeiro',
    inicio: 'Pico do Areeiro (1.818 m)',
    dificuldade: 'média',
    ida: 'cerca de 7 km no trajeto completo, ou 1,2 km ida e volta até a Pedra Rija',
    duracao: 'cerca de 3h30 no trajeto completo',
    historia: 'Liga três picos: Pico do Areeiro, Pico das Torres e Pico Ruivo. Parte do caminho atravessa túneis escavados no tufo vulcânico, que serviram de abrigo para gado e pastores. Depois de dois anos fechada após os incêndios de 2024, a trilha reabriu em 27/04/2026.',
    chegada: 'Sai do Pico do Areeiro, que fica a cerca de 35 minutos de carro do centro do Funchal. Para o trecho até a Pedra Rija, a entrada é de €4,50. Para o trajeto completo até o Pico Ruivo, é €10,50.',
    reserva: 'Reserva obrigatória no SIMplifica. No roteiro, a entrada é às 08h de 02/11, até a Pedra Rija.',
    foto: 'areeiro',
  },
  {
    codigo: 'PR11',
    nome: 'Vereda dos Balcões',
    inicio: 'Ribeiro Frio',
    dificuldade: 'fácil',
    ida: '1,5 km de ida e 1,5 km de volta',
    duracao: 'cerca de 1h30 de ida e volta',
    historia: 'O caminho leva ao Miradouro dos Balcões, com vista para o vale da Ribeira da Metade, coberto de Laurissilva, a floresta nativa da Madeira. Em dias limpos, dá para ver os picos da cordilheira central.',
    chegada: 'Começa em Ribeiro Frio, na Estrada Regional 103. O estacionamento é pago e o início da trilha é sinalizado a partir dele.',
    reserva: 'Reserva obrigatória no SIMplifica. No roteiro, a entrada é às 10h30 de 02/11.',
    foto: 'trilhaBalcoes',
    alerta: 'Conferir se o trajeto cabe depois do Areeiro, que termina na Pedra Rija.',
  },
  {
    codigo: 'PR8',
    nome: 'Vereda da Ponta de São Lourenço',
    inicio: 'Baía d’Abra',
    dificuldade: 'média',
    ida: '3 km de ida e 3 km de volta',
    duracao: 'cerca de 2h30 de ida e volta',
    historia: 'A península vulcânica é uma reserva natural protegida desde 1982, por causa da fauna, da flora endêmica e das formações geológicas. Por causa do vento norte, a vegetação é rasteira e quase sem árvores, diferente do resto da ilha.',
    chegada: 'A trilha começa na Baía d’Abra e termina na Casa do Sardinha. A região fica no extremo leste da ilha.',
    reserva: 'Reserva obrigatória no SIMplifica. No roteiro, a entrada é às 15h de 02/11, na luz lateral da tarde.',
    foto: 'saoLourenco',
  },
  {
    codigo: 'PR6',
    nome: 'Levada das 25 Fontes',
    inicio: 'Rabaçal, Estrada Regional 105',
    dificuldade: 'média',
    ida: '4,3 km',
    duracao: 'cerca de 3h',
    historia: 'Uma das levadas mais visitadas da ilha, com floresta de loureiros e quedas d’água. A levada foi construída entre 1839 e 1855, para levar água aos campos do sul. Vale a visita ao centro de acolhimento do Rabaçal, que conta a história das levadas.',
    chegada: 'Parte do Rabaçal, no planalto do Paúl da Serra. Há um grande estacionamento na ER 105, a cerca de 2 km do início, com minibus ou caminhada.',
    reserva: 'Reserva obrigatória no SIMplifica. No roteiro, a entrada é às 10h30 de 04/11.',
    foto: 'trilhaRisco',
    alerta: 'A foto é da Cascata do Risco, trilha vizinha que sai do mesmo ponto. A levada das 25 Fontes ainda não tem foto própria.',
  },
];
