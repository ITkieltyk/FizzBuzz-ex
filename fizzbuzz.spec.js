const fizzbuzz = require("./fizzbuzz");
describe("Fizzbuzz", () => {
  it("Return Fizz when can be divided by 3", () => {
    expect(fizzbuzz.run(3)).toBe("Fizz");
    expect(fizzbuzz.run(6)).toBe("Fizz");
    expect(fizzbuzz.run(9)).toBe("Fizz");
  });
  it("Return Buzz when can be divided by 5", () => {
    expect(fizzbuzz.run(5)).toBe("Buzz");
    expect(fizzbuzz.run(10)).toBe("Buzz");
  });
  it("Return FizzBuzz when can be divided by 3 and 5", () => {
    expect(fizzbuzz.run(15)).toBe("FizzBuzz");
    expect(fizzbuzz.run(30)).toBe("FizzBuzz");
  });
});
