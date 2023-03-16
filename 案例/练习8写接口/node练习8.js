// 练习：
/*
 * 1. 开始写接口
 * 2. 
**/

const express = require('express')
const router = require('./router/index')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use('/api',router)

app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1')
})
