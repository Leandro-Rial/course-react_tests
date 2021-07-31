import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Prubas en 08-imp-exp, funciones de heroes", () => {
    test("getHeroeById debe de retornar un heroe por id", () => {

        const id = 1;

        const heroe = getHeroeById( id );

        const heroeData =  heroes.find( heroe => heroe.id );

        expect( heroe ).toEqual( heroeData )

    })
    
    test("getHeroeById debe de retornar undefined si heroe no existe", () => {

        const id = 10;

        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined )

    })

    test("getHeroesByOwner debe de retornar un arreglo con los heroes de DC", () => {

        const owner = "DC";

        const heroe = getHeroesByOwner( owner );

        const heroeData =  heroes.filter( heroe => heroe.owner === owner );

        expect( heroe ).toEqual( heroeData )

    })
    
    test("getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel", () => {

        const owner = "Marvel";

        const heroe = getHeroesByOwner( owner );

        expect( heroe.length ).toBe( 2 )

    })
})