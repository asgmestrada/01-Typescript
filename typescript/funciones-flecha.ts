

(function() {
const miFuncion = function(a: string){
  return a.toUpperCase();
}

const miFuncionF = (a: string) => a.toUpperCase();

const sumarN = function(a:number, b:number){
  return a + b;
}
const sumarNF = (a:number, b:number) => a + b;

const hulk = {
  nombre: 'Hulk',
  smash()
  {
    setTimeout(() =>   {
    console.log(`${ this.nombre } smash!!!`);
    }, 1000);
  }
}

hulk.smash();

//console.log(sumarN(10,0));
//console.log(sumarNF(5,5));
//console.log(miFuncion('Normal'));
//console.log(miFuncionF('Flecha'));
})();
