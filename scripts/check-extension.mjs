import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const manifest = JSON.parse(readFileSync(new URL('manifest.json', root), 'utf8'));

assert.equal(manifest.manifest_version, 3);
assert.match(manifest.version, /^\d+\.\d+\.\d+$/);
assert.equal(manifest.content_scripts.length, 1);

const [content] = manifest.content_scripts;
assert.deepEqual(content.matches, ['https://client.schwab.com/*']);
assert.deepEqual(content.js, ['translations.js', 'translate.js']);
assert.deepEqual(content.css, ['positions.css']);

for (const file of [...content.js, ...content.css]) {
  const path = fileURLToPath(new URL(file, root));
  assert.ok(readFileSync(path).length > 0, `${file} is empty`);
  if (file.endsWith('.js')) execFileSync(process.execPath, ['--check', path], { stdio: 'inherit' });
}

if (process.env.GITHUB_REF_TYPE === 'tag') {
  assert.equal(process.env.GITHUB_REF_NAME, `v${manifest.version}`, 'Tag must match manifest.json');
}

console.log(`Extension v${manifest.version} passed validation.`);
