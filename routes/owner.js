const path = require('path');

const express = require('express');

// todo
// importing our owner middleware
// const ownerController = require('../controllers/owner');

// creating router object
const router = express.Router();

// todo
// /owners/new => GET
// router.get('/new', ownerController.getNewOwner);

// todo
// /owners/ => GET
// router.get('/', ownerController.getOwners);

// todo
// /owners/create => POST
// router.post('/create', ownerController.postCreateOwner);

// exporting router object containing our controller actions
module.exports = router;