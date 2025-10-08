const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ------------------ ДАННЫЕ ------------------
let messages = [
  { user: "Alice", text: "Привет!" },
  { user: "Bob", text: "Привет, Alice!" }
];

let users = [
  {
    id: 1,
    login: "alice123",
    password: "12345",
    name: "Alice",
    surname: "Johnson",
    gmail: "alice@gmail.com",
    number: "+998901234567"
  },
  {
    id: 2,
    login: "bob456",
    password: "qwerty",
    name: "Bob",
    surname: "Smith",
    gmail: "bob@gmail.com",
    number: "+998909876543"
  }
];

// ------------------ СООБЩЕНИЯ ------------------
app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/messages", (req, res) => {
  const { user, text } = req.body;
  if (!user || !text) {
    return res.status(400).json({ error: "user и text обязательны" });
  }
  const message = { user, text };
  messages.push(message);
  res.json(message);
});

// ------------------ ПОЛЬЗОВАТЕЛИ ------------------
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { login, password, name, surname, gmail, number } = req.body;

  if (!login || !password || !name || !surname || !gmail || !number) {
    return res.status(400).json({ error: "Все поля обязательны" });
  }

  const newUser = {
    id: users.length + 1,
    login,
    password,
    name,
    surname,
    gmail,
    number
  };

  users.push(newUser);
  res.json(newUser);
});

// ------------------ СТАРТ СЕРВЕРА ------------------
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
