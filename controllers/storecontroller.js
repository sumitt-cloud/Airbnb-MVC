const Home = require("../models/home");

exports.gethome = (req,res,next) =>{
  Home.fetchall((registeredhomes)=>{
    res.render('store/home-list',{
      registeredhomes,
      pagetitle:'Home list',
      currentpage:'Home'
    })
  })
}

exports.getindex = (req,res,next) =>{
  Home.fetchall((registeredhomes)=>{
    res.render('store/index',{
      registeredhomes,
      pagetitle:'airbndHome',
      currentpage:'index'
    })
  })
}

exports.getbookings = (req,res,next) =>{
  res.render('store/bookings',{
    pagetitle:'my bookings',
    currentpage:'bookings'
  })
}

exports.getfavouritelist = (req,res,next) =>{
  Home.fetchall((registeredhomes)=>{
    res.render('store/favourite-list',{
      registeredhomes,
      pagetitle:'my favourites',
      currentpage:'favourite'
    })
  })  
}

/* ✅ ADD THESE */
exports.getaddhome = (req,res,next)=>{
  res.render('host/add-home',{
    pagetitle:'Add Home',
    currentpage:'add-home'
  })
}

exports.postaddhome = (req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
}