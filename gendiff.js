#!/usr/bin/env node

//@ts-check

import { Command } from 'commander';
import * as fs from 'fs';
import path from 'path';

const program = new Command();

const parseFile = (filepath) => {
  const absoluteParse = path.resolve(process.cwd(), filepath); // Приводим к абсолютным путям
  const fileContent = fs.readFileSync(absoluteParse, 'utf-8'); // Сравниваем синхронно
  return JSON.parse(fileContent);
}

program
  .version('0.0.1')
  .description('Compares two configuration and shows a difference')
  .arguments('filepath1')
  .arguments('filepath2')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);

    console.log('Parsed data from file1:', data1);
    console.log('Parsed data from file2:', data2);
  })
  
program.parse(process.argv);