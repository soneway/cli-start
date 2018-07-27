#!/usr/bin/env node
console.log('init start');
const program = require('commander');

program.parse(process.argv);

console.dir(program.args);
