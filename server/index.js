import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import machineRoutes from './routes/Machine.js'

const app = express();

app.use(cors())

app.use(bodyParser.json());


const DB_URL = 'mongodb+srv://kiranraj80555:otvzK9qJ8zavtrY0@cluster0.9mmiixz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

  app.use('/api/machines', machineRoutes);
  
  
  // app.get('/api/machines', async (req, res) => {
  //   try {
  //     const todos = await Todo.find();
  //     res.json(todos);
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
  // });
  
  // app.post('/api/todos', async (req, res) => {
  //   const todo = new Todo({
  //     title: req.body.title,
  //     completed: req.body.completed || false
  //   });
  //   try {
  //     const newTodo = await todo.save();
  //     res.status(201).json(newTodo);
  //   } catch (err) {
  //     res.status(400).json({ message: err.message });
  //   }
  // });

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  const PORT = process.env.PORT || 5500;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  