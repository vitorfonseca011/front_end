let livros = [
    {titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899},
    {titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937},
    {titulo: "Sapiens", autor: "Yuval Harari", ano: 2011}
];

console.log(livros[0].titulo); // Dom Casmurro

let recentes = livros.filter(livro => livro.ano > 2010);
console.log(recentes)