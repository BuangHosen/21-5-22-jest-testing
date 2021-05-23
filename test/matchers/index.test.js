const sum = (a,b) => a+b
const subtract = (a,b) => a-b
const cloneArray = (array) => [...array]

test('Properly adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});


test('Properly subtracting two numbers', () => {
  expect(subtract(1, 2)).toBe(-1);
});


test('object assignment', () => {
  const data = [1, 2, 3];
  expect(cloneArray(data)).toEqual(data);
});