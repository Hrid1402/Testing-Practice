import {calculator} from '../src/calculator.js';

test("Add numbers", () => {
  expect(calculator.add(2,4)).toBe(6);
});
test("Subtract numbers", () => {
  expect(calculator.subtract(6,4)).toBe(2);
});
test("Multiply numbers", () => {
  expect(calculator.multiply(6,4)).toBe(24);
});
test("Divide numbers", () => {
  expect(calculator.divide(30,10)).toBe(3);
});
