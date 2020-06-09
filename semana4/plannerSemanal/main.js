function addTarefa() {
  
let select = document.getElementById("selectDay")
let selectDia = select.value
let input = document.getElementById("input")
let inputValue = input.value

if(selectDia === "Domingo") {
  let diaSem = document.getElementById("domingo")
  domingo.innerHTML += `<li style="text-align: center">${inputValue}</li>`
  input.value = ""
}else if (selectDia === "Segunda") {
  let diaSem = document.getElementById("segunda")
  diaSem.innerHTML += `<li style="text-align: center">${inputValue}</li>`
  input.value = ""
}else if (selectDia === "Terça") {
  let diaSem = document.getElementById("terca")
  diaSem.innerHTML += `<li style="text-align: center">${inputValue}</li>`
  input.value = ""
}else if (selectDia === "Quarta") {
  let diaSem = document.getElementById("quarta")
  diaSem.innerHTML += `<li style="text-align: center">${inputValue}</li>`
  input.value = ""
}else if (selectDia === "Quinta") {
  let diaSem = document.getElementById("quinta")
  diaSem.innerHTML += `<li style="text-align: center">${inputValue}</li>`
  input.value = ""
}else if (selectDia === "Sexta") {
  let diaSem = document.getElementById("sexta")
  diaSem.innerHTML += `<li style="text-align: center">${inputValue}</li>`
  input.value = ""
}else {
  let diaSem = document.getElementById("sabado")
  diaSem.innerHTML += `<li style="text-align: center">${inputValue}</li>`
  input.value = ""
}
}
