

(() => {

console.log('inicio');

//resolve:lo que retorna cuando todo funciona bien
//reject: lo que retorna si hay algun error
const prom1 = new Promise((resolve, reject)=>{

setTimeout(() => {
  reject('Se termino el timeout');
}, 1000);

});

prom1
      .then((mensaje) => console.log( mensaje ))
      .catch(err => console.warn(err));
console.log('fin');









})();
