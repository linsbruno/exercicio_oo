function Pessoa (nome, idade, identificador, salario){
    this.nome = nome;
    this.idade=idade;
    this.identificador=identificador;
    this.salario=salario;

}

function Aluno (nome, idade, matricula ){
    Pessoa.call(this, nome, idade , "Aluno", "não se aplica")

    this.matricula= matricula;
}

function Professor(nome, idade){
    Pessoa.call(this, nome, idade, "Professor", 5000)

    this.nome = nome;
    this.idade = idade;
}



// Instância de Pessoa
const pessoa1 = new Pessoa("João", 25, "12345", 2500);

// Instância de Aluno
const aluno1 = new Aluno("Maria", 20, "1234567", "3ª série");

// Instância de Professor
const professor1 = new Professor("Carlos", 35);

console.log(pessoa1);   
console.log(aluno1);    
console.log(professor1); 