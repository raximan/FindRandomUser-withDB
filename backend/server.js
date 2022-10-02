const express = require("express");
const app = express()
const cors = require("cors")
require('dotenv').config()
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json())

const dbpsw=process.env.DB_PSW
const database = process.env.DATABASE
mongoose.connect(`mongodb+srv://clusterzetfive:${dbpsw}@clusterzetfive.hgsljqo.mongodb.net/${database}`)

app.use("/",require("./routes/testRoute"))

app.listen(3001,()=>console.log("Server running on port 3001"))