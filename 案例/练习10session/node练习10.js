// 练习：
/*
 * 1. cookie  session
 * 2. 部署静态资源
 * 3. 使用session进行身份认证
 * 4. 使用最流行的JWT进行生成token的身份认证
**/

const express = require('express')
const router = require('./router/index')
const cors = require('cors')
const app = express()

// let session = require('express-session')
// app.use(session({
//     secret:'keyboard cat',
//     resave:false,
//     saveUninitialized:true
// }))


app.get("/api/jsonp",(req, res) => {
    // 1，获取客户端发送过来的回调函数的名字
    const funcName = req.query.callback
    // 2.得到要通过 JSONP 形式发送给客户端的数据
    const data = { name: 'zs' , age: 22 }
    // 3.根据前两步得到的数据，拼接出一个函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`// 4.把上一步拼接得到的字符串，响应给客户端的 <script> 标签进行解析执行
    res.send(scriptStr)
})

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(router)
app.use('/pages',express.static('./public'))
const {expressjwt} = require('express-jwt')
const secretKey = 'xiaohehehexiao Miss YOU !! ^_^'
app.use(expressjwt({secret:secretKey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))
app.use((err,req,res,next)=>{
 if(err.name === 'UnauthorizedError'){
  return res.send({status:401,message:'无效的token'})
 }
 res.send({status:500,message:'未知错误'})
})

app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1:80/pages')
})
