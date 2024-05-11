import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import machineRoutes from './routes/Machine.js'
import dotenv from 'dotenv';

const app = express();

app.use(cors())

app.use(bodyParser.json());


const DB_URL = process.env.CONNECTION_URL;

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
  

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  const PORT = process.env.PORT || 5500;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  