let contato = require('./usuario');
function excluir(id){
    let index = contato.findIndex(contatos => contato.id === id);
    contato.splice(id, 1)
}
module.exports = excluir