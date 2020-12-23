//using babel in jest: https://jestjs.io/docs/en/getting-started 
import calculator from '../src/calculator';


describe("testing capitalize method", () => {
    test("converts hello to Hello", () => {
        expect(calculator.capitalize('hello')).toEqual('Hello');
    });
    test("Hello is not modified", () => {
        expect(calculator.capitalize('Hello')).toEqual('Hello');
    });
    test("dont't modify the number", () => {
        expect(calculator.capitalize(123)).toEqual(123);
    });
    test("if receive a null then return a null", () => {
        expect(calculator.capitalize(null)).toEqual(null);
    });
    test("if receive a void string then don't modify it", () => {
        expect(calculator.capitalize('')).toEqual('');
    });
  });
  describe("testing reverseString method", () => {
    test("converts hello to olleh", () => {
        expect(calculator.reverseString('hello')).toEqual('olleh');
    });
    test("dont't modify the number", () => {
        expect(calculator.reverseString(123)).toEqual(123);
    });
    test("if receive a null then return a null", () => {
        expect(calculator.reverseString(null)).toEqual(null);
    });
    test("if receive a void string then don't modify it", () => {
        expect(calculator.reverseString('')).toEqual('');
    });
  });