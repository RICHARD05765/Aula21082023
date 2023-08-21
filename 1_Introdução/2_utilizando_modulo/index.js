const fs = require('fs')// fs = fyle system vai servir ler o txt // é um grupo de função 

fs.readFile('frase.txt', 'utf8', (erro, dados) => {
    if(erro){ 
        console.log(erro)
        return
    }
    console.log(dados)
} ) //ler o arquivo