
// Função construtora
function User(nome, email) {
    this.nome = nome;
    this.email = email;
    this.exibirInfos = function () {
        return `${this.nome} - ${this.email}`;
    }
}

// Instanciando um objeto
const user1 = new User('Juliana', 'j@j.com');
console.log(user1.exibirInfos());


const user = {
    init: function (nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function () {
        return `${this.nome}, ${this.email}`
    }
}

const juliana = Object.create(user);
juliana.init('Juliana', 'j@j.com');
console.log(juliana.exibirInfos());