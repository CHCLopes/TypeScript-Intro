const PESSOA = {
  nome: "Mariana",
  idade: 28,
  profissão: "desenvolvedora"
}

PESSOA.idade = 25;

const ANDRÉ: {nome: string, idade: number, profissao: string} = {
  nome: "André",
  idade: 25,
  profissao: "pintor"
}

const PAULA: {nome: string, idade: number, profissao: string} = {
  nome: "Paula",
  idade: 25,
  profissao: "Desenvolvedora"
}

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadorDeFutebol,
}

interface Pessoa {
  nome:string,
  idade:number,
  profissao?:Profissao
}

interface Estudante extends Pessoa {
  materias: string[]
}

const VANESSA: Pessoa = {
  nome: 'Vanessa',
  idade: 23,
  profissao:Profissao.Desenvolvedora
}

const MARIA: Pessoa = {
  nome: 'Maria',
  idade: 23,
  profissao:Profissao.Desenvolvedora
}

const JESSICA: Estudante = {
  nome: 'Jessica',
  idade: 28,
  materias: ['Matematica', 'programação']
}

function listar(lista: string[]){
  for (const item of lista) {
    console.log("- " + item);
  }
}

listar(JESSICA.materias);