
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

// Replace the below with your actual MongoDB Atlas URI (as a string in quotes)
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);
const dbName = 'penboss';

// GET all products endpoint
app.get('/products', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const products = await db.collection('products').find({}).toArray();
  res.json(products);
});

// POST save order endpoint (this is what you are asking about)
app.post('/orders', async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  await db.collection('orders').insertOne(req.body); // { name, cart, total }
  res.json({ status: "success" });
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));
