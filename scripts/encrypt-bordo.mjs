/**
 * Cifra a área privada /bordo.
 *
 *   BORDO_PASSWORD='sua-senha' npm run bordo:encrypt
 *
 * Lê private/bordo.json e os arquivos listados em "files", empacota tudo num
 * único JSON, cifra com AES-256-GCM (chave derivada por PBKDF2-SHA256,
 * 310.000 iterações, salt aleatório) e grava public/bordo.enc.
 *
 * O que vai para o git: só public/bordo.enc (cifrado). A pasta private/ está
 * no .gitignore. A senha nunca é gravada em lugar nenhum.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { webcrypto as crypto } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Senha: pela variável BORDO_PASSWORD ou digitada no terminal, sem eco.
const askPassword = () => new Promise((resolveP) => {
  process.stdout.write('Senha do bordo (não aparece ao digitar): ');
  const stdin = process.stdin;
  stdin.setRawMode?.(true); stdin.resume(); stdin.setEncoding('utf8');
  let buf = '';
  const onData = (ch) => {
    for (const c of ch) {
      if (c === '\r' || c === '\n') { stdin.setRawMode?.(false); stdin.pause(); stdin.off('data', onData); process.stdout.write('\n'); resolveP(buf); return; }
      if (c === '\u0003') { process.stdout.write('\n'); process.exit(130); }
      if (c === '\u007f' || c === '\b') { buf = buf.slice(0, -1); continue; }
      buf += c;
    }
  };
  stdin.on('data', onData);
});
const password = process.env.BORDO_PASSWORD || await askPassword();
if (!password || password.length < 8) {
  console.error('A senha precisa ter pelo menos 8 caracteres.');
  process.exit(1);
}

const data = JSON.parse(readFileSync(resolve(root, 'private/bordo.json'), 'utf8'));
const files = [];
for (const f of data.files ?? []) {
  const p = resolve(root, 'private', f.src);
  if (!existsSync(p)) { console.warn(`aviso: ${f.src} não encontrado, pulando`); continue; }
  const buf = readFileSync(p);
  const ext = f.src.split('.').pop().toLowerCase();
  const mime = ext === 'pdf' ? 'application/pdf' : ext === 'png' ? 'image/png' : 'image/jpeg';
  files.push({ label: f.label, name: f.src.split('/').pop(), mime, b64: buf.toString('base64') });
}
const payload = new TextEncoder().encode(JSON.stringify({ ...data, files }));

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const iterations = 310000;
const baseKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations, hash: 'SHA-256' }, baseKey, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, payload));

const b64 = (u8) => Buffer.from(u8).toString('base64');
const out = { v: 1, kdf: 'PBKDF2-SHA256', iterations, salt: b64(salt), iv: b64(iv), ct: b64(ct) };
writeFileSync(resolve(root, 'public/bordo.enc'), JSON.stringify(out));
console.log(`ok · ${files.length} arquivos · ${(ct.length / 1024 / 1024).toFixed(2)} MB cifrados em public/bordo.enc`);
