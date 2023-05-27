const express = require('express')
const router = express.Router()

router.post('/reguser',(req,res)=>{
 res.send('reguser OK')
})

router.post('/login',(req,res)=>{
 res.send('login OK')
})

module.exports = router