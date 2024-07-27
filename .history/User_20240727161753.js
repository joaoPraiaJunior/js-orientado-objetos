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

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    //set altera o valor da propriedade fora da superclasse
    set nome(novoNome) {
        if (novoNome === '') throw new Error('Nome inválido');
        this.#nome = novoNome;
    }

    // exibirInfos() {
    //     return `${this.nome}, ${this.email}`;
    // }

    exibirInfos() {
        if (this.role === "estudante") {
            return `dados estudante: ${this.nome}`
        }
        if (this.role === "admin") {
            return `dados admin: ${this.nome}, ${this.role}`
        }
        if (this.role === "Docente") {
            return `dados docente: ${this.nome}, ${this.email}`
        }
    }

    //Método estático pertence a propria classe
    static exibirInfosGenericas(nome, email) {
        return `${nome}, ${email}`
    }
}

// const novoUser = new User('Juliana', 'j@j.com', '2024-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

//User é prototipo de novoUser?
// console.log(User.prototype.isPrototypeOf(novoUser)); // true