前言：
    node是基于chrome V8引擎的js运行环境
    js放在node上，表示在做后端开发，放在浏览器表示前端开发

    用的是chrome v8解析在nodejs上的js代码

    nodejs运行环境分为v8引擎和内置的api加上待执行的js代码
    他们的关系是内置的api提供给js用，js让v8引擎解析

 运行命令: node app.js
 浏览器访问：
 fetch('http://localhost:3000/api/proxy', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ imageUrl: 'http://example.com/image.jpg' }),
})
.then(response => {
  // 处理返回的响应
})
.catch(error => {
  console.error('Error fetching data:', error);
});