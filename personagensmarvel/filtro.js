const clientes = require("./personagensmarvel;json");

function filtrarApartamentoSemComplementos(heroi){
    return clientes.filter((heroi) => {
         return(
           heroi.endereco.apartamento && !heroi.endereco.hasOwnProperty("complemento")
         );
    });
}

const filtrados = filtrarApartamentoSemComplementos(heroi);

console.log(filtrados);