const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);
    }
}

//user.exibirInfos();


//Aqui o método é chamado sem o objeto, logo o this não é referenciado ao objeto user
const exibir = user.exibirInfos;
exibir(); // undefined undefined undefined undefined undefined

const exibirNovamente = function () {
    console.log(this.nome, this.email);
}

//Aqui o objeto é atrelado ao bind e o this é referenciado ao objeto user
const exiibirNomeEmail = exibirNovamente.bind(user);
exiibirNomeEmail(); // Juliana