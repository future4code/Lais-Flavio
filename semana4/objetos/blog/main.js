const title = document.getElementById("titulo-post")
const autor = document.getElementById("autor-post")
const conteudo = document.getElementById("conteudo-post")

function recebeDados() {
  const blog = {
    recebeTitulo: title.value,
    recebeAutor: autor.value,
    recebeConteudo: conteudo.value
  } 

  if(blog.recebeTitulo !== "") {
    const section = document.getElementById("mostra-posts")

   section.innerHTML += `<h2 style="color: white"> ${blog.recebeTitulo}</h2>`
   section.innerHTML += `<h3 style="color: white"> ${blog.recebeAutor}</h3>`
    section.innerHTML += `<p style="color: white"> ${blog.recebeConteudo}</p>`

    title.value = ""
    autor.value = ""
    conteudo.value = ""
  }
}
