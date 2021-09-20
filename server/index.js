import express from 'express';
import ngrok from 'ngrok';
import markup from './helpers/markup.js';

import * as db from './store.js';

const app = express();
app.use(express.json());

app.post('/install', async function(req, res) {
  const { body } = req;
  await db.addInstall(body);
  res.send();
});

app.post('/uninstall', async function(req, res) {
  const { body } = req;
  await db.removeInstall(body);
  res.send();
});

app.post('/updowngrade', async function(req, res) {
  const { body } = req;
  await db.upgradeInstall(body);
  res.send();
});

app.post('/webhooks', function(req, res) {
  const { body } = req;
  console.log(body);
  res.send();
})

app.listen(8000, async function() {
  const url = await ngrok.connect(8000);
  await db.init();
  console.log('Duda Callbacks:');
  console.log(`  install: ${url}/install`);
  console.log(`  uninstall: ${url}/uninstall`);
  console.log(`  updowngrade: ${url}/updowngrade`);
});