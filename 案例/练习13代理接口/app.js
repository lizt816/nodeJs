const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
// 代理接口 -- 
app.post('/api/proxy', async (req, res) => {
  try {
   // 代理接口
    // 发送 HTTP 请求获取图片
    myAxios(req.body).then((response) => {
     let data = JSON.stringify(response)
     res.send(data);
    }).catch((error) => {
     res.status(500).json({ error: error.message });
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port 127.0.0.1:${PORT}`);
});


/**
 * 发送一个请求给其他服务器
 * params：对面服务器要求的参数值，包括token在内
*/
function myAxios(data) {
 // 配置新建一个 axios 实例
 return new Promise((resolve, reject) => {
  console.log(data,"--参数");
  axios({
   method: data.m,
   url: data.proxyUrl,
   headers: {
    'Content-Type': 'application/json',
    "Authorization":data.token
   },
   data: data.q,
   params: data.q,
  }).then(response => {
   resolve(response.data);
  }).catch(error => {
   reject(error);
  });
 });
}

