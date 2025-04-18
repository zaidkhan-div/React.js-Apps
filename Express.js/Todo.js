const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3000



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@suffah1234@@',
    database: 'todos'
  });
 
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database.');
  });








app.use(express.json())
const todos = [
    {
      id:1,
      title: "Todo 1",
      desc: "This is my first Todo",
      completed: true,
    },
 
    {
      id:2,
      title: "Todo 2",
      desc: "This is my second Todo",
      completed: true,
    },
 
    {
        id:3,
      title: "Todo 3",
      desc: "This is my third Todo",
      completed: true,
    },
 
    {
        id:4,
      title: "Todo 4",
      desc: "This is my fourth Todo",
      completed: true,
    },
 
    {
        id:5,
      title: "Todo 5",
      desc: "This is my fifth Todo",
      completed: true,
    },
  ];

app.post("/createtodo",(request,response)=>{
const {description,status} = request.body;
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
//     INSERT INTO todos_list ( description, status,  created_at, updated_at)
// VALUES ('Buy milk, eggs, and bread', 'pending', NOW(), NOW());

        const sql = `INSERT INTO todos_list (description, status,
        created_at, updated_at) VALUES (?, ?, NOW(), NOW())`;
        const values = [description, status]

    connection.query(sql,values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });


})  

app.get("/", (request, response) => {
    response.status(200).json(todos);
  });
app.get("/todos", (request, response) => {
    response.status(200).json(todos);
  });

app.get("/todos/:id", (request, response) => {
    console.log('request.params.id',request.params.id);
   
    response
      .status(200)
      .json({ todo: todos.find((todo) => todo.id == request.params.id) });
  });

app.put("/todos/:id", (request, response) => {
    const todo = todos.find((todo) => todo.id == request.params.id);
   
   
    if (todo) {
      const { title, desc, completed } = request.body;
      todo.title = title;
      todo.desc = desc;
      todo.completed = completed;
      response.status(200).json({ msg: "Todo updated sucessfully" });
      return;
    }
    response.status(404).json({ msg: "Todo not found" });
  });

  app.delete("/todos/:id", (request, response) => {
    const todoIndex = todos.findIndex((todo) => (todo.id == request.params.id));
    if (todoIndex) {
      todos.splice(todoIndex, 1);
      response.status(200).json({ msg: "Todo deleted successfully" });
    }
    response.status(404).json({ msg: "Todo not found" });
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})