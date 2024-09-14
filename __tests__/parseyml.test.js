import path from 'path';
import genDiff from '../src/gendiff.js';

test('gendiff сравнение двух плоских yml файлов', () => {
  const filepath1 = path.resolve('__fixtures__', 'file1.yml');
  const filepath2 = path.resolve('__fixtures__', 'file2.yml');
  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  expect(genDiff(filepath1, filepath2)).toBe(expected);
})
