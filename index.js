// Import necessary modules
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

let books = [
  { 
    id: 1, 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald' 
  },
  { 
    id: 2, 
    title: 'To Kill a Mockingbird', 
    author: 'Harper Lee' 
  }
];

app.get('/api/books', (request, response) => {
  response.json(books);
});

app.get('/api/books/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const book = books.find(book => book.id === id);
  
  if (!book) {
    response.status(404).send('Book not found');
  } else {
    response.json(book);
  }
});

app.post('/api/books', (request, response) => {
  const book = request.body;
  
  books.push(book);
  
  response.status(201).send('Book added');
});

app.put('/api/books/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const bookIndex = books.findIndex(book => book.id === id);
  
  if (bookIndex === -1) {
    response.status(404).send('Book not found');
  } else {
    books[bookIndex] = request.body;

    response.send('Book updated');
  }
});

app.delete('/api/books/:id', (request, response) => {
  const id = parseInt(request.params.id);
  
  books = books.filter(book => book.id !== id);
  
  response.send('Book deleted');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
