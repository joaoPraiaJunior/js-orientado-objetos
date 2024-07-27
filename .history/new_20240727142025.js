function User (nome, email) {
    this.nome = nome;
    this.email = email;
    this.exibirInfos = function () {
        console.log(this.nome, this.email);
    }
}