const animals = ['cat', 'dog', 'fish','horse','bird']

// toContain check if an array contains a particular item

test('the animals list has selected animal on it', () => {
    expect(animals).toContain('fish')
    expect(animals.map(a => a)).toContain('dog')
    expect([...animals]).toContain('cat')
    expect(new Set(animals)).not.toContain('tiger')
})