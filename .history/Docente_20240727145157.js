import User from "./User.js";

// Docente é subclasse de User
class Docente extends User {
    constructor(nome, email, nascimento, role = "Docente", ativo = true) {
        // Chamando o construtor da superclasse
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(nomeEstudante, curso) {
        return `Estudante ${nomeEstudante} aprovado no curso ${curso}`;
    }
}