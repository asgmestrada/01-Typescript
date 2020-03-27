

(() => {
const avenger = {
  nombre: 'Steve',
  clave: 'Capitan America',
  poder: 'Droga'
}



const extraer = ({nombre, clave, poder}:any) => {
  //const {nombre, clave, poder} = avenger;

  console.log(nombre);
  console.log(clave);
  console.log(poder);
}
 //extraer(avenger);

const avengers: string[] = ['Thor', 'Ironmas', ' Spiderman'];
const [loki,hombre,araña] = avengers;
//console.log( loki );
//console.log( hombre );
//console.log( araña );



const extraerArr = ([thor, ironman,spiderman]: string []) => {
  console.log(thor);
  console.log(ironman);
  console.log(spiderman);
}

extraerArr(avengers);
})();
