// jshint eversion.6


const express = require("express");
const bodyParser = require("body-parser");
// requiring 2 packages weve installed

const app = express();
let items = []; // use const so datatype won't be changed
app.set('view engine', 'ejs'); // telling app to use ejs as view engine

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  // process/calls on server side, defines what should happen when a user makes a get rewuest on the home route


  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { // gets sent over to list.ejs file as 'kindOfDay' variable
    kindOfDay: day,
    newListItems: items
  });
  // rendering a file called list, and we're passing that variable a value of the current variable stated in this file
});
// get routes that prints hello when user interracts with homepage

app.post("/", function(req, res) {
  var item = req.body.newItem; // grabs hold a varible set by user in list.ejs
  items.push(item); // add that item to item array
  // res.redirect("/"); // takes back to app.get
  // console.log(items);
  res.redirect('/')
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
