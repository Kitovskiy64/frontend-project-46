#!/usr/bin/env node

//@ts-check

import { Command } from 'commander';
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration and shows a difference')
  .arguments('filepath1')
  .arguments('filepath2')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')

program.parse();