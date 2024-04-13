let usuario = {
    nome:'Italo',
    excluir: function(){
        console.log('O usuário, ' + this.nome + ' foi excluido!')
    }
}
usuario.excluir()