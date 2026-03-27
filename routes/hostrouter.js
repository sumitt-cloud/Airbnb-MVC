const express = require("express");

const hostrouter = express.Router();

const hostcontroller =  require('../controllers/hostcontroller')

hostrouter.get("/add-home",  hostcontroller.getaddhome)

hostrouter.post("/add-home", hostcontroller.postaddhome)

hostrouter.get("/host-home-list", hostcontroller.gethosthomes)

module.exports = hostrouter;