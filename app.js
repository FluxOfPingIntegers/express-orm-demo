const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// todo
const sequelize = require('./util/database');
// todo
const Owner = require('./models/owner');
// todo
const Pet = require('./models/pet');

// this variable is a valid request handler
const app = express();

// telling express to use the pug templating engine
app.set('view engine', 'pug');

// todo
ownerRoutes = require('./routes/owner');
// todo
petRoutes = require('./routes/pet');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// todo
app.use('/owner', ownerRoutes);
// todo
app.use('/pet', petRoutes);

// todo
app.use(errorController.get404);

//todo
Pet.belongsTo(Owner, {
  constraints: true,
  onDelete: 'CASCADE'
});
Owner.hasMany(Pet);

// todo
sequelize
.sinc({force: true})
// .sinc()
.then(result => {
  app.listen(3000);
})
.catch(err => console.log(err));