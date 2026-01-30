import leia = require("readline-sync")


    // Criação de um array do tipo number que vai ficar armazenado na constante numeros
    // Array é uma classe
    const numero: Set<number> = new Set<number>();
    const c: Array<number> = [];
    let continuar: string = "S";
    let a: number , b: number ;



    while(continuar==="S"){
      numero.add(leia.questionFloat("Qual numero você deseja adicionar?"))
      continuar = leia.keyIn("Deseja adicionar mais cores: ( S )Sim ( N )Não \n").toUpperCase();   
      console.clear();    
    }
    for (let valor of numero) {
        c.push(valor); }
 
     console.log("================")
     console.log("Lista dos Ordenados numeros:")
     console.log(c.sort((a, b) => a - b));
     console.log("================")

