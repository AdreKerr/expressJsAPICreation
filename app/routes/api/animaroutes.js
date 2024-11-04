const daoClass = require('../../dao/animaldao');


const dao = new daoClass();

const express = require('express');
const router = express.Router();


router.get('/animals', (req, res) => {
    dao.findAllInfo(req, res);
})
router.get('/one',(req,res)=>{
    dao.findIdOne(req,res);
})

module.exports = router;