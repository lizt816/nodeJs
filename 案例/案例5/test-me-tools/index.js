// 入口文件
const dateFormat = require('./src/dateFormat')
const htmlUnEscape = require('./src/htmlUnEscape')
const htmlEscape = require('./src/htmlEscape')

module.exports = {
    ...dateFormat,
    ...htmlUnEscape,
    ...htmlEscape
}
