import { usuario } from "./Users";
import { thomas } from "./cliente1";

class usuario1 extends usuario {

}

var user = new usuario("Daniel de Andrade da Silva", "111.111.111-11", 1111);
user.informacaoCliente();
thomas.exibirSaldo();
thomas.emprestimo();
thomas.rendimentos();
thomas.exibirFatura();


