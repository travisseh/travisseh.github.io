var express = require("express")
var app = express()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var ejs = require('ejs')
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Travdog_1',
    database : 'KinoHelper'
})
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static("public"))

let testId
let trueId

// app.locals.testVar= 'test'
// global.test2 = "test2"

var name = 'testName'
exports.name = name


app.post("/create_account", function(req, res){
  var user = {
      email: req.body.email,
      password: req.body.password
  }
  connection.query('INSERT INTO users SET ?', user, function(err, result) {
      if (err) throw err;
      testId = connection.query('SELECT id FROM users WHERE email = ?', user.email, function (err, result){
        if (err) throw err
      trueId = testId._results[0][0].id
      console.log(trueId)
      res.render("chooseWorkout.ejs", {trueId: trueId})
      })
  })
})















//PAGE NAVIGATION
app.get("/", function(req, res){
  res.render("index")
})
app.get("/chooseWorkout", function(req, res){
  res.render("chooseWorkout.ejs")
})
app.get("/aDay", function(req, res){
  res.render("aDay")
})
app.get("/bDay", function(req, res){
  res.render("bDay")
})
app.get("/cDay", function(req, res){
  res.render("cDay")
})
app.get("/calorieCalc", function(req, res){
  res.render("calorieCalc")
})
app.get("/jokes", function(req, res){
  res.send('working!!!')
})


//FOOTER STUFF
app.get("*", function(req, res){
  res.render("index")
})

app.listen(8080, function(){
console.log("Server running!")
})


// TEST FOR DB CONNECTION
// const q = 'SELECT * FROM users limit 1'

// connection.query(q, function(error, result, fields) {
//     if (error) throw error
//     console.log(result)
// }
// )

//QUERYING WITH GETS
// app.get("/", function(req, res){
//   // Find count of users in DB
//   var q = "SELECT COUNT(*) AS count FROM users";
//   connection.query(q, function(err, results){
//       if(err) throw err;
//       var count = results[0].count; 
//       res.render("home", {count: count});
//   });
// });






