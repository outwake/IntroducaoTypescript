import leia = require("readline-sync")

    const numero: Set<number> = new Set<number>();
    let continuar: string = "S";
    let numPro: number ;



    while(continuar==="S"){
      numero.add(leia.questionFloat("Qual numero você deseja adicionar?"))
      continuar = leia.keyIn("Deseja adicionar mais numeros: ( S )Sim ( N )Não \n").toUpperCase();   
      console.clear();    
    }
        numPro = leia.questionInt("Qual numero você procura?")
        if(numero.has(numPro)){
            console.log(`O numero ${numPro} está na lista`)  
        }
        else{
             console.log(`O numero ${numPro} não está na lista`)  
        }
        
    