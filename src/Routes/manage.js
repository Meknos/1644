const express = require('express');
const router = express.Router();

const manageController = require('../app/controller/ManageController');

router.get('/stored/toys', manageController.storedToys);



module.exports = router;