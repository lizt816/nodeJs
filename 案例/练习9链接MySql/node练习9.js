// 练习：
/*
 * 1. 连接mysql
 * 2. 
**/

const mysql = require('mysql')

const db = mysql.createPool({
    host:'127.0.0.1',                  // 数据库的 IP 地址
    user:'root',                          // 登录数据库的账号
    password:'admin123',      // 登录数据库的密码
    database:'new_xiaohe'       // 指定要操作那个数据库
  })

// const sqlStr = 'select * from users'

// db.query(sqlStr,(err,results)=>{
//   if(err) return console.log(err.message)
//   console.log(results)
// })

// const user = { username:'new222',password:'1231' }
// const sqlStr = 'INSERT INTO users SET ?'

// db.query(sqlStr,user,(err,results)=>{

//      if(err) return console.log(err.message)  // 失败
//      if(results.affectedRows === 1){
//         console.log('插入成功！！')
//      }
// })

// const user = {id:4,username:'new4898**',password:'000'}
// const sqlStr = 'UPDATE users SET ? where id=?'
// db.query(sqlStr,[user,user.id],(err,results)=>{
//    if(err) return console.log(err.message)
//    if(results.affectedRows === 1){
//        console.log('修改成功！！')
//    }
// })


const sqlStr = 'DELETE FROM users where id=?'
db.query(sqlStr,7,(err,results)=>{
   if(err) return console.log(err.message)
   if(results.affectedRows === 1){
       console.log('删除成功！！')
   }
})