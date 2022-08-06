// importing Owner class
const Owner = require('../models/owner');

// we will now create middleware functions we will use for our owners routes

exports.getNewOwner = (req, res, next) => {
  // todo
  res.render('owner/new', {
    pageTitle: 'Create Owner',
    path: './new'
  })
};

exports.postCreateOwner = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const owner = new Owner(null, name, age, mood);
  // this returns a promise, hence we need a then statement
  owner.save()
    .then(result => {
      console.log('Hello World!', result);
      // todo
      return res.redirect('/owners');
    })
    .catch(err => console.log(err));
};

exports.getOwners = (req, res, next) => {
  // this returns a promise hence we need our render in a .then statement
  Owner.fetchAll()
    .then(owners => {
      console.log(owners[0]);
      // todo
      res.render('owner/index', {
        owners: owners[0],
        pageTitle: 'All Owners',
        path: 'owners'
      });
    });
};