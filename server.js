require('dotenv').config()


const express = require('express')

//express
const app = express()

//middleware
app.use(express.json())