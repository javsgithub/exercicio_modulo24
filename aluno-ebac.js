function AlunoEbac (nome, sexo, dataDeEntrada) {
    this.nome = nome;
    this.sexo = sexo;
    this.dataDeEntrada = dataDeEntrada;

    this.dizIdade = function (idade) {
        console.log("Tenho " +idade+ " anos e curso " +this.nomeDoCurso+ " na Ebac." );
    }
}

function AlunoDeTecnologia (nome, sexo, dataDeEntrada, nomeDoCurso, modulosCursados) {
    this.nomeDoCurso = nomeDoCurso;
    this.modulosCursados = modulosCursados;
    
    AlunoEbac.call(this, nome, sexo, dataDeEntrada);
}

function AlunoDeMarketing (nome, sexo, dataDeEntrada, nomeDoCurso, modulosCursados) {
    this.nomeDoCurso = nomeDoCurso;
    this.modulosCursados = modulosCursados;
    //this.transicaoProfissional = transicaoProfissional;
    
    AlunoEbac.call(this, nome, sexo, dataDeEntrada);
}

const alunoEbac1 = new AlunoEbac("Jefferson", "masculino", "08/12/2023");
const alunoDeTecnologia1 = new AlunoDeTecnologia("João", "masculino", "15/10/2023","Engenheiro Front-End", "12");
const alunoDeTecnologia2 = new AlunoDeTecnologia("Alessandra", "feminino", "15/02/2024","Desenvolvedor Full Stack Python", "5");
const alunoDeMarketing1 = new AlunoDeMarketing("Ricardo", "masculino", "02/09/2023","Copywriter", "8");

console.log(alunoEbac1);
console.log(alunoDeTecnologia1);
alunoDeTecnologia1.dizIdade(18);
console.log(alunoDeTecnologia2);
alunoDeTecnologia2.dizIdade(22);
console.log(alunoDeMarketing1);
alunoDeMarketing1.dizIdade(40);