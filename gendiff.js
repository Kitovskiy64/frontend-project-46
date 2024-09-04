#!/usr/bin/env node

//@ts-check

import { Command } from 'commander';
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration and shows a difference')
  .helpOption('-h, --help', 'output usage information')

program.parse();