// path 模块练习：
/*
 * 要求： 基于指定IP拼接指定路径访问指定页面
 * 步骤：
 * 1. 创建不同页面
 * 2. 使用IP在拼接路由任何给浏览器返回指定数据
**/


const http = require('http')
const server = http.createServer()
const fs = require('fs')
const path = require('path')
server.listen(8099,()=>{
    console.log('http server running at http://127.0.0.1:8099')
})

server.on('request',(req,res)=>{
    let method = req.method;
    let url = req.url;
    let fpath = '';
    console.log(url,"1")
    // 只要有客户端来请求我们自己的服务器，就会触发request事件，调用内部方法
    new Promise((resolve,reject)=>{
        if(url === '/'){
            fpath = path.join(__dirname,'/html/html1.html')
        } else{
            fpath = path.join(__dirname,'/html',url)
        }
        fs.readFile(fpath,'utf8',(err,data)=>{
            if(err) return reject({err,res});
            resolve({data,res})
        })
    }).then((res)=>{
        res.res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.res.end(res.data)
    }).catch(err=>{
        err.res.end('<h1>404 Not found!</h1>')
    })
})