const parser = (req,res,next)=>{
    // 全局中间件
    let str = '';
    //  只要有数据过来就会触发这事件，
     req.on('data',(chunk)=>{
        str += chunk
     })
    new Promise((resolve,reject)=>{
        req.on('end',()=>{
            req.body = JSON.parse(str)
            resolve()
         })
     }).then(res=>{
        next()
     })
}
module.exports = parser