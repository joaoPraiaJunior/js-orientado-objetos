import User from "./User.js";

// Admin é subclasse de User
class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        // Chamando o construtor da superclasse
        super(nome, email, nascimento, role, ativo);
    }
}