const path = require('path');

const express = require('express');

// todo
// importing our pet middleware
// const petController = require('../controllers/pet');

// creating router object
const router = express.Router();

// todo
// /pets/new => GET
// router.get('/new', petController.getNewPet);

// todo
// /pets/ => GET
// router.get('/', petController.getPets);

// todo
// /pets/create => POST
// router.post('/create', petController.postCreatePet);

// exporting router object containing our controller actions
module.exports = router;