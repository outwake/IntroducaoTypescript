import leia = require("readline-sync")


    // Criação de um array do tipo number que vai ficar armazenado na constante numeros
    // Array é uma classe
    const numeros: Array<number> = new Array<number>();
    let questao: number;
    let i : number;
    numeros.push(5);
    numeros.push(4,5,8,9,7);

    for (let num of numeros) {
        console.log(num)
        
    }
    
    questao = leia.questionInt("Qual numero você procura?")
     
    //Voce procura o dado com esse include
    console.log(`O numero ${questao} existe?`, numeros.includes(questao))

    console.log("O indice do numero 7:", numeros.indexOf(7));
    console.table(numeros);

    //Deletar elemento
    numeros.splice(numeros.indexOf(7),1);
 console.table(numeros);




