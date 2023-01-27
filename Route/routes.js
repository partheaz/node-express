const express = require('express');
const router = express.Router()

router.get('/getall',(req , res )=>{
    res.send('working properly')
})
module.exports = router;