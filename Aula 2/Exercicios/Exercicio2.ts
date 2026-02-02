import leia= require("readline-sync")
import Stack = require("../Stack")


const pilha = new Stack<string>();
let continuar: string = "S";

let menu1 : number ;

while(continuar==="S"){
console.log("***************************")
console.log("|1| Adicionar Livro na Pilha")
console.log("|2| Listar todos os livros")
console.log("|3| Retirar Livro da Pilha")
console.log("|0| Sair")
console.log("***************************")

menu1= leia.questionInt("Qual operação deseja fazer?")
switch(menu1){

    case 1:
    pilha.push(leia.question("Digite o nome do livro:"))
    console.log("Livro Adicionado.")
    continuar = leia.keyIn("Deseja fazer mais alguma operação? ( S )Sim ( N )Não \n").toUpperCase(); 
    break;

    case 2:
    console.log("***************************")    
    console.log("Lista dos Livros")   
    pilha.printStack();
    console.log("*************************** \n\n")
    continuar = leia.keyIn("Deseja fazer mais alguma operação? ( S )Sim ( N )Não \n").toUpperCase(); 
    break;

    case 3:
        if( pilha.isEmpty()== true){
            console.log("*****************")
            console.log("LISTA VAZIA");
            console.log("******************")
        }
        else{

           let livroMom = pilha.pop() 
           pilha.pop(); 
           console.log("***************************")
           pilha.printStack();
           console.log(`\n O Livro ${livroMom}foi retirado!\n`);
           console.log("**************************")
        }
        continuar = leia.keyIn("Deseja fazer mais alguma operação? ( S )Sim ( N )Não \n").toUpperCase(); 

    break;

    case 0:
        console.log("******************")
        console.log("Fim de operação");
        console.log("******************")
       
    break;
}
}
console.log("Fim de operação");