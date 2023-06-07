const PORT = 8000;

const express = require("express");
const { MongoClient } = require("mongodb");

require('dotenv').config()

const uri = `mongodb+srv:///${process.env.DB_USER}:${process.env.DB_PASS}@tinder-clone.p132heh.mongodb.net/tinder-clone?retryWrites=true&w=majority`

const app = express();

// Default
app.get("/", (req, res) => {
  res.json("Hello to my Tinder App");
});

// Sign up to the Database
app.post("/signup", (req, res) => {
  res.json("Welcome to signup");
});

// Get all Users by userIds in the Database
app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => console.log('server running on PORT ' + PORT))