// importing Pet class
const Pet = require('../models/pet');

// we will now create middleware functions we will use for our pets routes

exports.getNewPet = (req, res, next) => {
  // todo
  res.render('pet/new', {
    pageTitle: 'Create Pet',
    path: './new'
  });
};

exports.postCreatePet = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const type = req.body.type;
  const pet = new Pet(null, name, age, type);
  // this returns a promise, hence we need a then statement
  pet.save()
    .then(result => {
      console.log('*wags tail*', result);
      // todo
      return res.redirect('/pets');
    })
    .catch(err => console.log(err));
};

exports.getPets = (req, res, next) => {
  // this returns a promise hence we need our render in a .then statement
  Pet.fetchAll()
    .then(pets => {
      console.log(pets[0]);
      // todo
      res.render('pet/index', {
        pets: pets[0],
        pageTitle: 'All Pets',
        path: 'pets'
      });
    });
};