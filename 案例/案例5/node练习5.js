// 开发自己的npm包 模块练习：
/*
 * 要求：
 * 1. 格式化日期
 * 2. 转义HTML中的特殊字符
 * 3. 还原HTML中的特殊字符
 * 
 * // 1.导入自己的包
 * const itheima = require( 'itehima-utils' )
 * //功能3: 还原 HTML 中的特殊字符
 * const rawHTML = itheima,htmlUnEscape(str)6 
 * // 输出 <h1 style="color: red;">你好! &copy;<span>小黄! </span></h1>
 * console.log(rawHTML)
**/

let mo = require('./test-me-tools')
console.log(mo.htmlUnEscape(mo.htmlEscape("<h1>cen</h1>")))
