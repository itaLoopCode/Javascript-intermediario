//função criada com o nome alterar fonte
function AlterarCorDeFundoPrimeiroPost() {
    //variavel posts busca conteudo da classe post
    let posts = document.getElementsByClassName('post')
//variavel primeiroPost seleciona o primeiro item do array posts
    let primeiroPost = posts[0]
    //comando para mudar a cor de fundo da variavel primeiroPost
    primeiroPost.style.backgroundColor = 'red';
}
function aumentarFonteSegundoPost(){
    let aumentar = document.getElementsByClassName('texto-post')
    // comando para adicionar a classe de nome fonte grande 
    //ao segundo item do array aumentar
    aumentar[1].classList.add('fonte-grande')
}

function MarcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino');

    let radioFeminino = document.getElementById('genero-feminino');
    
if(genero === 'M'){
    radioMasculino.checked = true;
}else if(genero === 'F') {
    radioFeminino.checked = true;}
}