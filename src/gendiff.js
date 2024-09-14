#!/usr/bin/env node

//@ts-check

import _ from 'lodash';
import parseFile from './parsers.js';

const formatDiff = (key, data1, data2) => {
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
};

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  
  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  const result = keys.map((key) => formatDiff(key, data1, data2));
  
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
