

(function() {

function getEdad(){
  return 100+100;
}

const nombre  = 'Moises';
const apellido = 'Estrada';
const edad = 33;

//const salida  = nombre +  " " + apellido + " (" + edad + ") ";
const salida = `${ nombre } \n${ apellido } \n( ${ getEdad() + 100 } )`;

console.log(salida);
})();
