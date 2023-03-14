// express 插件练习：
/*
 * 1. 相比http内置模块更加高级方便的插件
 * 2. 监听get和post请求
 * 3. 部署静态文件app.use(express.static('public'))
 * 4. 路由封装接口
 * 5. 中间件函数
 * 6. 第三方中间件
**/

const express = require('express')
const parser = require('body-parser')
const app = express()
// console.log(express.json(),"111")
// app.use(express.json())
app.use(parser.urlencoded({extended:false}))
// app.use(express.urlencoded({extended:false}))
app.use('/imgss',express.static('./public'))

// app.listen(8081,()=>{
//     console.log('express server running at http://127.0.0.1:8081') 
// })

// app.get('/userInfo/:id/:name',(req,res)=>{
//     console.log(req.params,"1111")
//     res.send({name:'get',message:'请求成功！'})
// })

// app.post('/userInfo',(req,res)=>{
//     console.log(req,"1111")
//     res.send('post成功！！')
// })

// 以上方式可优化，将这些路由模块化

app.use((req,res,next)=>{
    console.log('最简单的中间件函数！！')
    // throw new Error('服务器发生错误！！')
    req.name = "1223456"
    next()
})
app.use((err,req,res,next)=>{
    console.log(err+'----错误中间件')
    res.send(err+'----错误中间件')
})
const userRouter = require('./router/index.js')
app.use('/api',userRouter)

app.listen(8081,()=>{
    console.log('express server running at http://127.0.0.1:8081') 
})



