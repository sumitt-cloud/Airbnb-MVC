const express = require('express')
const storerouter = express.Router()


const storecontroller = require('../controllers/storecontroller')

storerouter.get("/",storecontroller.gethome)
storerouter.get("/bookings",storecontroller.getbookings)

module.exports = storerouter;