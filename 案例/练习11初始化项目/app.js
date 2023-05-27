const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:false}))




app.use('/',express.static('./public'))
const userRouter = require('./router/user.js')
app.use('/api',userRouter)
app.listen(1022,()=>{
 console.log('api server running at  http://127.0.0.1:1022')
})

