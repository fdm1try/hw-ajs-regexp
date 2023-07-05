import Validator from '../app';

const dataList = [
  ['1name', false],
  ['name2', false],
  ['name111test1234case', false],
  ['-name', false],
  ['username_', false],
  ['Test-123_456Name', true],
];

const handler = test.each(dataList);
handler('Name validation %o, expected to be %s', (data, expected) => {
  const result = Validator.validateUsername(data);
  expect(result).toBe(expected);
});
