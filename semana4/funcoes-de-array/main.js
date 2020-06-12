const arrayDeDespesas = []

const cadastraDespesas = () => {
  const valor = document.getElementById("valor")
  const valorDespesa = Number(valor.value)

  let select = document.getElementById("tipo")
  let selectDespesa = select.value
  
  let descricao = document.getElementById("descricao")
  let descricaoDespesa = descricao.value

  const despesas = {
    despesasValores: valorDespesa,
    despesasSelecionadas: selectDespesa, 
    despesasDescricao: descricaoDespesa
  }

  if ((valorDespesa !== "") && (descricaoDespesa !== "") && (valorDespesa !== 0)){
    arrayDeDespesas.push(despesas)

    let listaDeDespesas = document.getElementById("mostre-despesas")
    let total = document.getElementById("total")
    listaDeDespesas.innerHTML += `<p>Valor: R$: ${despesas.despesasValores}</p>`
    listaDeDespesas.innerHTML += `<p>Tipo: ${despesas.despesasSelecionadas}</p>`
    listaDeDespesas.innerHTML += `<p>Descrição: ${despesas.despesasDescricao}</p>`
    total.innerHTML += `<p>R$: ${despesas.despesasValores}</p>`
    insereDespesas()
    //console.log(despesas)
    valor.value = ""
    select.value = ""
    descricao.value = ""
    console.log(arrayDeDespesas)
  }else {
    alert("Preencha os campos corretamente")
  }
}

const insereDespesas = () => {
  soma()
  // const tipoCasa = arrayDeDespesas.filter(despesas, index, array)
  // // tipoCasa.forEach
  // //   if(tipoCasa === "Casa") {
  // //     const selecionaTipo = document.getElementById("tipo-despesas")
  // //     selecionaTipo.innerHTML += `${tipoCasa}`
  //   console.log(tipoCasa)
    }
  // }

/*
  const despesasTipo = document.getElementById("tipo-despesas")
  const valorMinimo = document.getElementById("minimo")
  const valorMaximo = document.getElementById("maximo")

  despesasDoArray.forEach((despesa, index, array)=>{
    despesasTipo.innerHTML += `${despesasDoArray.valorDespesa}`
    valorMinimo.innerHTML += `${despesasDoArray.valorMinimo}`
    valorMaximo.innerHTML += `${despesasDoArray.valorMaximo}`
  })*/


const soma = () => {
  const somaValores = arrayDeDespesas
  somaValores.forEach((despesas, index, array)=>{
    despesas.despesasValores = despesasValores
  })
}