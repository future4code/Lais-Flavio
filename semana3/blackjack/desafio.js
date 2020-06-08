/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const mensagemUsuario = console.log("Bem vindo ao jogo de Blackjack.")

if(!confirm("Quer iniciar uma nova rodada?")) {
  console.log("O jogo acabou.")
}else {

   let cartas = [{} ]
   
   for(carta of cartas) {
      carta = cartas.valor
      while((carta1.valor == 11) && (carta2.valor == 11) || (carta3.valor == 11) && (carta4.valor == 11)) {
       comprarCarta()
      }
         let msg = confirm(`Suas cartas são ${carta1.texto} ${carta2.texto} e a carta revelada do computador é ${carta3.texto}. Deseja comprar mais uma carta?`)
      
            if(msg) {


                     let resultado1 = carta1.valor + carta2.valor + carta3 //user
                     let resultado2 = carta3.valor + carta4.valor + carta3 //pc
                     if(resultado1 >= resultado2) {
                        console.log("Você ganhou!")
                     }else if(resultado1 <= resultado2){
                        console.log("O computador ganhou")
                     }else if((resultado1) === (resultado2)) {
                        console.log("Empate")
                     }
                     console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto}e - pontuação: ${resultado1}`)
                     console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação: ${resultado2}`)
                  }

            
                  /*
                  if ((resultado1 === 21) || (resultado1 > resultado2)) {
                     console.log("Você ganhou!")
                  }else if ((resultado2 === 21) || (resultado1 < resultado2)) {
                     console.log("O computador ganhou")
                  }else if ((resultado1) === (resultado2)) {
                  console.log("Empate")
                  
               }*/break

         }
   }




/*

  

*/