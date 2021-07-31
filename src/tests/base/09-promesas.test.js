import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Debe retornar los heroes por Id Async", () => {
  test("Prueba de getHeroe async", (done) => {
    const id = 1;

    jest.setTimeout(7000);

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);

      done();
    });
  });

  test("debe de obtener un error si el heroe por id no existe", ( done ) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el heroe");
      done()
    });
  });
});
