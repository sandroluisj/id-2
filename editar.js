let contato = require('./usuario');
function editar(id, novocontato){
    let index = contato.findIndex(contatos => contato.id === id);
    contato[id] = {id: id, ...novocontato} 
}

module.exports = editar
