import User from "./User.js";

// Admin é subclasse de User
class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        // Chamando o construtor da superclasse
        super(nome, email, nascimento, role, ativo);
    }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());