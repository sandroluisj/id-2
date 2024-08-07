let contato = require('./usuario');
function listar(){
    contato.forEach((contatos )=>{
        console.log(`id:${contatos.id} nome ${contatos.nome}, email :${contatos.email}, telefone: ${contatos.telefones} `)
    })
}
module.exports = listar