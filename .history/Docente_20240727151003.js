import User from "./User.js";

//Toda classe é criada no modo Strict mode por padrão
// Docente é subclasse de User
export default class Docente extends User {
    constructor(nome, email, nascimento, role = "Docente", ativo = true) {
        // Chamando o construtor da superclasse
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(nomeEstudante, curso) {
        return `Estudante ${nomeEstudante} aprovado no curso ${curso}, responsavel ${this.nome}`;
    }
}

//Classes não são hoisted
const novoDocente = new Docente("Ana", "a@a.com", "2024-01-01");
console.log(novoDocente.aprovarEstudante("Marcela", "JS"));