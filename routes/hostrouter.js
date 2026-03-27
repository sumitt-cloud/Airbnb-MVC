const express = require("express");

const hostrouter = express.Router();

const hostcontroller =  require('../controllers/storecontroller')

hostrouter.get("/add-home",  hostcontroller.getaddhome)

hostrouter.post("/add-home", hostcontroller.postaddhome)
hostrouter.get("/host-home-list", hostcontroller.gethosthome)

module.exports = hostrouter;