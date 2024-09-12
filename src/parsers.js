import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const absoluteParse = path.resolve(process.cwd(), filepath);
  const fileContent = fs.readFileSync(absoluteParse, 'utf-8');

  const ext = path.extname(filepath).toLowerCase();

  switch (ext) {
    case '.json':
      return JSON.parse(fileContent);
    case '.yml':
    case '.yaml':
      return yaml.load(fileContent);
    default:
      throw new Error(`Unsupported file format: ${ext}`);
  }
};

export default parseFile;
