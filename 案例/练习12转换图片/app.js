const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

app.post('/api/download-image', async (req, res) => {
  try {
   // 图片的 URL
    const { imageUrl } = req.body;
    // 发送 HTTP 请求获取图片
    axios.get(imageUrl, { responseType: 'arraybuffer' }).then(response => {
     // 二进制发回去
     res.end(Buffer.from(response.data, 'binary'));
  }).catch(error => {
    console.error('Error fetching the image:', error.message);
    res.status(500).json({ error: error.message });
  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






/**
 *  前端接收
 * var imgUrl = 'http://192.168.0.107:3000/api/download-image';
      var xmlhttp; //同理也可以下载文件
      xmlhttp = new XMLHttpRequest();   //用于在后台与服务器交换数据
      xmlhttp.open("POST", imgUrl, true);   //语法  open(method,url,async)
      xmlhttp.setRequestHeader('Content-Type', 'application/json');
      xmlhttp.responseType = 'arraybuffer'; // 设置响应类型为二进制数组
      xmlhttp.onload = function () { //处理返回的数据
        if (this.status == 200) {
          var blob = new Blob([this.response], { type: 'image/jpeg' }); // 根据实际情况设置 MIME 类型
          console.log(console.log(URL.createObjectURL(blob)))
          // 创建 URL 对象并设置图片的 src 属性
          var imageUrl = URL.createObjectURL(blob);
          var imgElement = document.createElement('img');
          imgElement.src = imageUrl;

          // 将图片添加到页面中
          document.body.appendChild(imgElement);
        }
      }
      // 准备请求体数据
      let data = {
        imageUrl: 'https://huasai4.cn-wlcb.ufileos.com/2222222222222221.jpg'
      }
      xmlhttp.send(JSON.stringify(data));   //用于发送http请求
*/