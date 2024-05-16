// declarar as variáveis utilizadas no programa 
let listaCompras = []; // variavel global
let acao = ''; 
let idEditar = 0; 


// recupera a informação do usuario que realizou 
let usuario = sessionStorage.getItem('usuario'); 
if(usuario === null ) { 
    window.location = 'login.html';
}

// realiza o sair do usuário e volta para o login
function logout() {
    sessionStorage.removeItem('usuario'); 
    window.location = 'login.html';

} // fim da function


// função para cadastrar as informações de produtos 

function cadastrar() {
    // recupera as informações do formulário 

    let nome = document.getElementById('nome').value; 
    let preco = parseFloat(document.getElementById('preco').value);
    let quantidade = document.getElementById('quantidade').value;

    
    // insere os dados na tabela 
    let linha = [nome, preco, quantidade]; 
    
    
    // se o usuario clicou no link para editar o item, então devemos inserir 
    // o item na lista de compras na posicao correta, caso contrário iremos inserir no final da lista de compras
    if (acao === 'EDITAR') { 
        listaCompras[idEditar] = linha;
        acao = '';
    } else {
        listaCompras.push(linha);    
    }  

    
    // limpa os campos do formulario
    // após a inclusão dos valores na tabela 
    document.getElementById('nome').value =      '';
    document.getElementById('preco').value =     '';
    document.getElementById('quantidade').value =        ''; 


// adiciona as linhas na tabela    
    popularTabela( );
    
}
// fim da function // 


// insere na tabela html as informações cadastradas

function popularTabela( ) {

// criar uma referencia para a tabela no código html 
    
let tabela = document.getElementById('produtos');
    
    
// limpar a tabela com as informações antigas
var tableHeaderRowCount = 1; 
var rowCount = tabela.rows.length; 
for (var i = tableHeaderRowCount; i < rowCount; i++) {
    tabela.deleteRow(tableHeaderRowCount);

} // fim do for 

// ##############################################//

//percorre a lista de compras até o tamanho máximo da lista
    for (let index = 0; index < listaCompras.length; index++) {
        //adiciona uma linha na tabela
        var row = tabela.insertRow(-1);

        //adiciona as colunas da tabela
        var cell1 = row.insertCell(0); //coluna #
        var cell2 = row.insertCell(1); //coluna Nome Produto
        var cell3 = row.insertCell(2); //coluna Preço
        var cell4 = row.insertCell(3); //coluna Quantidade
        var cell5 = row.insertCell(4); //coluna Ações
        
        //adiciona as colunas para informação
        let linha = listaCompras[index];        
        cell1.innerHTML = index; 
        cell2.innerHTML = linha[0];
        cell3.innerHTML = "R$ " + linha[1];
        cell4.innerHTML = linha[2];
        cell5.innerHTML = "";         
    } 
    //fim do FOR  


}


// realiza o calculo do valor das compras
function calcularCompras() {
    let total = 0;


for (let index = 0; index < listaCompras.length; index++) {
        let linha = listaCompras[index];
       let valor = linha[1] * linha[2]; 
       total = total + valor;
    
    } // fim do for 

 // exibe a informaçãop no modal do calculo das compras
document.getElementById("totalCompras").innerHTML = 'O total da sua compra é = R$ ' + total.toFixed(2);

}
// fim da function
 
// remove um item da lista de compras 
function removerItem(id) {
    // remove um item do arrary de qualquer posição no array 
    listaCompras.slice(id, 1); 

    // chama a função para atualizar a tabela HTML
    popularTabela(); 
}
    // fim function 


// funcao para editar um item da lista 
function editarItem(id) {
    // recupera o item que será editado 
    let item = listaCompras[id];
}
    
// formulário 
document.getElementById('nome').value = item[0];
document.getElementById('preco').value = item[1];
document.getElementById('quantidade').value = item[2]; 

acao = 'EDITAR'; // variável de controle

idEditar = id; 