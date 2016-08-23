import fs from 'fs';
import colors from 'colors';

/* eslint-disable no-console */

const BUF_LENGTH = 64*1024;
let buff = new Buffer(BUF_LENGTH);
let fdr = fs.openSync('src/html/index.html', 'r');
let fdw = fs.openSync('target/index.html', 'w');
let bytesRead = 1;
let pos = 0;
while (bytesRead > 0) {
  bytesRead = fs.readSync(fdr, buff, 0, BUF_LENGTH, pos);
  fs.writeSync(fdw, buff, 0, bytesRead);
  pos += bytesRead;
}

fs.closeSync(fdr);
fs.closeSync(fdw);


