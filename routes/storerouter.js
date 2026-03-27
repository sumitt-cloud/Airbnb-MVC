const express = require('express')
const storerouter = express.Router()


const storecontroller = require('../controllers/storecontroller')

storerouter.get("/",storecontroller.getindex)

storerouter.get("/home",storecontroller.gethome)

storerouter.get("/bookings",storecontroller.getbookings)

storerouter.get("/favourite",storecontroller.getfavouritelist)

module.exports = storerouter;