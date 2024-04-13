//selecionando seletores do estado

//document.querySelector("select[name:'estado']");


//adicionando um evento de alerta ao mudar o seletor

//SelectDeEstado.addEventListener('change',function(){
//    alert('Mudou o seletor')
//})

document
.querySelector ("select [name='estado']")
.addEventListener ('change', function (event) {
    console.log(event.target.value)
});

