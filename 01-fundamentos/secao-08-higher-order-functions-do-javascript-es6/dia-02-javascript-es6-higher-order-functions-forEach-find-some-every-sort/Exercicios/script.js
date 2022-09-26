const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:
const authorBornIn1947 = (objeto) => {
    const returnObj = objeto.find((autor) => autor.author.birthYear === 1947);
    return `O autor ${returnObj.author.name} nasceu em ${returnObj.author.birthYear}`;
}
console.log(authorBornIn1947(books));

const smallerName = (objeto) => {
    const bookNames = [];
    objeto.forEach((element) => {
        bookNames.push(element.name);
    });
    return `O livro com menor nome na lista é '${bookNames.sort((a, b) => a.length - b.length)[0]}'`;
}
console.log(smallerName(books));

const getBookByLen = (objeto, len) => {
    const returnObj = objeto.find((book) => book.name.length === len);
    return `O livro ${returnObj.name} possuí ${len} caracteres.`;
};
console.log(getBookByLen(books, 26));

const booksOrderedByReleaseYearCres = (objeto) => {
    return objeto.sort((a, b) => a.releaseYear - b.releaseYear)
};
const booksOrderedByReleaseYearDesc = (objeto) => {
    return objeto.sort((a, b) => b.releaseYear - a.releaseYear)
};
// console.log(booksOrderedByReleaseYearDesc(books));

const returnSec = (year) => parseInt(year.toString().slice(0, 2)) + 1;

const everyoneWasBornOnSecXX = (objeto) => {
    const dates = [];
    objeto.forEach((element) => {
        dates.push(element.author.birthYear);
    });
    const checkBornOnSecXX = dates.every((date) => returnSec(date) === 20);
    return checkBornOnSecXX;
};
console.log(`Todos nasceram no século XX? => ${everyoneWasBornOnSecXX(books)}`);

const someBookWasReleaseOnThe80s = (objeto) => {
    const dates = [];
    objeto.forEach((element) => {
        dates.push(element.releaseYear);
    });
    return `Algum livro foi lançado nos anos 80? => ${dates.some((date) => date > 1979 && date < 1990)}`;
};
console.log(someBookWasReleaseOnThe80s(books));

const authorUnique = (objeto) => {
    const dates = [];
    objeto.forEach((element) => {
        dates.push(element.author.birthYear);
    });
    return `Todos os autores nasceram em anos diferentes? => ${(new Set(dates)).size === dates.length}`;
};
console.log(authorUnique(books));