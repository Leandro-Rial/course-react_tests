import React from "react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas PrimeraApp", () => {
  // test('debe mostrar el mensaje "Helouda"', () => {
  //     const saludo = "Helouda"
  //     const { getByText } = render( <PrimeraApp saludo={saludo} /> )
  //     expect( getByText(saludo) ).toBeInTheDocument()
  // })

  test("debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Helouda";

    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Helouda";
    const subTitulo = "+1 SUB";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );

    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subTitulo);
  });
});
