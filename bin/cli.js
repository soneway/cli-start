#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');

program
  .version(package.version, '-v, --version')
  .command('init <dirname>', 'init new project')
  .parse(process.argv);
