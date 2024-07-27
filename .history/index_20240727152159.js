import Admin from "./Admin.js";
import Docente from "./Docente.js";
import User from "./User.js";


const novoUser = new User('Juliana', 'j@j.com', '2024-01-01');
console.log(novoUser.exibirInfos());

const novoDocente = new Docente("Ana", "a@a.com", "2024-01-01");
console.log(novoDocente.aprovarEstudante("Marcela", "JS"));

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso("JS", 10));