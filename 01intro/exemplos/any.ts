let valorAny: any;
valorAny = 3;
valorAny = 'olá';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;

let valorString2: string = 'testão'
valorString2 = valorAny;

function somarString(string1: string, string2: string){
  return console.log(string1 + string2);
}

somarString(valorString, valorString2);