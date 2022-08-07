// importing Owner class
const Owner = require('../models/owner');

// we will now create middleware functions we will use for our owners routes

exports.getNewOwner = (req, res, next) => {
  res.render('owner/new', {
    pageTitle: 'Create Owner',
    path: './new'
  })
};

exports.postCreateOwner = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;

  // this interacts with the database and returns a promise, hence we need a then statement
  Owner.create({name: name, age: age})
    .then(result => {
      return res.redirect('/owners');
    })
    .catch(err => console.log(err));
};

exports.getOwners = (req, res, next) => {
  // this queries the database returns a promise hence we need our render in a .then statement
  Owner.findAll()
    .then(owners => {
      console.log('getOwners', owners);
      res.render('owner/index', {
        owners: owners,
        pageTitle: 'All Owners',
        path: 'owners'
      });
    })
    .catch(err => console.log(err));
};