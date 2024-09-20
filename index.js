const express = require("express")
require("dotenv").config()
const sequelize = require("./database")
const models = require('./models/model')
const Cryptojs = require('crypto-js')
const cors = require('cors')



const HOST = process.env.HOST
const PORT = process.env.PORT
const app = express()


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
  });
app.use(fileUpload({}));
app.use(cors())
app.use(express.json())
app.use(express.static('controlles'))



const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, HOST, () => console.log(`Server start on ${HOST}:${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

start()