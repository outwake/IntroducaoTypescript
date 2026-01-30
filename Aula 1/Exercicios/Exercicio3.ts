import leia = require("readline-sync")

    const numero: Set<number> = new Set<number>();
    const c: Array<number> = [];
    let continuar: string = "S";

    console.clear();


    while(continuar==="S"){
      numero.add(leia.questionFloat("Qual numero você deseja adicionar?"))
      continuar = leia.keyIn("Deseja adicionar mais numero: ( S )Sim ( N )Não \n").toUpperCase();   
      console.clear();    
    }
    for (let valor of numero) {
        c.push(valor); }
 
     console.log("================")
     console.log("Lista dos Ordenados numeros:")
     console.log(c.sort((a, b) => a - b));
     console.log("================")

