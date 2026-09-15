"""Validate exported pages, internal links/assets and podcast references before deployment."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
import json

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
BASE = '/eurotrip-2026-v3/'
ORIGIN = 'https://mendesamd-png.github.io'
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(); self.path=path; self.ids=set(); self.refs=[]; self.errors=[]; self.h1=0
        self.stack=[]
        self.feed(path.read_text())
    def handle_starttag(self, tag, pairs):
        a=dict(pairs)
        hidden='hidden' in a or any(item[1] for item in self.stack)
        if tag not in ('area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'):
            self.stack.append((tag,hidden))
        if 'id' in a:
            if a['id'] in self.ids:self.errors.append(f"duplicate id: {a['id']}")
            self.ids.add(a['id'])
        if tag=='h1' and not hidden:self.h1+=1
        if tag=='img' and not a.get('alt') and a.get('alt')!='': self.errors.append('image without alt')
        if tag=='a' and a.get('href'):self.refs.append(a['href'])
        if tag in ('img','script','audio','source') and a.get('src'):self.refs.append(a['src'])
        if tag=='link' and a.get('rel') in ('stylesheet','icon','preload','modulepreload') and a.get('href'):self.refs.append(a['href'])
    def handle_endtag(self, tag):
        for index in range(len(self.stack)-1,-1,-1):
            if self.stack[index][0]==tag:
                del self.stack[index:]
                break

def resolve(path):
    target=DIST/unquote(path.removeprefix(BASE))
    if target.is_dir():target=target/'index.html'
    elif not target.exists() and not target.suffix:target=target/'index.html'
    return target

pages={p:Page(p) for p in DIST.rglob('*.html')}
assert len(pages)>=17, 'Missing generated pages'
errors=[]; checked=0
for file,page in pages.items():
    errors.extend(f'{file.relative_to(DIST)}: {x}' for x in page.errors)
    if page.h1!=1:errors.append(f'{file.relative_to(DIST)}: expected one initially visible h1, got {page.h1}')
    route=BASE+str(file.relative_to(DIST)).removesuffix('index.html')
    for ref in page.refs:
        url=urlsplit(urljoin(ORIGIN+route,ref))
        if f'{url.scheme}://{url.netloc}' != ORIGIN:continue
        if not url.path.startswith(BASE):errors.append(f'{route}: link outside v3: {ref}');continue
        dest=resolve(url.path);checked+=1
        if not dest.is_file():errors.append(f'{route}: missing {ref}')
        elif url.fragment and dest in pages and unquote(url.fragment) not in pages[dest].ids:errors.append(f'{route}: missing anchor {ref}')
episodes=json.loads((ROOT/'src/data/podcast-episodes.json').read_text())
sources=json.loads((ROOT/'src/data/podcast-sources.json').read_text())
assert len({e['slug'] for e in episodes})==len(episodes), 'Duplicate episode slug'
for episode in episodes:
    assert all(key in sources for key in episode['sourceIds']), 'Unknown podcast source'
    audio=episode['audio']
    if audio and audio.startswith('/') and not (ROOT/'public'/audio.lstrip('/')).is_file():errors.append(f'Missing episode audio: {audio}')
if errors:raise SystemExit('\n'.join(errors))
print(f'OK: {len(pages)} pages, {checked} internal references, {len(episodes)} podcast episodes.')
