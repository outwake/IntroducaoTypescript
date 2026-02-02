import leia= require("readline-sync")
import Queue = require("../Queue");

const fila = new Queue<string>();
let continuar: string = "S";

let menu1 : number ;

while(continuar==="S"){
console.log("***************************")
console.log("|1| Adicionar Cliente")
console.log("|2| Listar Clientes")
console.log("|3| Retirar Cliente da Lista")
console.log("|0| Sair")
console.log("***************************")

menu1= leia.questionInt("Qual operação deseja fazer?")

switch(menu1){

    case 1:
    fila.enqueue(leia.question("Digite o nome do cliente:"))
    console.log("Cliente Adicionado.")
    continuar = leia.keyIn("Deseja fazer mais alguma operação? ( S )Sim ( N )Não \n").toUpperCase(); 
    break;

    case 2:
    fila.printQueue();
    continuar = leia.keyIn("Deseja fazer mais alguma operação? ( S )Sim ( N )Não \n").toUpperCase(); 
    break;

    case 3:
        if( fila.isEmpty()== true){
            console.log("LISTA VAZIA");
        }
        else{
           fila.dequeue(); 
           console.log("\n O Cliente foi Chamado!");
        }
        continuar = leia.keyIn("Deseja fazer mais alguma operação? ( S )Sim ( N )Não \n").toUpperCase(); 

    break;

    case 0:
        console.log("Fim de operação");
       
    break;
}
}

