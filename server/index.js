const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');


// middle ware

app.use(cors());
app.use(express.json());


// __________________________________________________________

// SCHEDULE ROUTES 

// __________________________________________________________

app.post("/schedule", async (req, res) => {
    try {
        const { date } = req.body;
        const { description } = req.body;
        const { icon } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (date, description, icon) VALUES($1, $2, $3) RETURNING *",
            [date, description, icon]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all todos

app.get("/schedule", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM todo");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  // get a todo

  app.get("/schedule/:id", async(req, res) => {
      try {
          const { id } = req.params;
          const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1" , [
              id
        ]);
        res.json(todo.rows[0]);
      } catch (err) {
          console.error(err.message);
      }
  });

  // update a todo 

  app.put("/schedule/:id", async (req, res) => {
      try {
          const { id } = req.params;
          const { description } = req.params;
          const { icon } = req.params;
          const updateTodo = await pool.query(
              "UPDATE todo SET description = $1 WHERE todo_id = $2",
              [description, id],
          );
          res.json("Fixed!")
      } catch (err) {
          console.error(err.message);
      }
  });

  // delete a todo 

  app.delete("/schedule/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
        id
      ]);
      res.json("Todo was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

  
  // __________________________________________________________
  
  
  // EXPENSES ROUTES 

  // ___________________________________________________________


  // post expense
  app.post("/expenses", async (req, res) => {
    try {
        const { date } = req.body;
        const { price } = req.body;
        const { category } = req.body;
        const newExpense = await pool.query(
            "INSERT INTO expenses (date, price, category) VALUES($1, $2, $3) RETURNING *",
            [date, price, category]
        );
        res.json(newExpense.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})


// get the expenses

app.get("/expenses", async (req, res) => {
  try {
    const allExpenses = await pool.query("SELECT * FROM expenses");
    res.json(allExpenses.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// get a specific expense


app.get("/expenses/:id", async(req, res) => {
  try {
      const { id } = req.params;
      const expense = await pool.query("SELECT * FROM expenses WHERE ex_id = $1" , [
          id
    ]);
    res.json(expense.rows[0]);
  } catch (err) {
      console.error(err.message);
  }
});


// update an expense

app.put("/expenses/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const { price } = req.params;
      const { category } = req.params;
      const updateExpense = await pool.query(
          "UPDATE expense SET price = $1 WHERE ex_id = $2",
          [price, id],
      );
      res.json("Fixed!")
  } catch (err) {
      console.error(err.message);
  }
});


// delete an expense

app.delete("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExpense = await pool.query("DELETE FROM expense WHERE ex_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

// _____________________________________________________________








  
  app.listen(5000, () => {
    console.log("server has started on port 5000");
  });
