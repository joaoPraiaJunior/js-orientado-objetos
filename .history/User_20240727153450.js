export default class User {

    //Encapsulamento
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    //get dá acesso ao valor da propriedade fora da superclasse
    get nome() {
        return this.#nome;
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo,
        });
    }
    exibirInfos() {
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}`;
    }
}

// const novoUser = new User('Juliana', 'j@j.com', '2024-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

//User é prototipo de novoUser?
// console.log(User.prototype.isPrototypeOf(novoUser)); // true