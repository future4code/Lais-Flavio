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
   
   let carta1 = comprarCarta()
   let carta2 = comprarCarta()
   let carta3 = comprarCarta()
   let carta4 = comprarCarta()

   let resultado1 = carta1.valor + carta2.valor //user
   let resultado2 = carta3.valor + carta4.valor //pc


   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto}e - pontuação: ${resultado1}`)
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação: ${resultado2}`)

   if ((resultado1 === 21) || (resultado1 > resultado2)) {
      console.log("Você ganhou!")
   }else if ((resultado2 === 21) || (resultado1 < resultado2)) {
      console.log("O computador ganhou")
   }else if ((resultado1) === (resultado2)) {
    console.log("Empate")
   
   }
 }



























//let pontuacao = carta.valor + carta.valor


// if(confirmarInicio) {

//   if(usuario.valor < 21) {  
//      let msgUser =  confirm("Usuário: Suas cartas são "+" " + carta.texto + " "+ "e sua pontuação é " + " "+ carta.valor +"Deseja comprar mais uma carta?")
//       if(msgUser) {
//          comprarCarta()
//       }else if(usuario.valor > 21){
//          console.log(computador + "ganhou")
//       }

//   } else if(computador.valor > 21){

//          console.log(`Usuario - cartas ${carta.texto} - pontuação ${carta.valor}`)
//          console.log(`Computador - cartas ${carta.texto} - pontuação ${carta.valor}`)
//          console.log(usuario + "ganhou")
// }else {
//    
// }
// }
// 
// console.log(carta.texto) 
// console.log(carta.valor) 
