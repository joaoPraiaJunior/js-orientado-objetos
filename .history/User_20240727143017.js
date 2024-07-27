class User {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    exibirInfos() {
        return `${this.nome} - ${this.email}`;
    }
}