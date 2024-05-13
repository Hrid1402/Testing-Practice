import {capitalize} from '../src/capitalize.js';

test("full lowercase word", () => {
  expect(capitalize("hola")).toBe("Hola");
});
test("full upercase word", () => {
  expect(capitalize("ADIOS")).toBe("Adios");
});
test("already capitalize word", () => {
  expect(capitalize("Roberto")).toBe("Roberto");
});
test("Both types", () => {
  expect(capitalize("TuSrC")).toBe("Tusrc");
});
