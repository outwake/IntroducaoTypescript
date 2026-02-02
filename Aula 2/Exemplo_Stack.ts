import leia= require("readline-sync");
import Stack = require("./Stack");

const pilha = new Stack<string>();

    // Add elemento na pilha
    pilha.push("Renan");
    pilha.push("Mayara");
    pilha.push("Marcia");
    pilha.push("Larissa");

    //via digitação
    pilha.push(leia.question("Digite um nome:"))

    //mostrar na lista
    pilha.printStack(); 

    // Remover
    pilha.pop();

    pilha.printStack();