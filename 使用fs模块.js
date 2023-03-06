/*
 * 练习 所以多此一举的写了async等无用函数
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