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

  describe("testing sum method", () => {
    test("2+3=5", () => {
        expect(calculator.sum(2,3)).toEqual(5);
    });
    test("2+-3=-1", () => {
        expect(calculator.sum(2,-3)).toEqual(-1);
    });
    test("null if a==null", () => {
        expect(calculator.sum(null, 3)).toEqual(null);
    });
    test("null if b==null", () => {
        expect(calculator.sum(3,null)).toEqual(null);
    });
    test("null if a and b equals null", () => {
        expect(calculator.sum(null,null)).toEqual(null);
    });
    test("null if a=='hello'", () => {
        expect(calculator.sum('hello',3)).toEqual(null);
    });
    test("null if b=='hello'", () => {
        expect(calculator.sum(2,'hello')).toEqual(null);
    });
    test("null if a and b equals 'hello'", () => {
        expect(calculator.sum('hello','hello')).toEqual(null);
    });
  });

  describe("testing sum method", () => {
    test("2-3=-1", () => {
        expect(calculator.subtract(2,3)).toEqual(-1);
    });
    test("2--3=-1", () => {
        expect(calculator.subtract(2,-3)).toEqual(5);
    });
    test("null if a==null", () => {
        expect(calculator.subtract(null, 3)).toEqual(null);
    });
    test("null if b==null", () => {
        expect(calculator.subtract(3,null)).toEqual(null);
    });
    test("null if a and b equals null", () => {
        expect(calculator.subtract(null,null)).toEqual(null);
    });
    test("null if a=='hello'", () => {
        expect(calculator.subtract('hello',3)).toEqual(null);
    });
    test("null if b=='hello'", () => {
        expect(calculator.subtract(2,'hello')).toEqual(null);
    });
    test("null if a and b equals 'hello'", () => {
        expect(calculator.subtract('hello','hello')).toEqual(null);
    });
  });

  describe("testing product method", () => {
    test("2*3=6", () => {
        expect(calculator.product(2,3)).toEqual(6);
    });
    test("2*-3=-6", () => {
        expect(calculator.product(2,-3)).toEqual(-6);
    });
    test("null if a==null", () => {
        expect(calculator.product(null, 3)).toEqual(null);
    });
    test("null if b==null", () => {
        expect(calculator.product(3,null)).toEqual(null);
    });
    test("null if a and b equals null", () => {
        expect(calculator.product(null,null)).toEqual(null);
    });
    test("null if a=='hello'", () => {
        expect(calculator.product('hello',3)).toEqual(null);
    });
    test("null if b=='hello'", () => {
        expect(calculator.product(2,'hello')).toEqual(null);
    });
    test("null if a and b equals 'hello'", () => {
        expect(calculator.product('hello','hello')).toEqual(null);
    });
  });

  describe("testing split method", () => {
    test("2/3=0.66666", () => {
        expect(calculator.split(2,3)).toEqual(2/3);
    });
    test("2*-3=-6", () => {
        expect(calculator.split(2,-3)).toEqual(-2/3);
    });
    test("0/0 = undefined", () => {
        expect(calculator.split(0,0)).toEqual(undefined);
    });
    test("4/0 = undefined", () => {
        expect(calculator.split(4,0)).toEqual(undefined);
    });
    test("null if a==null", () => {
        expect(calculator.split(null, 3)).toEqual(null);
    });
    test("null if b==null", () => {
        expect(calculator.split(3,null)).toEqual(null);
    });
    test("null if a and b equals null", () => {
        expect(calculator.split(null,null)).toEqual(null);
    });
    test("null if a=='hello'", () => {
        expect(calculator.split('hello',3)).toEqual(null);
    });
    test("null if b=='hello'", () => {
        expect(calculator.split(2,'hello')).toEqual(null);
    });
    test("null if a and b equals 'hello'", () => {
        expect(calculator.split('hello','hello')).toEqual(null);
    });
  });