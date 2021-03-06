const {toUppercase} = require('../app/Utils');

describe("Utils test suite", () => {
    test("toUppercase will be defined", () => {
        expect(toUppercase).toBeDefined();
    });

    test("toUppercase will return an uppercase string", () => {
        const string = 'abc'
        expect(toUppercase(string)).toBe('ABC')
    })
})