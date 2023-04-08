let express = require('express')
let router = express.Router()
const path = require('path')
const fs = require('fs')


router.get('/',(req,res)=>{
   let fpath = path.join(__dirname,'../public/index.html')
   fs.readFile(fpath,'utf8',(err,data)=>{
      if(err) return err;
      res.send(data)
  })
})


module.exports = router