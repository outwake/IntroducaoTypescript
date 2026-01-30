import leia = require("readline-sync")

const cores: Set<string> = new Set<string>();
let cor : string

    cores.add("Azul");
    cores.add("Roxo");
    cores.add("Amarelo");
    cores.add("Azul");
    cores.add("Preto");

    console.table(cores);


    cor = leia.question("Qual numero você procura?")
    console.log("A cor Preto", cores.has(cor))

    //Deletar elemento
    cores.delete("Azul");


    for(let cor of cores){
        console.log(cor)
    }
