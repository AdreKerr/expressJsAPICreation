//? IMPORTING OUR RESTARUANT CLASS FROM THE DAO
const daoClass = require('../../dao/restdao');

//? MAking a new object class from the "restdao" classs template
const dao = new daoClass();

const express = require('express');
const router = express.Router();


router.get('/foodie', (req, res) => {
    dao.findAll(req, res);
})

module.exports = router;