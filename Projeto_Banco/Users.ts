export class usuario {
    clienteNome: string;
    clienteCpf: string;
    clienteSenha: number;

        constructor(clienteNome: string, clienteCpf: string, clienteSenha: number) {
            this.clienteNome = clienteNome;
            this.clienteCpf = clienteCpf;
            this.clienteSenha = clienteSenha;

        }
        informacaoCliente(){
            console.log(`Cliente: ${this.clienteNome}`);
            console.log(`CPF: ${this.clienteCpf}`);
            console.log(`Senha: ${this.clienteSenha}`);
        }
    }
    