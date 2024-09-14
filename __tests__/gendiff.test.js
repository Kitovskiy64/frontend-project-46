import path from 'path';
import genDiff from "../src/gendiff.js";

const runTest = (ext, expected) => {
  const filepath1 = path.resolve('__fixtures__', `file1.${ext}`);
  const filepath2 = path.resolve('__fixtures__', `file2.${ext}`)
  expect(genDiff(filepath1, filepath2).toBe(expected));
}

test('gendiff сравнение двух плоских JSON файлов', () => {
  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  runTest('json', expected);
});

test('gendiff сравнение двух плоских yml файлов', () => {
  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  runTest('yml', expected);
})

