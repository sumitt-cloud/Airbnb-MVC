const Home = require("../models/home");


exports.gethome = (req,res,next) =>{
 Home.fetchall( (registeredhomes) =>{
    res.render('store/home-list',{registeredhomes,pagetitle:'airbndHome', currentpage:'Home'
    })
  })

}
exports.getbookings = (req,res,next) =>{
 Home.fetchall( (registeredhomes) =>{
    res.render('store/bookings',{pagetitle:'my bookings', currentpage:'bookings'
    })
  })
}