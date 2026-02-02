import leia from "readline-sync"
import { Queue } from "./Queue";

const fila = new Queue<string>();

    // Add elemento na fila
    fila.enqueue("Renan");
    fila.enqueue("Mayara");
    fila.enqueue("Marcia");
    fila.enqueue("Larissa");

    //via digitação
    fila.enqueue(leia.question("Digite um nome:"))

    //mostrar na lista
    fila.printQueue();

    // Remover
    fila.dequeue();

    fila.printQueue();