// const express = require('express');
// const app = express();
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });
// const port = process.env.PORT || 3000; 
// app.listen(port, function () {
//     console.log("Server is running on port " + port);
// });
// app.get("/", function (req, res) {
//     res.send("Hello World!");
// });
// app.listen(8000, function () {
//     console.log("Server started on port 8000");
// });

// const express = require("express");
// const app = express();
// app.get("/", function (req, res) {
//     let today = new Date();
//     let dayToday = today.getDay();
//     if (dayToday === 6 || dayToday === 0){
//         res.send("Happy Weekend!");
//     } else{
//         res.send("Get up and code!");
//     }

// });
// app.listen(8000, function(){
//     console.log("Server started on port 8000")
// });

// const express = require("express");
// const app = express();
// app.get("/", function (req, res) {
//     let today = new Date();
//     let dayToday = today.getDay();
//     if (dayToday === 6 || dayToday === 0){
//         res.sendFile(__dirname + "/index.html");
//     } 

// });
// app.listen(8000, function(){
//     console.log("Server started on port 8000")
// });

// const express = require("express");
// const app = express();
// // app.set("views","views");
// app.use(express.urlencoded ({extended: true}));
// app.set('view engine', 'ejs');
// app.get("/", function (req, res) {
//     let today = new Date();
//     let myDate ={weekday: "long", day:"numeric", month:"long"};
//     let day= today.toLocaleDateString("en-US",myDate)
//     res.render("list", {myDay: day});
// });

// app.listen(8000, function(){
//     console.log("Server started on port 8000")
// }); 

// const express = require("express");
// const app = express();
// // let items =[];
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');

// let items= ["Wake up","Eat","Code","Rest"];

// app.get("/", function (req, res) {
//     let today = new Date();
//     let myDate = { weekday: "long", day: "numeric", month: "long" };
//     let day = today.toLocaleDateString("en-US", myDate)
//     res.render("list", { myDay: day, addedItem: items});
// });

// app.post("/", function (req, res) {
// //    const newItem = req.body.addItem;
//     // if (item) {
//         // items.push(newItem);
//     // //     console.log("Added item: "+ Item);
//     // }
//     var item = req.body.addItem;
//     items.push(item);
//     res.redirect("/");
// });

// app.listen(8000, function () {
//     console.log("Server started on port 8000");
// });
// const express = require ("express");
// const app = express();
// let items = ["Wake up","Eat","Code","Rest"];
// app.set('view engine', 'ejs');
// // app.use(express.urlencoded({extended: true}));
// app.use(express.static("public"));
// app.get("/", function(req, res){
// let today = new Date ();
// let myDate = {
//  weekday: "long",
//  day: "numeric",
//  month: "long"
// };
// let day = today.toLocaleDateString("en-US", myDate)

// res.render("list", {myDay: day, addedItem: items});

// });
// app.post("/", function(req, res){
// // item = req.body.addItem;
// var item = req.body.addItem;
// items.push(item);
//  res.redirect("/");
// })
// app.listen(8000, function(){
//  console.log("Server started on port 8000")
// })
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); 

let items = ["💼 Business Meeting", 
"🍿 Film Showing", 
"🏋️‍♀️ Gym/Work-out", 
"🎨 Art Class"];

app.get("/", function (req, res) {
  let today = new Date();
  let myDate = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", myDate);
  res.render("list", { myDay: day, addedItem: items });
});

app.post("/", function (req, res) {
  var item = req.body.addItem;
  items.push(item);
  res.redirect("/");
});

app.listen(8000, function () {
  console.log("Server started on port 8000");
});
