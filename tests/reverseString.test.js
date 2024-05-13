import {reverseSTR} from '../src/reverseString.js';

test("normal world", () => {
  expect(reverseSTR("hola")).toBe("aloh");
});
test("with upper case and lower case", () => {
  expect(reverseSTR("Hola")).toBe("aloH");
});
test("With spaces", () => {
  expect(reverseSTR("How are you?")).toBe("?uoy era woH");
});
test("Same word backwards", () => {
  expect(reverseSTR("ANA")).toBe("ANA");
});
