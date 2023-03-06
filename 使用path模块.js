/*
 * 练习 所以多此一举的写了async等无用函数
 * 
*/

const fs = require('fs')
const path = require('path')
let src1 = path.join(__dirname,'/files/11.txt')
let src2 = path.join(__dirname,'/files/22.txt')
async function addTxt2(){
  let p = await new Promise((resolve,reject)=>{
    fs.readFile(src1,'utf8',function(err,dataStr){
      if(err){
        return console.log('文件读取失败',err)
      }
      resolve(dataStr)
    })
  })
  return p
}
addTxt2().then(res=>{
  fs.writeFile(src2,txtTrim(txtReplace(res)),'utf8',function(err){
    if(err){
      return console.log('出错了',err)
    } 
  })
})
function txtReplace(dataStr){
   if(dataStr.indexOf('=') == -1) return dataStr;
   return txtReplace(dataStr.replace('=',':'))
}
function txtTrim(txt){
  if(txt.indexOf(' ') == -1) return txt;
   return txtTrim(txt.replace(' ','\r\n'))
}


// 使用path的basename方法：

// const fpath = '/a/b/c/index.html'
// var fullName = path.basename(fpath)
// console.log(fullName,"1111")  // 打印  出 index.html
// var nameWithoutExt = path.basename(fpath,'.html')
// console.log(nameWithoutExt )   // 打印  出 index


// 使用path的extname方法：
// const fpath = '/a/b/c/index.html'
// var extname = path.extname(fpath)
// console.log(extname)  // 打印  出 .html



