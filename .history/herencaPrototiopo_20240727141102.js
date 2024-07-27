const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);
    }
}


const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "2024-01-01",
    role: "admin",
    ativo: true,
    exibirInfos: function () {
        console.log('curso criado');
    },
};

//Aqui o objeto admin herda as propriedades do objeto user
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

