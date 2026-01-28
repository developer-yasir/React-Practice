const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mock Data
const users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net"
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org"
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca"
    }
];

// API Endpoint
app.get('/api/users', (req, res) => {
    console.log('GET /api/users called'); // Log to see in terminal
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
