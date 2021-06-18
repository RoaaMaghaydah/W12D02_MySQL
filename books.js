const db = require('./db');

const newBook = (req, res) => {
  const {title, author, published_at, price} = req.body;
  const query =`INSERT INTO books (title, author, published_at, price) VALUES (?, ?, ?, ?)`;
  const data = [title, author, published_at, price];
  db.query(query, data, (err, results) => {
    console.log(results);
    res.json(results)
  });
};


const findAll = (req,res) => {
const query = `SELECT * FROM books`;
db.query(query, (err, result) => {
  if (err) throw err;
  console.log('RESULT: ', result);
  res.json(result)
});
};

const updateData =(req,res)=>{
const id=req.params.id
const {title}=req.body;
const query= `UPDATE books
SET title = ?
WHERE id = ?`;
let arr=[title,id]
db.query(query,arr,(err, result) => {
  if (err) throw err;
  console.log('RESULT: ', result);
  res.json(result)
});
};

const deleteData =(req,res)=>{
const id=req.params.id
const query= `DELETE FROM books WHERE id = ?`;
let arr=[id]
db.query(query,arr,(err, result) => {
  if (err) throw err;
  console.log('RESULT: ', result);
  res.json(result)
});
};



const ordar =()=>{
const query= `SELECT * FROM books ORDER BY id DESC`;
db.query(query,(err, result) => {
  if (err) throw err;
  console.log('RESULT: ', result);
});
};

//ordar();
console.log("____________________");
const is_null =()=>{
const query= `SELECT *
FROM books
WHERE price IS NULL`;
db.query(query,(err, result) => {
  if (err) throw err;
  console.log('RESULT: ', result);
});
};


const is_not_null =()=>{
const query= `SELECT *
FROM books
WHERE price IS NOT NULL`;
db.query(query,(err, result) => {
  if (err) throw err;
  console.log('RESULT: ', result);
});
};




module.exports = {
newBook,
findAll,
updateData,
deleteData,
ordar,
is_null,
is_not_null
};