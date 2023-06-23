const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Pew Paul", email: "pew@gmail.com" },
  { id: 2, name: "Supti Paul", email: "supti@gmail.com" },
  { id: 3, name: "Arpita Paul", email: "arpita@gmail.com" },
  { id: 4, name: "Runu Paul", email: "runu@gmail.com" },
  { id: 5, name: "Bishwajit Paul", email: "bishwajit@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api is hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`This system is running on port: ${port}`);
});
