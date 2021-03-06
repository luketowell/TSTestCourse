
import {toUppercase, parseUrl}  from '../app/Utils';

describe("Utils test suite", () => {

    beforeEach(() => {
        console.log("starting new test")
    })
    test("toUppercase will be defined", () => {
        expect(toUppercase).toBeDefined()
    });

    test("toUppercase will return an uppercase string", () => {
        const string = 'abc'
        expect(toUppercase(string)).toBe('ABC')
    })

    test("Expect parseUrl to return a parsed URL", () => {
        const parsedUrl = parseUrl('http://www.google.com/login');

        expect(parsedUrl.href).toBe('http://www.google.com/login');
        expect (parsedUrl.protocol).toBe('http:');
        expect (parsedUrl.query).toEqual({});
    })


    test("parseUrl with Query", () => {
        const parsedUrl = parseUrl('http://www.google.com/login?user=user&password=password')

        const expectedQuery = {
            user:'user',
            password:'password'
        }

        expect(parsedUrl.query).toEqual(expectedQuery);
    })

    test("invalid url should cause error", () => {
        const throwError = () => {
            parseUrl('')
        }
        expect(throwError).toThrowError();
    })
})