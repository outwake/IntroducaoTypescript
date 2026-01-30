import leia = require("readline-sync")

    const numero: Array<number> = new Array<number>();
    let continuar: string = "S";
    let numPro: number ;

    console.clear();


    while(continuar==="S"){
      numero.push(leia.questionFloat("Qual numero você deseja adicionar?"))
      continuar = leia.keyIn("Deseja adicionar mais numeros: ( S )Sim ( N )Não \n").toUpperCase();   
      console.clear();    
    }
        numPro = leia.questionInt("Qual numero você procura?")
        if(numero.includes(numPro)){
            console.log(`O numero ${numPro} está na lista no indice`, numero.indexOf(numPro))  
        }
        else{
             console.log(`O numero ${numPro} não está na lista`)  
        }
        