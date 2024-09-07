#!/usr/bin/env node

//@ts-check

import { Command } from 'commander';
import * as fs from 'fs';
import path from 'path';
import _ from 'lodash';

const program = new Command();

const parseFile = (filepath) => {
  const absoluteParse = path.resolve(process.cwd(), filepath);
  const fileContent = fs.readFileSync(absoluteParse, 'utf-8');
  return JSON.parse(fileContent);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const result = keys.map((key) => {
    if(!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if(!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if(data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  })
  return `{\n${result.join('\n')}\n}`;
}

program
  .version('0.0.1')
  .description('Compares two configuration and shows a difference')
  .arguments('filepath1')
  .arguments('filepath2')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2);
    console.log(diff);
  })
  
program.parse(process.argv);