let meuObjeto = {
    id: 1,
    nome: "Guilherme",
    idade: 19,
    saudacoes: (outraPessoa) => {
        console.log(`Olá ${outraPessoa}!`);
    }
}

console.log(meuObjeto);
meuObjeto.saudacoes("Fulano")

// let carro = new Object;
// carro.marca = "Nissan"
// carro.placa = "ABC123"

// console.log(carro);

