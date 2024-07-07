const express = require("express");
const fs = require("fs");

const server = express();
server.use(express.json());

// Endpoint to fetch all todos from db.json
server.get("/show-todos", (req, res) => {
  try {
    let userdata = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(userdata);
    res.send(parsedData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error reading data");
  }
});

// Endpoint to add a new todo to db.json
server.post("/add-todos", (req, res) => {
  try {
    let data = req.body;
    let userdata = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(userdata);
    parsedData.todos.push(data);
    fs.writeFileSync("./db.json", JSON.stringify(parsedData));
    res.send("SUCCESSFULLY RECEIVED");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error writing data");
  }
});

// Endpoint to update todos where id is even and status is false in db.json
server.put("/update-todos", (req, res) => {
  try {
    let userdata = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(userdata);

    parsedData.todos.forEach(todo => {
      if (todo.id % 2 === 0 && todo.status === false) {
        todo.status = true;
      }
    });

    fs.writeFileSync("./db.json", JSON.stringify(parsedData));
    res.send("DATA HAS BEEN CONVERTED");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating data");
  }
});

// Endpoint to delete todos where status is false from db.json
server.delete("/delete-todos", (req, res) => {
  try {
    let userdata = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(userdata);

    let falseStatus = parsedData.todos.filter(todo => todo.status === false);
    parsedData.todos = falseStatus;

    fs.writeFileSync("./db.json", JSON.stringify(parsedData));
    res.send("FALSE DATA HAS BEEN DELETED");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting data");
  }
});

// Server listening on port 8088
server.listen(8088, () => {
  console.log("8088 server is running in the background");
});
