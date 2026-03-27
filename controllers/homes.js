const Home = require("../models/home");
exports.getaddhome = (req, res, next) => {
  res.render("host/addhome", {
    pagetitle: "addhome to airbnb",
    currentpage: "addhome",
  });
};

exports.postaddhome = (req, res, next) => {


  const {housename, price, rating, location, photour} = req.body

  const home = new Home(housename, price, rating, location, photour)
  
  home.save()

  
  res.render("host/homeAdded", {
    pagetitle: "Homeadded successfully",
    currentpage: "homeadded",
  });
}

exports.gethome = (req,res,next) =>{
 Home.fetchall( (registeredhomes) =>{
    res.render('store/homelist',{registeredhomes,pagetitle:'airbndHome', currentpage:'Home'
    })
  })

}