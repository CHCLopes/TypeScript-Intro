let INPUT1 = document.querySelector('#input1') as HTMLInputElement;
let INPUT2 = document.querySelector('#input2') as HTMLInputElement;
let BUTTON = document.querySelector('#button');

function adicionarNumero(numero1:number, numero2:number, devePrintar:boolean, frase:string){
  let resultado = numero1 + numero2;
  if(devePrintar){
    console.log(frase + resultado)
  }
}

let devePrintar = true;
let frase = "O valor é: ";

if(BUTTON){
  BUTTON.addEventListener('click', () =>{
    if(INPUT1 && INPUT2){
      console.log(adicionarNumero(Number(INPUT1.value), Number(INPUT2.value), devePrintar, frase))
    }
  })
}