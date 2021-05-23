const getValue = (value) => value;

// 1. toBeNull matches only null
// 2. toBeUndefined matches only undefined
// 3. toBeDefined is the opposite of toBeUndefined
// 4. toBeTruthy matches anything that an if statement treats as true
// 5. toBeFalsy matches anything that an if statement treats as false
// 6. not is the opposite of the results

test('null', () => {
  expect(getValue(null)).toBeNull();
  expect(getValue(null)).toBeDefined();
  expect(getValue(null)).not.toBeUndefined();
  expect(getValue(null)).not.toBeTruthy();
  expect(getValue(null)).toBeFalsy;
});

test('zero', () => {
   expect(getValue(0)).not.toBeNull();
   expect(getValue(0)).toBeDefined();
   expect(getValue(0)).not.toBeUndefined();
   expect(getValue(0)).not.toBeTruthy();
   expect(getValue(0)).toBeFalsy();
});