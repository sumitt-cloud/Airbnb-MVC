const express = require("express");

const hostrouter = express.Router();

const homescontroller =  require('../controllers/homes')

hostrouter.get("/host/add-home",  homescontroller.getaddhome)

hostrouter.post("/host/add-home", homescontroller.postaddhome)

exports.hostrouter = hostrouter;