
// core module  
const path = require("path");

// External module
const express = require("express");

// local module
const userrouter = require("./routes/userrouter");
const {hostrouter} = require("./routes/hostrouter");
const rootdir = require('./utils/pathutils')
const errorcontroller = require('./controllers/error');


const app = express();

app.use(express.static(path.join(rootdir,'public')))

app.use(express.urlencoded());

app.use(userrouter);
app.use(hostrouter);


app.set('view engine','ejs')
app.set('views','views')

app.use(errorcontroller.errorcontroller)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server at address http://localhost:${PORT}`);
});
