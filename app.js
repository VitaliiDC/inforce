const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express()

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
    secret: 'secretsometext',
    resave: true,
    saveUninitialized: true
}))

const port = 5000;
const pass = "9VxXRtOUZ7eQJowV";

app.use('/product', require("./routes/products"));

const mongoUri = `mongodb+srv://Vitalii_Drobit:${pass}@cluster0.jn0xs.mongodb.net/store?retryWrites=true&w=majority`

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(port, () => console.log(port))).catch(err => console.log(err))