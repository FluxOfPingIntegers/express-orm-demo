// importing Pet class
const Pet = require('../models/pet');

// we will now create middleware functions we will use for our pets routes

exports.getNewPet = (req, res, next) => {
  res.render('pet/new', {
    pageTitle: 'Create Pet',
    path: './new'
  });
};

exports.postCreatePet = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const type = req.body.type;
  // this interacts with the database and returns a promise, hence we need a then statement
  Pet.create({name: name, age: age, type: type})
    .then(result => {
      return res.redirect('/pets');
    })
    .catch(err => console.log(err));
};

exports.getPets = (req, res, next) => {
  // this queries the database and returns a promise hence we need our render in a .then statement
  Pet.findAll()
    .then(pets => {
      res.render('pet/index', {
        pets: pets,
        pageTitle: 'All Pets',
        path: 'pets'
      });
    })
    .catch(err => console.log(err));
};