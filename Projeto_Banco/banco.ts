export {Banco}
import {thomas} from './cliente1'

class Banco {
    nome:string
    saldoCorrente:number
    saldoPoupanca:number
    saldoInvestimento:number
    rendimentoInvestimento:number
    fatura: object

    exibirSaldo(){
        const saldoTotal:number = this.saldoCorrente + this.saldoPoupanca + this.saldoInvestimento + this.rendimentoInvestimento
        console.log(`${this.nome} seu saldo total em conta.\nSaldo: ${saldoTotal}\n\nSaldo Corrente: ${this.saldoCorrente}\nSaldo Poupança: ${this.saldoPoupanca}\nSaldo Investimento: ${this.saldoInvestimento}`)
    }

    emprestimo(){
        if (this.saldoCorrente > 500){
            this.saldoCorrente += 500
        }else if (this.saldoCorrente < 500){
            console.log('Saldo insuficiente para solicitar empréstimo.')
        }
    }

    rendimentos(){
        if (this.saldoInvestimento >= 500 && this.saldoInvestimento < 1000){
            this.saldoInvestimento *= 0.05
            console.log(this.saldoInvestimento)
        }else if (this.saldoInvestimento >= 1000 && this.saldoInvestimento < 3000){
            this.saldoInvestimento *= 0.07
            console.log(this.saldoInvestimento)
        } else if (this.saldoInvestimento > 3000) {
            this.saldoInvestimento *= 0.1
            console.log(`Saldo de rendimentos: ${this.saldoInvestimento}`)
        } else {
            console.log('Saldo de investimentos insuficiente para render.')
        }
    }

    exibirFatura(){
        console.log(this.fatura)
    }
   
}