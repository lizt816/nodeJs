// 练习：
/*
 * 1. 开始写接口
 * 2. 
**/

const express = require('express')
const router = require('./router/index')
const public = require('./router/public')
const cors = require('cors')

const app = express()

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
app.use('/api',router)
app.use('/t',public)
app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1:80')
})
