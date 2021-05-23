const add = (a,b) => a+b

// 1. toBeGreaterThan same like (>)
// 2. toBeGreaterThanOrEqual same like (>=)
// 3. toBeLessThan same like (<)
// 4. toBeLessThanOrEqual same like (<=)
// 5. toBeCloseTo use for floating point equality

test('two plus two' , () => {
    expect(add(2,2)).toBeGreaterThan(3);
    expect(add(2,2)).toBeGreaterThanOrEqual(3.5);
    expect(add(2,2)).toBeLessThan(5);
    expect(add(2,2)).toBeLessThanOrEqual(4.5);

})

test('adding floating point numbers', () => {
    // This won't work because of rounding error
    // expect(add(0.1,0.2)).toBe(0.3);

    // This works
    expect(add(0.1,0.2)).toBeCloseTo(0.3);
})