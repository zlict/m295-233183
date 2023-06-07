const express = require('express');

const router = express.Router();

const books = [
  {
    isbn: '978-3551354013',
    title: 'Harry Potter und der Stein der Weisen',
    year: 2005,
    author: 'Joanne K. Rowling',
  },
  {
    isbn: '978-0345391803',
    title: 'Der Herr der Ringe',
    year: 1954,
    author: 'J.R.R. Tolkien',
  },
  {
    isbn: '978-3453400045',
    title: '1984',
    year: 1949,
    author: 'George Orwell',
  },
  {
    isbn: '978-3596510913',
    title: 'Der kleine Prinz',
    year: 1943,
    author: 'Antoine de Saint-Exupéry',
  },
  {
    isbn: '978-3499217544',
    title: 'Die Verwandlung',
    year: 1915,
    author: 'Franz Kafka',
  },
];

router.get('/', (request, response) => {
  response.json(books);
});

router.get('/:isbn', (request, response) => {
  const { isbn } = request.params;
  const book = books.find((b) => b.isbn === isbn);

  if (!isbn || !book) {
    response.sendStatus(404);
  } else {
    response.json(book);
  }
});

module.exports = router;
