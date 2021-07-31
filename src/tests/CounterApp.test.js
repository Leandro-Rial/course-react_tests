import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas CounterApp", () => {

    let wrapper = shallow(<CounterApp />)
    
    beforeEach(() => {
        wrapper = shallow(<CounterApp />)
    })

    test('debe de mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot()

    });

    test("debe de mostrar el valor por defecto de 100", () => {

        const wrapper = shallow(<CounterApp value={100} />)

        const valorCounterApp = wrapper.find("h2").text()

        expect( valorCounterApp ).toBe( "100" )

    })

    test('debe de incrementar con el increment', () => {
        
        wrapper.find("button").at(0).simulate('click');

        const valorCounterApp = wrapper.find("h2").text().trim()

        expect( valorCounterApp ).toBe("11")

    });

    test('debe de decrementar con el decrement', () => {
        
        wrapper.find("button").at(2).simulate('click');

        const valorCounterApp = wrapper.find("h2").text().trim()

        expect( valorCounterApp ).toBe("9")

    });

    test('debe de resetar el valor', () => {
        
        const wrapper = shallow(<CounterApp value={105} />)
        
        wrapper.find("button").at(0).simulate('click');
        wrapper.find("button").at(0).simulate('click');
        wrapper.find("button").at(1).simulate('click');

        const valorCounterApp = wrapper.find("h2").text().trim()

        expect( valorCounterApp ).toBe("105")

    });
})