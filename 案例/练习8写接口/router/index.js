let express = require('express')
let router = express.Router()



router.get('/getUserInfo',(req,res)=>{
    const query = req.query
    res.send({
       status:200,                    // 状态，表示请求成功
       msg:'GET请求成功！',   // 描述状态
       data:query
    })
})

router.post('/postUserInfo',(req,res)=>{
    const body = req.body
    res.send({
        status:200,                    // 状态，表示请求成功
        msg:'GET请求成功！',   // 描述状态
        data:body
     })
})

module.exports = router