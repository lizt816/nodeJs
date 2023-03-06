// path 模块练习：
/*
 * 要求： 见同级的index.html的css和script， 并建三个文件都放入新建的clock目录里
 * 步骤：
 * 1. 创建两个正则表达式分别用来匹配style标签和script标签
 *   1.1：\s 表示空白字符；\S表示非空白字符; * 表示匹配任意次 也就是说：
 *           style标签的开始和结束，可以使用 const = regStyle = /<style>[\s\S]*</style>/
 *           script标签的开始和结束，可以使用 const = regScript = /<script>[\s\S]*</script>/
 * 2. 使用fs模块读取要别处理的html文件
 * 3. 自定义 resolveCSS方法，来写入index.css样式文件
 * 4. 自定义 resolveJS方法，来写入index.js脚本文件
 * 5. 自定义 resolveHTML方法，来写入index.html文件
**/

const fs = require('fs')
const path = require('path')
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 读取到index.html文件的内容
new Promise((resolve,reject)=>{
    fs.readFile(path.join(__dirname,'index.html'),'utf8',(err,data)=>{
        if(err) return reject(err);
        resolve(data)
    })
}).then(res=>{
    resolveCSS(res)
    resolveJS(res)
    resolveHTML(res)
}).catch(err=>{
    console.log("错误：",err)
})


function resolveCSS(e){
    let style = regStyle.exec(e)
    let css = style[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'/clock/index.css'),css,(err)=>{
        if(err)return console.log('错误：',err)
        console.log('成功了！')
    })
}

function resolveJS(e){
    let script = regScript.exec(e)
    let js = script[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'/clock/index.js'),js,(err)=>{
        if(err)return console.log('错误：',err)
        console.log('成功了！')
    })
}

function resolveHTML(e){
    let html = e.replace(regStyle,"<link rel='stylesheet' href='./index.css' />").replace(regScript,"<script src='./index.js'></script>")
    console.log(html,"1111")
    fs.writeFile(path.join(__dirname,'./clock/index.html'),html,err=>{
        console.log(err,"111")
        if(err) return console.log('错误：',err)
        console.log("成功了！！")
    })
}














