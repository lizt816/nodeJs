// CommonJS 模块练习：
/*
 * 1. 每个模块的内部，module变量就表示当前模块
 * 2. module变量是一个对象，module的exports就是对外接口 
 * 3. 加载某个模块，其实就是加载该模块的module.rxports属性，require方法来加载模块
**/


let mo = require('./practise/index.js')
console.log(mo)