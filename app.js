require('babel-core/register');
// require('babel-core').transform('code', {
//   presets: ['stage-0', 'react', 'es2015']
// });

const open = require('open');
const http = require('http');
const fs = require('fs');
const express = require('express');

const port = process.env.PORT || 3000;
const html = fs.readFileSync('index.html');
const server = express();

// server.get('/', function(req, res) {
//   const markup = renderComponentWithRoot();
//   console.log(markup);
//   res.status(200).send(markup);
// });

server.get('*', require('./src').serverMiddleware);

server.listen(port, 'localhost', (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`==> 🌎 Listening on port %s. Open up http://localhost:${port}/ in your browser.`);
  if (!process.env.IS_EBS) {
    open(`http://localhost:${port}`);
  }
});
