const fs = require("fs");
const path = require("path");
const rootdir = require("../utils/pathutils");

// fake database!
let registeredhomes = [];

module.exports = class Home {
  constructor(housename, price, rating, location, photourl) {
    this.housename = housename;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photourl = photourl;
  }

  save() {
    Home.fetchall((registeredhomes) => {
      registeredhomes.push(this);
      const homedatapath = path.join(rootdir, "data", "homes.json");
      fs.writeFile(homedatapath, JSON.stringify(registeredhomes), (error) => {
        console.log("file writing concluded", error);
      });
    });
  }

  static fetchall(callback) {
    const homedatapath = path.join(rootdir, "data", "homes.json");
    fs.readFile(homedatapath, (err, data) =>
      callback(!err ? JSON.parse(data) : []),
    );
  }
};
