"""Regenerate episode briefs and the ZIP from the site's editorial data."""
import json
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
r=Path(__file__).resolve().parents[1]; d=r/'docs/notebooklm'
eps=json.loads((r/'src/data/podcast-episodes.json').read_text()); sources=json.loads((d/'FONTES.json').read_text()); refs={s['id']:s for s in sources}
common='''Crie uma conversa em português brasileiro para a série Perto, mesmo longe. Dois apresentadores curiosos, calor humano e humor leve. Eles não devem fingir ser Douglas Mendes e Hugo Lima nem inventar falas ou lembranças dos viajantes. O público inclui familiares, amigos e quem não acompanha futebol. A viagem é futura, em outubro e novembro de 2026.
Use apenas as fontes selecionadas. Não transforme possibilidade em reserva ou plano em fato vivido. Lisboa é só conexão aérea; Ponta Delgada é na Madeira. Não narre endereços privados, códigos de reserva nem valores comerciais. Explique termos culturais e esportivos sem tom de aula. A poesia vem de um detalhe concreto, não de slogans.
Estrutura: convite para a experiência que queremos viver; contexto histórico; passeio pelas paradas; um detalhe para observar sem câmera; despedida. Não leia uma lista de curiosidades. Diferencie o que é pauta de pesquisa do que já é fato verificado. Não use letras de músicas nem invente sons gravados pela dupla.
Antes de gerar o áudio, mostre no chat uma tabela fato / fonte / data / confirmado ou pendente. Quando faltar evidência, omita ou explicite a lacuna. Revise nomes, geografia e mudanças de agenda. A duração é uma intenção editorial, não garantia da ferramenta. Priorize uma conversa que caiba num deslocamento curto, sem cortar contexto essencial.
'''
folder=d/'episodios';folder.mkdir(exist_ok=True)
for e in eps:
 s=f"EPISÓDIO {e['number']} — {e['title']}\n{e['city']} · {e['country']}\nPauta preparada em 15/09/2026. Áudio ainda não gerado.\n\nPROMESSA\n{e['description']}\n\nQUANDO OUVIR\n{e['when']}\n\nPARADAS\n"+'\n'.join('- '+p for p in e['stops'])+'\n\nPAUTA E ORDEM DA CONVERSA\n'+'\n'.join(f'{i+1}. {p}' for i,p in enumerate(e['topics']))+f"\n\nO QUE AINDA DEPENDE DE CONFIRMAÇÃO\n{e['note']}\n\nFONTES A IMPORTAR\n"
 for key in e['sourceIds']:
  f=refs[key];s+=f"\n[{key}] {f['recurso']}\n{f['url']}\nUso: {f['uso']}\n"
 s+='\nPROMPT PARA PERSONALIZAR O RESUMO EM ÁUDIO\n'+common+f"\nConcentre este episódio em {e['city']}, com o título “{e['title']}”. Ligue cada história às paradas listadas. Encerre com uma pergunta concreta que os viajantes possam responder depois da visita.\n"
 if e['slug']=='dia-de-jogo':s+='\nImporte também os documentos 10 e 11. Separe história e atualidade. Narre o cenário esportivo apenas com uma data de apuração explícita e fontes da semana da partida. Não chamar Bournemouth de rival local. O recorte de 2023–2025 não é necessariamente o retrospecto mais recente. Se a ficha atual não estiver preenchida, produza apenas a parte histórica e marque a atualidade como pendente.\n'
 if e['slug']=='funchal':s+='\nImporte também o documento 12. Use a história de cada parada e uma observação sensorial. Funchal é a base; vários passeios ficam em outros municípios. Ver Curral das Freiras do miradouro não significa descer à vila. Não tratar o vale como cratera nem prometer nuvens, clima ou trilhas abertas.\n'
 (folder/f"{e['number']}-{e['slug']}.txt").write_text(s)
 (folder/f"{e['number']}-{e['slug']}-links.txt").write_text('\n'.join(refs[i]['url'] for i in e['sourceIds'])+'\n')
(d/'08-PLAYLIST-POR-DESTINO.md').write_text('# Perto, mesmo longe — a playlist\n\nNove pautas: abertura, seis bases e dois especiais. Áudios a gerar e revisar individualmente.\n\n'+'\n'.join(f"- **{e['number']} · {e['city']} — {e['title']}**\n  {e['description']}\n  Quando: {e['when']}.\n  Briefing: `episodios/{e['number']}-{e['slug']}.txt`.\n" for e in eps)+'''\n## Como produzir

1. Crie um notebook por episódio ou selecione somente as fontes da pauta desejada.
2. Importe `01-CONTEXTO-DA-VIAGEM.txt` em todos. Para Londres e San Sebastián, inclua `02-OS-DOIS-TRABALHOS.txt`.
3. Importe o briefing na pasta `episodios`. Adicione como fontes web os URLs do arquivo de links correspondente. Importar uma lista de URLs como texto não importa as páginas.
4. Para United, acrescente os documentos 10 e 11. Para Funchal, acrescente o 12. O 09 traz ganchos e perguntas pessoais para as outras cidades.
5. Peça a tabela de checagem de fatos no chat, corrija lacunas e só então use o prompt no Resumo em Áudio, em português brasileiro.
6. Ouça tudo e revise os nomes, o tempo verbal, as possibilidades de roteiro e os dados atuais. Baixe cada arquivo e guarde a transcrição.

A interface de áudio pode mudar; use a ajuda oficial indicada no documento 00. Os materiais estão prontos para orientar a geração, mas nenhum áudio foi criado. O site permite escolher episódio, navegar para o anterior/próximo e consultar fontes. O reprodutor aparece quando houver um arquivo real; não há reprodução automática ao entrar ou selecionar um episódio.

## Ordem editorial

A abertura é opcional. Para o dia do jogo, vá direto ao 04. Para a Madeira, 07 e 08 funcionam juntos. Liverpool permanece útil como conversa cultural mesmo se o bate-volta não acontecer. A sequência dos temas no áudio não é uma recomendação de deslocamento no mesmo dia.
''')
(d/'05-LINKS-PARA-IMPORTAR.txt').write_text('\n'.join(s['url'] for s in sources)+'\n')
p=d/'00-COMECE-AQUI.md';old=p.read_text(); marker='## Atualização: playlist por destino'
if marker not in old:
 old=old.replace('## O primeiro episódio',marker+'\n\nA série agora tem **nove pautas independentes** e uma biblioteca ampliada de **'+str(len(sources))+' recursos**. Comece em `08-PLAYLIST-POR-DESTINO.md`. A pasta `episodios` tem briefing, prompt e links por conversa; os documentos 10–12 aprofundam United, o pré-jogo e Funchal. São materiais para gerar os áudios, que ainda não foram produzidos. A lista original de 42 fontes continua nos documentos antigos; as novas estão em `13-FONTES-NOVAS-DA-PLAYLIST.md`.\n\n## O primeiro episódio')
 p.write_text(old)
with ZipFile(r/'docs/Eurotrip-2026-NotebookLM.zip','w',ZIP_DEFLATED) as z:
 for p in sorted(d.rglob('*')):
  if p.is_file():z.write(p,Path('Eurotrip-2026-NotebookLM')/p.relative_to(d))
print(f'{len(eps)} briefings e prompts; {len(sources)} fontes; ZIP atualizado.')
