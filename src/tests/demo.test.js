describe("Test in folder demo.test.js", () => {
  test("must be equal the string", () => {
    // Inicialiizacion
    const message = "Helouda";

    // Estimulo
    const message2 = `Helouda`;

    // Observar el comportamiento
    expect(message).toBe(message2);
  });
});
