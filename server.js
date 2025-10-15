const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ------------------ ДАННЫЕ ------------------
let messages = [
  { user: "Alice", text: "Привет!", time: "10:00" },
  { user: "Bob", text: "Привет, Alice!", time: "10:05" }
];


let users = [
  { "id": 1, "login": "alice123", "password": "12345", "name": "Alice", "surname": "Johnson", "gmail": "alice@gmail.com", "number": "+998901234567" },
  { "id": 2, "login": "bob456", "password": "qwerty", "name": "Bob", "surname": "Smith", "gmail": "bob@gmail.com", "number": "+998909876543" },
  { "id": 3, "login": "charlie789", "password": "pass123", "name": "Charlie", "surname": "Brown", "gmail": "charlie@gmail.com", "number": "+998900111111" },
  { "id": 4, "login": "david007", "password": "hello12", "name": "David", "surname": "Williams", "gmail": "david@gmail.com", "number": "+998900222222" },
  { "id": 5, "login": "eva321", "password": "mypassword", "name": "Eva", "surname": "Taylor", "gmail": "eva@gmail.com", "number": "+998900333333" },
  { "id": 6, "login": "frank555", "password": "coolman", "name": "Frank", "surname": "Anderson", "gmail": "frank@gmail.com", "number": "+998900444444" },
  { "id": 7, "login": "grace777", "password": "grace777", "name": "Grace", "surname": "Thomas", "gmail": "grace@gmail.com", "number": "+998900555555" },
  { "id": 8, "login": "henry999", "password": "password9", "name": "Henry", "surname": "Jackson", "gmail": "henry@gmail.com", "number": "+998900666666" },
  { "id": 9, "login": "isabel456", "password": "isabel", "name": "Isabel", "surname": "White", "gmail": "isabel@gmail.com", "number": "+998900777777" },
  { "id": 10, "login": "jack001", "password": "jackpass", "name": "Jack", "surname": "Harris", "gmail": "jack@gmail.com", "number": "+998900888888" },
  { "id": 11, "login": "kate002", "password": "katepw", "name": "Kate", "surname": "Martin", "gmail": "kate@gmail.com", "number": "+998900999999" },
  { "id": 12, "login": "liam003", "password": "liam003", "name": "Liam", "surname": "Garcia", "gmail": "liam@gmail.com", "number": "+998901000000" },
  { "id": 13, "login": "mia004", "password": "mia004", "name": "Mia", "surname": "Martinez", "gmail": "mia@gmail.com", "number": "+998901111111" },
  { "id": 14, "login": "noah005", "password": "noahpw", "name": "Noah", "surname": "Robinson", "gmail": "noah@gmail.com", "number": "+998901222222" },
  { "id": 15, "login": "olivia006", "password": "oliv06", "name": "Olivia", "surname": "Clark", "gmail": "olivia@gmail.com", "number": "+998901333333" },
  { "id": 16, "login": "peter007", "password": "peter007", "name": "Peter", "surname": "Rodriguez", "gmail": "peter@gmail.com", "number": "+998901444444" },
  { "id": 17, "login": "queen008", "password": "queenpw", "name": "Queen", "surname": "Lewis", "gmail": "queen@gmail.com", "number": "+998901555555" },
  { "id": 18, "login": "ryan009", "password": "ryanpass", "name": "Ryan", "surname": "Lee", "gmail": "ryan@gmail.com", "number": "+998901666666" },
  { "id": 19, "login": "sara010", "password": "sara010", "name": "Sara", "surname": "Walker", "gmail": "sara@gmail.com", "number": "+998901777777" },
  { "id": 20, "login": "tom011", "password": "tompw", "name": "Tom", "surname": "Hall", "gmail": "tom@gmail.com", "number": "+998901888888" },
  { "id": 21, "login": "ursula012", "password": "ursula", "name": "Ursula", "surname": "Allen", "gmail": "ursula@gmail.com", "number": "+998901999999" },
  { "id": 22, "login": "victor013", "password": "victor", "name": "Victor", "surname": "Young", "gmail": "victor@gmail.com", "number": "+998902000000" },
  { "id": 23, "login": "wendy014", "password": "wendy", "name": "Wendy", "surname": "Hernandez", "gmail": "wendy@gmail.com", "number": "+998902111111" },
  { "id": 24, "login": "xavier015", "password": "xavier", "name": "Xavier", "surname": "King", "gmail": "xavier@gmail.com", "number": "+998902222222" },
  { "id": 25, "login": "yara016", "password": "yara16", "name": "Yara", "surname": "Wright", "gmail": "yara@gmail.com", "number": "+998902333333" },
  { "id": 26, "login": "zack017", "password": "zack17", "name": "Zack", "surname": "Lopez", "gmail": "zack@gmail.com", "number": "+998902444444" },
  { "id": 27, "login": "anna018", "password": "anna18", "name": "Anna", "surname": "Hill", "gmail": "anna@gmail.com", "number": "+998902555555" },
  { "id": 28, "login": "bruce019", "password": "bruce19", "name": "Bruce", "surname": "Scott", "gmail": "bruce@gmail.com", "number": "+998902666666" },
  { "id": 29, "login": "carl020", "password": "carl20", "name": "Carl", "surname": "Green", "gmail": "carl@gmail.com", "number": "+998902777777" },
  { "id": 30, "login": "diana021", "password": "diana21", "name": "Diana", "surname": "Adams", "gmail": "diana@gmail.com", "number": "+998902888888" },
  { "id": 31, "login": "edward022", "password": "ed22", "name": "Edward", "surname": "Nelson", "gmail": "edward@gmail.com", "number": "+998902999999" },
  { "id": 32, "login": "fiona023", "password": "fiona23", "name": "Fiona", "surname": "Carter", "gmail": "fiona@gmail.com", "number": "+998903000000" },
  { "id": 33, "login": "george024", "password": "george24", "name": "George", "surname": "Mitchell", "gmail": "george@gmail.com", "number": "+998903111111" },
  { "id": 34, "login": "hannah025", "password": "hannah25", "name": "Hannah", "surname": "Perez", "gmail": "hannah@gmail.com", "number": "+998903222222" },
  { "id": 35, "login": "ian026", "password": "ian26", "name": "Ian", "surname": "Roberts", "gmail": "ian@gmail.com", "number": "+998903333333" },
  { "id": 36, "login": "julia027", "password": "julia27", "name": "Julia", "surname": "Turner", "gmail": "julia@gmail.com", "number": "+998903444444" },
  { "id": 37, "login": "kevin028", "password": "kevin28", "name": "Kevin", "surname": "Phillips", "gmail": "kevin@gmail.com", "number": "+998903555555" },
  { "id": 38, "login": "lisa029", "password": "lisa29", "name": "Lisa", "surname": "Campbell", "gmail": "lisa@gmail.com", "number": "+998903666666" },
  { "id": 39, "login": "mark030", "password": "mark30", "name": "Mark", "surname": "Parker", "gmail": "mark@gmail.com", "number": "+998903777777" },
  { "id": 40, "login": "nina031", "password": "nina31", "name": "Nina", "surname": "Evans", "gmail": "nina@gmail.com", "number": "+998903888888" },
  { "id": 41, "login": "oliver032", "password": "oliver32", "name": "Oliver", "surname": "Edwards", "gmail": "oliver@gmail.com", "number": "+998903999999" },
  { "id": 42, "login": "paula033", "password": "paula33", "name": "Paula", "surname": "Collins", "gmail": "paula@gmail.com", "number": "+998904000000" },
  { "id": 43, "login": "quinn034", "password": "quinn34", "name": "Quinn", "surname": "Stewart", "gmail": "quinn@gmail.com", "number": "+998904111111" },
  { "id": 44, "login": "rachel035", "password": "rachel35", "name": "Rachel", "surname": "Morris", "gmail": "rachel@gmail.com", "number": "+998904222222" },
  { "id": 45, "login": "sam036", "password": "sam36", "name": "Sam", "surname": "Rogers", "gmail": "sam@gmail.com", "number": "+998904333333" },
  { "id": 46, "login": "tina037", "password": "tina37", "name": "Tina", "surname": "Reed", "gmail": "tina@gmail.com", "number": "+998904444444" },
  { "id": 47, "login": "ursula038", "password": "ursula38", "name": "Ursula", "surname": "Cook", "gmail": "ursula38@gmail.com", "number": "+998904555555" },
  { "id": 48, "login": "victoria039", "password": "victoria39", "name": "Victoria", "surname": "Bailey", "gmail": "victoria@gmail.com", "number": "+998904666666" },
  { "id": 49, "login": "will040", "password": "will40", "name": "Will", "surname": "Cooper", "gmail": "will@gmail.com", "number": "+998904777777" },
  { "id": 50, "login": "xena041", "password": "xena41", "name": "Xena", "surname": "Richardson", "gmail": "xena@gmail.com", "number": "+998904888888" },
  { "id": 51, "login": "yusuf042", "password": "yusuf42", "name": "Yusuf", "surname": "Cox", "gmail": "yusuf@gmail.com", "number": "+998904999999" },
  { "id": 52, "login": "zoe043", "password": "zoe43", "name": "Zoe", "surname": "Howard", "gmail": "zoe@gmail.com", "number": "+998905000000" },
  { "id": 53, "login": "adam044", "password": "adam44", "name": "Adam", "surname": "Ward", "gmail": "adam@gmail.com", "number": "+998905111111" },
  { "id": 54, "login": "bella045", "password": "bella45", "name": "Bella", "surname": "Torres", "gmail": "bella@gmail.com", "number": "+998905222222" },
  { "id": 55, "login": "chris046", "password": "chris46", "name": "Chris", "surname": "Peterson", "gmail": "chris@gmail.com", "number": "+998905333333" },
  { "id": 56, "login": "daisy047", "password": "daisy47", "name": "Daisy", "surname": "Gray", "gmail": "daisy@gmail.com", "number": "+998905444444" },
  { "id": 57, "login": "ethan048", "password": "ethan48", "name": "Ethan", "surname": "Ramirez", "gmail": "ethan@gmail.com", "number": "+998905555555" },
  { "id": 58, "login": "faith049", "password": "faith49", "name": "Faith", "surname": "James", "gmail": "faith@gmail.com", "number": "+998905666666" },
  { "id": 59, "login": "gavin050", "password": "gavin50", "name": "Gavin", "surname": "Watson", "gmail": "gavin@gmail.com", "number": "+998905777777" },
  { "id": 60, "login": "hazel051", "password": "hazel51", "name": "Hazel", "surname": "Brooks", "gmail": "hazel@gmail.com", "number": "+998905888888" },
  { "id": 61, "login": "ian052", "password": "ian52", "name": "Ian", "surname": "Kelly", "gmail": "ian52@gmail.com", "number": "+998905999999" },
  { "id": 62, "login": "jane053", "password": "jane53", "name": "Jane", "surname": "Sanders", "gmail": "jane@gmail.com", "number": "+998906000000" },
  { "id": 63, "login": "kyle054", "password": "kyle54", "name": "Kyle", "surname": "Price", "gmail": "kyle@gmail.com", "number": "+998906111111" },
  { "id": 64, "login": "luna055", "password": "luna55", "name": "Luna", "surname": "Bennett", "gmail": "luna@gmail.com", "number": "+998906222222" },
  { "id": 65, "login": "mason056", "password": "mason56", "name": "Mason", "surname": "Wood", "gmail": "mason@gmail.com", "number": "+998906333333" },
  { "id": 66, "login": "nora057", "password": "nora57", "name": "Nora", "surname": "Barnes", "gmail": "nora@gmail.com", "number": "+998906444444" },
  { "id": 67, "login": "owen058", "password": "owen58", "name": "Owen", "surname": "Ross", "gmail": "owen@gmail.com", "number": "+998906555555" },
  { "id": 68, "login": "piper059", "password": "piper59", "name": "Piper", "surname": "Henderson", "gmail": "piper@gmail.com", "number": "+998906666666" },
  { "id": 69, "login": "quentin060", "password": "quentin60", "name": "Quentin", "surname": "Coleman", "gmail": "quentin@gmail.com", "number": "+998906777777" },
  { "id": 70, "login": "ruby061", "password": "ruby61", "name": "Ruby", "surname": "Jenkins", "gmail": "ruby@gmail.com", "number": "+998906888888" },
  { "id": 71, "login": "sean062", "password": "sean62", "name": "Sean", "surname": "Perry", "gmail": "sean@gmail.com", "number": "+998906999999" },
  { "id": 72, "login": "taylor063", "password": "taylor63", "name": "Taylor", "surname": "Powell", "gmail": "taylor@gmail.com", "number": "+998907000000" },
]

// ------------------ СООБЩЕНИЯ ------------------
app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/messages", (req, res) => {
  const { user, text, time } = req.body;
  if (!user || !text) {
    return res.status(400).json({ error: "user и text обязательны" });
  }
  const message = {
    user,
    text,
    time: time || new Date().toLocaleTimeString() // добавлено
  };
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