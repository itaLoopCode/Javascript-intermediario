// function AlterarCorDeFundoPrmeiroPost(){
//     let posts = document.getElementsByClassName('post')

//     console.log(posts)

// let primeiroPost = posts[0]
// console.log('primeiroPost', primeiroPost)
// primeiroPost.style.backgroundColor = 'red';

// }

// function AlterarCorDeFundoSegundoPost() {

// let textoposts = document.getElementsByClassName('texto-post');

// textoPosts[1].classlist.add('fonte-grande')

// console.log(textoPosts[1].classlist)

// }

function marcarRadio(genero){
let radioMasculino = document.getElementById('genero-masculino');

let radioFeminino = document.getElementById('genero-feminino');

if (genero === 'M'){
    radioMasculino.checked = true
}else (genero === 'F') 
    radioFeminino.checked = true


}