const Home = require("../models/home");
exports.getaddhome = (req, res, next) => {
  res.render("host/addhome", {
    pagetitle: "addhome to airbnb",
    currentpage: "addhome",
  });
};

exports.postaddhome = (req, res, next) => {
  const { housename, price, rating, location, photour } = req.body;

  const home = new Home(housename, price, rating, location, photour);

  home.save();

  res.render("host/home-Added", {
    pagetitle: "Homeadded successfully",
    currentpage: "homeadded",
  });
};


exports.gethosthomes = (req,res,next) =>{
  Home.fetchall((registeredhomes) => {
    res.render("host/host-home-lst" , {
      registeredhomes,
      pagetitle:'Host home list',
      currentpage :'host-homes'
    })
  })
}