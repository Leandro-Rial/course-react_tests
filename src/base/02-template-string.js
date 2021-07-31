


const nombre   = 'Leandro';
const apellido = 'Rial';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;



 export function getSaludo( nombre = "Jorge Luis" ) {
    return 'Hola ' + nombre + "!";
}
