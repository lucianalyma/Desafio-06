let sobreMim = {
    nome: "Luciana",
    idade: 32,
    formada: true
    }
    sobreMim.time = "Vitória";
console.log(sobreMim);
delete sobreMim.idade;
console.log(sobreMim);

const cadastro = [
     {
     nome: "Luciana",
    idade: 30,
    telefone: 2131231,
    amigos: ["Karen", "Cosme", "Isa", "Pam"]
    },
    {
    nome: "Karen",
    idade: 31,
    telefone: 2131231,
    amigos: ["Luciana", "Cosme", "Isa", "Pam"]
    },
    {
    nome: "Cosme",
    idade: 32,
    telefone: 2131231,
    amigos: ["Karen", "Luciana", "Isa", "Pam"]
    },
    {
    nome: "Isa",
    idade: 33,
    telefone: 2131231,
    amigos: ["Karen", "Cosme", "Luciana", "Pam"]
    },
    {
        nome: "Pam",
    idade: 34,
    telefone: 2131231,
    amigos: ["Karen", "Cosme", "Isa", "Luciana"]
    },
];
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[2]);
console.log(cadastro[2].amigos[3]);
console.log(cadastro[3].amigos[2]);
console.log(cadastro[4].amigos[1]);