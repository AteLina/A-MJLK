var express = require('express');
var app = express();

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const CustomerAccounts = sequelize.define(
  'CustomerAccounts',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    // Other model options go here
  },
);

const EmployeeAccounts = sequelize.define(
    'EmployeeAccounts',
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      employeeID: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      // Other model options go here
    },
  );
/////////////////////////////////////////////////////////////////////

async function asyncFunction () {
  await CustomerAccounts.sync();
  await EmployeeAccounts.sync(); // Refreshing existing table 
  console.log('The table for the Comments model was just (re)created!');
}
asyncFunction();

// let comments = []

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
//app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', async function(req, res) {
  res.sendFile(path.join(__dirname, 'dne.html'));
});

app.post('/account', async function(req, res) {
  console.log("check")
  console.log(req.body)
  const ID = await Comments.create({ contents: comment});
  console.log("Auto-generated ID:", ID.id);
  
  // console.log(comments)
  // res.send('post method')
  res.redirect('/')
});

app.listen(3000);
console.log('Server is listening on port 3000');