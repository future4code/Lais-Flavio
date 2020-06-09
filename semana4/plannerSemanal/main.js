function addTarefa() {
  // let pegaValor = pegaInput.value
  // let tableChange = document.getElementById("anotacoes")
  // tableChange.innerHTML += `<li>${input}</li>`
  // console.log(tableChange)
  // pegaInput.value= " "
//  } 
  

let select = document.getElementById("selectDay")
let selectDia = select.value
let input = document.getElementById("input").value

if(selectDia === "Domingo") {
  let diaSem = document.getElementById("domingo")
  domingo.innerHTML += `<li>${input}</li>`
}else if (selectDia === "Segunda") {
  let diaSem = document.getElementById("segunda")
  diaSem.innerHTML += `<li>${input}</li>`
}else if (selectDia === "Terça") {
  let diaSem = document.getElementById("terca")
  diaSem.innerHTML += `<li>${input}</li>`
}else if (selectDia === "Quarta") {
  let diaSem = document.getElementById("quarta")
  diaSem.innerHTML += `<li>${input}</li>`
}else if (selectDia === "Quinta") {
  let diaSem = document.getElementById("quinta")
  diaSem.innerHTML += `<li>${input}</li>`
}else if (selectDia === "Sexta") {
  let diaSem = document.getElementById("sexta")
  diaSem.innerHTML += `<li>${input}</li>`
}else {
  let diaSem = document.getElementById("sabado")
  diaSem.innerHTML += `<li>${input}</li>`
}
}
/*
const pegaDom = document.getElementById("dom").value
const pegaSeg = document.getElementById("seg").value
const pegaTer = document.getElementById("ter").value
const pegaQua = document.getElementById("qua").value
const pegaQui = document.getElementById("qui").value
const pegaSex = document.getElementById("sex").value
const pegaSab = document.getElementById("sab").value
*/