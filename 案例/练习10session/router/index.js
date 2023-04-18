let express = require('express')
let router = express.Router()
const jwt = require('jsonwebtoken')
const secretKey = 'xiaohehehexiao Miss YOU !! ^_^'


router.post('/api/logout',(req,res)=>{
 // req.session.destroy()  // 清空当前客户端对应的 session 信息
 res.send({status:200,msg:'退出登录成功'})
})

router.get('/admin/getuser',(req,res)=>{
 // 使用jwt判断是否登录
 console.log(req.auth,"--*111*")
 console.log(req.user,"--**")
 res.send({status:200,msg:'获取成功',username:'req'})
 // 使用session判断用户是否登录
 // if(!req.session.islogin){
 //    return res.send({status:300,mag:'未登录'})
 //   }
 //   res.send({status:200,msg:'获取成功',username:req.session.user.username})
})

router.post('/api/login',(req,res)=>{
 // 判断用户提交的登录信息身份正确
 console.log(req.body.username)
 console.log(req.body.password,"---")
 if(req.body.username !== 'admin' || req.body.password !== '000000'){
     return res.send({status:1,mag:'登录失败'})
 }
 console.log(req.session,"--**")
  // req.session.user = req.body   // 登录信息存在session中
  // req.session.islogin= true       // 登录状态存在session中
  let token = jwt.sign({username:req.body.username},secretKey,{expiresIn:'30s'})
  res.send({
   status:200,
   mag:'登录成功',
   token // 使用 jwt 进行身份认证
  })
})

router.get('/api/getUserInfo',(req,res)=>{
    const query = req.query
    res.send({
       status:200,                    // 状态，表示请求成功
       msg:'GET请求成功！',   // 描述状态
       data:query
    })
})

router.post('/api/postUserInfo',(req,res)=>{
    const body = req.body
    res.send({
        status:200,                    // 状态，表示请求成功
        msg:'POST请求成功！',   // 描述状态
        data:body
     })
})

router.delete('/api/deleteUserInfo',(req,res)=>{
    const body = req.body
    res.send({
        status:200,                    // 状态，表示请求成功
        msg:'DELETE请求成功！',   // 描述状态
        data:body
     })
})


module.exports = router