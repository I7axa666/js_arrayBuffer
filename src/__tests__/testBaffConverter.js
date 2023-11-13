import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../classes/arBufConv';

test('test buffetConverter', () => {
  const equalData = { data: { user: { id: 1, name: 'Hitman', level: 10 } } };
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(JSON.parse(converter.toString())).toEqual(equalData);
});
