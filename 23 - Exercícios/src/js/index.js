// const perguntas = document.querySelectorAll(".pergunta");

// perguntas.forEach((pergunta) => {
//   const resposta = pergunta.querySelector(".resposta");
//   const seta = pergunta.querySelector(".seta");

//   pergunta.addEventListener("click", () => {
//     // Fechar todos os outros itens
//     perguntas.forEach((p) => {
//       if (p !== pergunta) {
//         p.classList.remove("ativo");
//         p.querySelector(".resposta").style.maxHeight = "0";
//         p.querySelector(".seta").classList.remove("seta-ativa");
//       }
//     });

//     // Abrir/Fechar o item clicado
//     pergunta.classList.toggle("ativo");
//     if (pergunta.classList.contains("ativo")) {
//       resposta.style.maxHeight = resposta.scrollHeight + "px";
//       seta.classList.add("seta-ativa");
//     } else {
//       resposta.style.maxHeight = "0";
//       seta.classList.remove("seta-ativa");
//     }
//   });
// });


const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach(function(item){
  item.addEventListener("click", function(){
    const itemAtivoAtual = document.querySelector(".ativo");

    if (itemAtivoAtual) {
      itemAtivoAtual.classList.remove("ativo");
    }
    
    item.classList.add("ativo");
  });
});