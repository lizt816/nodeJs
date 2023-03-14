let express = require('express')
let router = express.Router()
let mw = function(req,res,next){
    req.name = "局部中间件"
    next()
}
let mw2 = function(req,res,next){
    req.name = "局部中间件"
    next()
}
router.get('/userInfo',mw,mw2,(req,res)=>{
    console.log(req.params,"1111")
    res.send({name:'get'+req.name,message:'请求成功！'})
})

router.post('/userInfo',(req,res)=>{
    console.log(req.body,"---1111")
    res.send('post成功！！')
})

module.exports = router