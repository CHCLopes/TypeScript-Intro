let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTeste:string = 'verificar';
stringTeste = anyEstaDeVolta;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';

let stringTeste2: string = 'agora vai';
//stringTeste2 = unknowValor; Se usar fora da validação dá erro


if (typeof unknowValor === 'string'){
  stringTeste2 = unknowValor;
}

function jogaErro(erro:string, codigo: number):never {
  throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500)