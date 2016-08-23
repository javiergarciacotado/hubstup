import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.prod.js';
import open from 'open';

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('target'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../target/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
