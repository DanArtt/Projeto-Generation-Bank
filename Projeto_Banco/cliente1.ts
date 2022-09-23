import {Banco} from './banco'
export {thomas}


class NovoCliente extends Banco {

  
}
const thomas = new NovoCliente()
thomas.nome = 'Daniel,'
thomas.saldoCorrente = 10000
thomas.saldoPoupanca = 500
thomas.saldoInvestimento = 5000
thomas.rendimentoInvestimento = (thomas.saldoInvestimento * 0.05)
thomas.fatura = {
    academia: 200,
    aluguel: 800,
    agua: 100,
    luz: 80
}



