import leia = require("readline-sync")

  let numero1: number , numero2: number;
  
  numero1= leia.questionFloat("Digite o 1º:")
  numero2= leia.questionFloat("Digite o 2º:")


  console.log(`${numero1} + ${numero2} = ${numero1 + numero2}` )
