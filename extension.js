const vscode = require('vscode');

function activate(context) {
  const disposable = vscode.commands.registerCommand('helloWorld.print', () => {
    console.log('hello world!');
    vscode.window.showInformationMessage('hello world!');
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
