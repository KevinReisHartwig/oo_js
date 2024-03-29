function Animal(nome) {
    if (this.constructor === Animal) {
        throw new Error("Você não pode instanciar um objeto da classe abstrata Animal diretamente.");
    }
    this.nome = nome;
}

function Cachorro(nome, raca) {
    Animal.call(this, nome);
    this.raca = raca;
}

function Gato(nome, cor) {
    Animal.call(this, nome);
    this.cor = cor;
}

const cachorro1 = new Cachorro("Akira", "husky siberiano");
const gato1 = new Gato("Tom", "Branco");
const cachorro2 = new Cachorro("Caramelo", "Pastor Alemão");
console.log(cachorro3);