import {cipher} from '../src/caesarCipher.js';

test("Key 2", () => {
  expect(cipher("hello everyone", 2)).toBe("jgnnq gxgtaqpg");
});
test("key 8", () => {
  expect(cipher("HOLA A TODOS!", 8)).toBe("PWTI I BWLWA!");
});
test("key 0", () => {
  expect(cipher("Have a good day.", 0)).toBe("Have a good day.");
});
