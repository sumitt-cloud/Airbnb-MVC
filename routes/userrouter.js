const express = require('express')
const userrouter = express.Router()


const usercontroller = require('../controllers/homes')

userrouter.get("/",usercontroller.gethome)

module.exports = userrouter;