const alunos = [
    { nome: 'kevin', nota: 10 },
    { nome: 'reis', nota: 9 },
    { nome: 'hartwig', nota: 8 },
    { nome: 'naruto', nota: 5 },
    { nome: 'boruto', nota: 3 }
];

function alunosAprovados(alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= 6;
    });
}

console.log(alunosAprovados(alunos));