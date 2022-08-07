const path = require('path');

const express = require('express');

// importing our owner middleware
const ownerController = require('../controllers/owner');

// creating router object
const router = express.Router();

// /owners/new => GET
router.get('/new', ownerController.getNewOwner);

// /owners/ => GET
router.get('/', ownerController.getOwners);

// /owners/create => POST
router.post('/create', ownerController.postCreateOwner);

// exporting router object containing our controller actions
module.exports = router;