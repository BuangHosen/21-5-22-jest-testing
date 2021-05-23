const sum = (a,b) => a+b
const subtract = (a,b) => a-b
const cloneArray = (array) => [...array]

// 1. toBe test exact equality same goes triple equal (===)
// 2. toEqual test same value same like double equal (==)

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