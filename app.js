const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

// importing sequelize instance with database configurations
const sequelize = require('./util/database');

// Importing Owner model
const Owner = require('./models/owner');

// IMporting Pet model
const Pet = require('./models/pet');

// this variable is a valid request handler
const app = express();

// telling express to use the pug templating engine
app.set('view engine', 'pug');

// importing our owner routes & middleware functions
ownerRoutes = require('./routes/owner');

// importing our pet routes & middleware functions
petRoutes = require('./routes/pet');

// allowing user submitted data to be available in the request object
app.use(bodyParser.urlencoded({extended: false}));

/// allows our html files to search within the public folder for links & scripts
app.use(express.static(path.join(__dirname, 'public')));

// using our owner middleware functions to handle http requests beginning with '/owners'
app.use('/owners', ownerRoutes);

// using our pet middleware functions to handle http requests beginning with '/pets'
app.use('/pets', petRoutes);

// todo
app.use(errorController.get404);

// establishing that a Pet belongs to an Owner through Sequelize model associations
Pet.belongsTo(Owner, {
  constraints: true,
  onDelete: 'CASCADE'
});

// establishing that a Owner has many Pets through Sequelize model associations
Owner.hasMany(Pet);

// using our Sequelize instance to connect with the database through the sync method.  This returns a promise.
// Since this returns a promise we need to start the server in a .then statement.
sequelize
  // .sync({force: true}) // will drop all tables, and recreate them upon startup
  .sync() // will simply create the tables if they do not exist
  .then(result => {
    // setting the port # for our server.  The starting url is localhost:3000/owners/new
    app.listen(3000);
  })
  .catch(err => console.log(err));