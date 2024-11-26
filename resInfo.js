var express = require('express');
var app = express();

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'bookingDatabase.sqlite' //path to dtabase file
});

const reserveInfo = sequelize.define(
  'reserveInfo',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    //email: {
    //    type: DataTypes.STRING,
    //    allowNull: false
    //},
    //dateTime: {
    //    type: DataTypes.STRING, //Figure out the date time stuff
    //    allowNull: false,
    //},
    //partySize: {
    //    type: DataTypes.INTEGER,
    //    allowNull: false,
    //},
  },
  {
    // Other model options go here
  },
);

async function asyncFunction () {
  await reserveInfo.sync();
  console.log('The table for the User model was just (re)created!');
}
asyncFunction();


// `sequelize.define` also returns the model
// console.log(reserveInfo == sequelize.models.comments); // true

// For parsing application/json
app.use(express.json());
app.use(express.static("scss"));
app.use(express.static("img"));
app.use(express.static("css"));
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

//const path = require('path')

app.get('/', function(req, res) { //calls frontend to make the website
  console.log('get check')
  res.render('index');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/index.ejs', function(req, res) { //calls frontend to make the website
  console.log('get check')
  res.render('index');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/about.ejs', function(req, res) { //calls frontend to make the website
  console.log('get check')
  res.render('about');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/booking.ejs', function(req, res) { //calls frontend to make the website
  console.log('get check')
  res.render('booking');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/contact.ejs', function(req, res) { //calls frontend to make the website
  console.log('get check')
  res.render('contact');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/menu.ejs', function(req, res) { //calls frontend to make the website
  console.log('get check')
  res.render('menu');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/service.ejs', function(req, res) { //calls frontend to make the website
  console.log('get check')
  res.render('service');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/team.ejs', function(req, res) { //calls frontend to make the website
  console.log('get check')
  res.render('team');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/testimonial.ejs', function(req, res) { //calls frontend to make the website
  console.log('get check')
  res.render('testimonial');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});
// use res.render to load up an ejs view file


app.post('/reserveInfo', async function(req, res) { //accepts comments from front end and stores them
  console.log("check")
  console.log(req.body) //{name:}
  //const reserveName = req.body.name
  //const ID = await reserveInfo.create({ reserveName: name});
  //console.log("Auto-generated ID:", ID.id);
  
  //console.log(comments)
  // res.send('post method')
  res.redirect('/booking.ejs') //redirects to booking page
});

app.listen(4000);
console.log('Server is listening on port 3000');






