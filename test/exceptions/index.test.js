const compileCodes = () => {
    throw new Error('you are using the wrong JDK')
}

// toThrow to test whether a particular function throws an error when it's called
// Note: the function that throws an exception needs to be invoked within a wrapping 
// function otherwise the toThrow assertion will fail.

test('compiling aandroid goes as expected', () => {
    expect(() => compileCodes()).toThrow()
    expect(() => compileCodes()).toThrow(Error)

    // can be use to exact error message or a regexp
    expect(() => compileCodes()).toThrow('you are using the wrong JDK')
    expect(() => compileCodes()).toThrow(/JDK/)
})