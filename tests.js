// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function')
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe('string')
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello('Jane')).toBe("Hello, Jane!")
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello('Alex')).toBe("Hello, Alex!")
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello('Pat')).toBe("Hello, Pat!")
    });
    it('should return "Hello, World! when true"', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World! when false"', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello(null)).toBe("Hello, World!")
        expect(sayHello("")).toBe("Hello, World!")
        expect(sayHello(2.3)).toBe("Hello, World!")
        expect(sayHello("5")).toBe("Hello, World!")
        expect(sayHello([])).toBe("Hello, World!")
    });
});

describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function")
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return false when passed anything other than 5', function () {
        expect(isFive()).toBe(false)
    });
});

describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function")
    });
    it('should return a boolean value', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('should return true when number is even', function () {
        expect(isEven(4)).toBe(true)
    });
    it('should return false when number is odd', function () {
        expect(isEven(3)).toBe(false)
    });
});

describe("isVowel", function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function")
    });
    it('should return a boolean value', function () {
        expect(typeof isVowel()).toBe("boolean")
    });
    it('should return true when passed "a"', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true when passed "A"', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should return false when passed "y"', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return false when passed 4', function () {
        expect(isVowel("4")).toBe(false)
    });
    it('should return false when passed true', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should return false when passed "banana"', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should return false when letter is not a vowel', function () {
        expect(isVowel()).toBe(false)
    });
});