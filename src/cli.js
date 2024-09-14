 import { Command } from "commander";
 import genDiff from "./gendiff.js";
 
 const program = new Command();

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
  });
  
  
  program.parse(process.argv);