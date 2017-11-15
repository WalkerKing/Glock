//目标：
//1. 只写js算法
//2. 使用node实现现在的页面
//3. 生成readme table，包含题目信息链接，以及我的答案链接

const https = require('https');

const fs = require('fs');

let api = 'https://leetcode.com/api/problems/algorithms/';

https.get(api, res => {
	console.log('statusCode:', res.statusCode);
	console.log('headers:', res.headers);

	res.on('data', (d) => {
		// process.stdout.write(d);
		fs.appendFile('./log/print.log', d, err => {});
	});
}).on('error', (e) => {
  console.error(e);
});


