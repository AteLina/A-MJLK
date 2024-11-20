var express = require('express');
var app = express();

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/bookingDatabase.sqlite' //path to dtabase file
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
        type: DataTypes.STRING, //Figure out the fucking date time stuff
        allowNull: false,
    },
    partySize: {
        type: Integer,
        allowNull: false,
    },
  },
  {
    // Other model options go here
  },
);

async function asyncFunction () {
  await resInfo.sync();
  console.log('The table for the User model was just (re)created!');
}
asyncFunction();


// `sequelize.define` also returns the model
console.log(reserveInfo == sequelize.models.comments); // true

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file


app.post('/reserveInfo', async function(req, res) { //accepts comments from front end and stores them
  // console.log(req.body)
  const reservePost = req.body.name
  const ID = await reserveInfo.create({ contents: name});
  console.log("Auto-generated ID:", ID.id);
  
  //console.log(comments)
  // res.send('post method')
  res.redirect('/') //redirects to main page (first app.get)
});

app.listen(3000);
console.log('Server is listening on port 3000');






