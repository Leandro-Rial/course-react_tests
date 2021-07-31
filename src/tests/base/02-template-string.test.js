import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Test in folder 02-template-string.js", () => {
  test("getSaludo must be return 'Hola Leandro!'", () => {
    const nombre = "Leandro";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre + "!");
  });

  test("getSaludo debe retornar Hola Jorge Luis! si no hay argumento en nombre", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Jorge Luis!");
  });
});
