const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

const mongoDB = "mongodb+srv://kirillsumcov14:0301mkks@cluster0.c69yj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoDB)
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch((erroe) => {
        console.log(erroe);
    })

const todoSchema = new mongoose.Schema({
    text: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

// CRUD маршрути
// Create
app.post('/todos', async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
        completed: req.body.completed || false
    });
    await todo.save();
    res.json(todo);
});

// Read
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Update
app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const todo = await Todo.findByIdAndUpdate(id, updates, { new: true });
    res.json(todo);
});

// Delete
app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'Todo deleted' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const mongoDB = "mongodb+srv://kirillsumcov14:0301mkks@cluster0.c69yj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// mongoose.connect(mongoDB)
//     .then(() => {
//         console.log("Connected to mongoDB");
//     })
//     .catch((erroe) => {
//         console.log(erroe);
//     })

// const db = mongoose.connection;
// db.on("error", () => {
//     console.log("error");

// })
// db.once("open", () => {
//     console.log("connected");

// })
// const app = express()
// const PORT = 3000;

// app.use(cors());
// app.use(express.json())

// // Використання cors middleware


// app.get('/api/todo', (req, res) => {
//     res.json({ message: 'Отримано список' });
// });

// // Створення нового користувача
// app.post('/api/todo', (req, res) => {
//     // Логіка створення користувача
//     res.json({ message: 'Створено нового списку' });
// });

// // Оновлення інформації про користувача за ID
// app.put('/api/todo/:id', (req, res) => {
//     // Логіка оновлення інформації про користувача за ID
//     res.json({ message: 'Інформацію про список оновлено' });
// });

// // Видалення користувача за ID
// app.delete('/api/todo/:id', (req, res) => {
//     // Логіка видалення користувача за ID
//     res.json({ message: 'Список видалено' });
// });


// app.listen(PORT, () => {
//     console.log(`Сервер слухає на порті ${PORT}`);
// })

