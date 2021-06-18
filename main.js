const express = require('express');
const app = express();
require('dotenv').config();

const db = require('./db');

const books = require('./books');
app.use(express.json());
/* ==================== */

app.get('/books', books.findAll);
app.post('/books', books.newBook);
app.put('/books:id', books.updateData);
app.delete('/books/:id', books.deleteData);

// app.get('/users/email', users.findEmail);

/* ==================== */

const PORT = 5000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});
