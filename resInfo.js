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
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    partySize: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    special: {
      type: DataTypes.STRING,
      allowNull: true,
    }
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
  res.render('index');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/index.ejs', function(req, res) { //calls frontend to make the website
  res.render('index');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/about.ejs', function(req, res) { //calls frontend to make the website
  res.render('about');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/booking.ejs', function(req, res) { //calls frontend to make the website
  res.render('booking');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/contact.ejs', function(req, res) { //calls frontend to make the website
  res.render('contact');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/menu.ejs', function(req, res) { //calls frontend to make the website
  res.render('menu');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/service.ejs', function(req, res) { //calls frontend to make the website
  res.render('service');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/team.ejs', function(req, res) { //calls frontend to make the website
  res.render('team');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});

app.get('/testimonial.ejs', function(req, res) { //calls frontend to make the website
  res.render('testimonial');
  //res.sendFile(path.join(__dirname, '/Users/josephtsocanos/Documents/GitHub/A-MJLK/booking.html'));
});
// use res.render to load up an ejs view file


app.post('/reserveInfo', async function(req, res) { //accepts comments from front end and stores them
  //console.log("check")
  //console.log(req.body) //{name:}

  const previousReserve = await reserveInfo.findAll();
  //console.log(previousReserve)

  var repeatReserve = false

  //var temp = (previousReserve[0].dataValues.dateTime == Date('2024-11-29 07:12:00.000+00:00'))
  //console.log(temp)
  

  for (i = 0; i < previousReserve.length; i++){
    if (previousReserve[i].dataValues.dateTime == req.body.dateTime){
      repeatReserve = true
      //console.log(previousReserve[i].dataValues.dateTime)
    }
  }
  //console.log(repeatReserve)

  if (repeatReserve == false){
    const ID = await reserveInfo.create({ 
      name: req.body.name, 
      email: req.body.email, 
      dateTime: req.body.dateTime, 
      partySize: req.body.partySize,
      special: req.body.specialReq
    });
    console.log("Auto-generated ID:", ID.id);
} else {
    console.log("Time already booked")
}


  res.redirect('/booking.ejs') //redirects to booking page
});

app.listen(4000);
console.log('Server is listening on port 4000');






