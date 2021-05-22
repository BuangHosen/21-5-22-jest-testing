const cloneArray = require('./cloneArray');

test('object assignment', () => {
  const data = [1, 2, 3];
  expect(cloneArray(data)).toEqual(data);
});
