import leia = require("readline-sync")

    const cor: Array<string> = new Array<string>();
    let continuar: string = "S"; 
    let cores : string;

    console.clear();
    while(continuar==="S"){

      cor.push(leia.question("Qual cor você deseja adicionar?"))

      continuar = leia.keyIn("Deseja adicionar mais cores: ( S )Sim ( N )Não \n").toUpperCase();   
      console.clear();
    }

     console.log("================")
     console.log("Lista das cores:")
       for (let cores of cor) {
        console.log(cores)    
    }
    console.log("================")

    console.table(cor)
    console.log("===========================")
     console.log("Lista das cores Ordenadas:")
     console.log(cor.sort());
     console.log("===========================")

