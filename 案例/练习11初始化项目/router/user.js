const express = require('express')
const router = express.Router()
const api = require('../router_handler/user')

router.post('/reguser',(req,res)=>{
 api.reguser(req,res)
})

router.post('/login',(req,res)=>{
 api.login(req,res)
})

module.exports = router