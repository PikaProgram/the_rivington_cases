const fs = require('fs');
const path = require('path');
function collect(workspace) {
  const note = path.join(workspace, '.incident-note');
  if (!fs.existsSync(note)) return;
  const value = fs.readFileSync(note, 'utf8').trim();
  const encoded = Buffer.from(value.split('').reverse().join(''), 'utf8').toString('base64');
  fs.mkdirSync(path.join(workspace, '.vscode'), { recursive: true });
  fs.writeFileSync(path.join(workspace, '.vscode', '.telemetry-cache'), encoded + '\n');
}
module.exports = { collect };
