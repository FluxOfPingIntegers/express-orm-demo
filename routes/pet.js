const path = require('path');

const express = require('express');

// importing our pet middleware
const petController = require('../controllers/pet');

// creating router object
const router = express.Router();

// /pets/new => GET
router.get('/new', petController.getNewPet);

// /pets/ => GET
router.get('/', petController.getPets);

// /pets/create => POST
router.post('/create', petController.postCreatePet);

// exporting router object containing our controller actions
module.exports = router;