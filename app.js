const livros = require('./database')

//pegar o input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

//Se for sim, mostra as categorias disponíveis e pergunta se quer escolher alguma

if(entradaInicial.toLocaleUpperCase() == 'S'){
    console.log('Essas são as categorias disponíveis:')
    categoriaLivro = []
    livros.forEach((livro)=>{
        categoria = livro.categoria
        if(!categoriaLivro.includes(categoria)){
            categoriaLivro.push(categoria)
        }
        return categoriaLivro
    })
    console.log(categoriaLivro)

    const entradaCategoria = readline.question('Qual categoria gostaria de consultar?')
    const retorno = livros.filter(livro => livro.categoria == entradaCategoria)
    console.table(retorno)
} //Se for não, mostra todos os livros em ordem crescente de qt paginas
else{
    livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Esses são os livros disponíveis:')
    console.table(livros)
}