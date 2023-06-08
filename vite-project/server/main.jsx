const PORT = 8000;
const express = require("express");
const { MongoClient } = require("mongodb");
const {v4:uuidv4} = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const cors = require ('cors')


const uri =
  "mongodb+srv://softengineer:mypassword@cluster0.gynkk8j.mongodb.net/Cluster0?retryWrites=true&w=majority";

const app = express();
app.use(cors())

// Default
app.get("/", (req, res) => {
  res.json("Hello to my Tinder App");
});

// Sign up to the Database
app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  console.log(req.body)
  const {email, password} = req.body

  const generatedUserId = uuidv4()
  const hashedPassword = await bcrypt.hash(password,10)

  try{
    client.connect()
    const database = client.db("app-data")
    const users = database.collection("users");

    const existingUser = users.findOne({email})

    if (existingUser){
      return res.status(409).send('User already exists! Please login')
    }

    const sanitizedEmail = email.toLowerCase()

    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword
    }

    const insertedUser = users.insertOne(data)

    const token = jwt.sign(insertedUser,sanitizedEmail,{
      expiresIn: 60 * 24, /* expires in 24h */
    })
    
    res.status(201).json({token, userId: generatedUserId, email: sanitizedEmail})

  }catch(err){
    console.log(err)
  }

});

// Get all Users by userIds in the Database
app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    const database = client.db("app-data")
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const users = database.collection("users");

    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } finally {

    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

app.listen(PORT, () => console.log("server running on PORT " + PORT));
