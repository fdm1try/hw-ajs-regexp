import parsePhoneNumber from '../phonenumber';

const dataList = [
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['87 000 000 0000', '+870000000000'],
];

const handler = test.each(dataList);
handler('Parse phone number %o to %s', (data, expected) => {
  const result = parsePhoneNumber(data);
  expect(result).toBe(expected);
});
