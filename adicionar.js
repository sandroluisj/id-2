let contato = require('./usuario');
function adicionar(contatos) {
contatos.id = contato.length + 1;
let jaExiste = contato.find(cont => cont.email === contatos.email);
if (jaExiste) {
console.log('Já existe um contato com esse email');
} else {
console.log("contato adicionado")
    contato.push(contatos);

}
}
module.exports = adicionar