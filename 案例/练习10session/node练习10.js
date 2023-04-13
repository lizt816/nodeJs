// 练习：
/*
 * 1. cookie  session
 * 2. 部署静态资源
**/

const express = require('express')
const router = require('./router/index')
const cors = require('cors')
const http = require('http')
const server = http.createServer()
const app = express()

let session = require('express-session')

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}))
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
app.use('/pages',express.static('./public'))

app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1:80/pages')
})

// app.on('request',(req,res)=>{
//     console.log('request-----')
//     let method = req.method;
//     let url = req.url;
//     let fpath = '';
//     // 只要有客户端来请求我们自己的服务器，就会触发request事件，调用内部方法
//     new Promise((resolve,reject)=>{
//         // if(url === '/'){
//             fpath = path.join(__dirname,'./public/index.html')
//         // } else{
//         //     fpath = path.join(__dirname,'/html',url)
//         // }
//         fs.readFile(fpath,'utf8',(err,data)=>{
//             if(err) return reject({err,res});
//             resolve({data,res})
//         })
//     }).then((res)=>{
//         console.log(res.data,"--***")
//         res.res.setHeader('Content-Type', 'text/html; charset=utf-8')
//         res.res.end(res.data)
//     }).catch(err=>{
//         err.res.end('<h1>404 Not found!</h1>')
//     })
// })