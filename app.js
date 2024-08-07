const prompt = require ("prompt-sync")()
const adiocionar = require ("./adicionar")
const listar = require ("./listar")
const editar = require ("./editar")
const excluir = require ("./excluir")
let contato = require('./usuario');
menu()
function menu(){
    console.log(`
    1.listar
    2.adicionar
    3.editar
    4.excluir
    5.sair`)
    const opcão = prompt("escolha uma opção: ")
    let index
    switch(opcão){
        case"1":
           listar()
            menu()
        break;
        case "2":
            const nome = prompt("seu nome: ")
            
            let telefones = [];
            let telefone;
            while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
            telefones.push(telefone);
            }
            const email = prompt('seu email:')
            adiocionar({ nome,email, telefones} )
         
            menu()
            break;
        case "3":
            listar()
            id = parseInt(prompt("escolha um id:")) -1 
            const novonome = prompt("fale novo nome: ")
            const novoemail = prompt("novo email: ")
            let novotelefones = [];
            let novotelefone;
            while ((novotelefone = prompt('Telefone (ou deixe em branco para sair): '))) {
            novotelefones.push(novotelefone);
            }
            editar(id, {nome: novonome, email: novoemail, telefones:novotelefones})
            console.log("contato editado")
            
             menu()
            break;
        case "4":
            listar()
            id = parseInt(prompt("numero que vc deseja para remover: ")) -1;
            excluir(id); 
            console.log("contato removido")
            menu()
            break;
        case "5":
            console.log("SAINDO .....")
            break;
            default:
                console.log("erro!")
                menu()

    }
}