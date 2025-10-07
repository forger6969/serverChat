const express = require("express");
const cors = require(`cors`)
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


let messages = [
  { user: "Alice", text: "Привет!" },
  { user: "Bob", text: "Привет, Alice!" }
];


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

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});