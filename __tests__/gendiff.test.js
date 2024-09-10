import path from 'path';
import genDiff from "../src/gendiff.js";

test('gendiff сравнение двух плоских JSON файлов', () => {
  const filepath1 = path.resolve('__fixtures__', 'file1.json');
  const filepath2 = path.resolve('__fixtures__', 'file2.json')
  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
  }`;

  expect(genDiff(filepath1, filepath2)).toBe(expected);
});

