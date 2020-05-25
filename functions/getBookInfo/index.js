// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request');

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => new Promise((resolve, reject) => {
  request({
    method: 'GET',
    url: 'https://book.feelyou.top/isbn/' + event.isbn,
    headers: {
      "Sec-Fetch-Dest": "document",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
    }
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      resolve(body);
    }
  })
})