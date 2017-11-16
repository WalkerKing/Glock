//目标：
//1. 只写js算法
//2. 使用node实现现在的页面
//3. 生成readme table，包含题目信息链接，以及我的答案链接

const https = require('https');
const jade = require('jade');
const fs = require('fs');

let api = 'https://leetcode.com/api/problems/algorithms/';
let dir = './src'
const GetData = (url) => {
	return new Promise((resolve, reject) => {
		https.get(api, res => {
			let rawData = '';
			res.on('data', (chunk) => {
				rawData += chunk;
				console.log(1);
			});
			res.on('end', () => {
				try {
			      	const parsedData = JSON.parse(rawData);
			      	resolve(rawData);
			    } catch (e) {
			      	reject(e);
			    }
				
			});
		}).on('error', (e) => {
		  	reject(e);
		});
	});
};

const getLocalJs = (dir) => {
	fs.readdir(dir, (err, files) => {
		// console.log(files);
		for(let i in files){
			let fileName = files[i];
			let body = fs.readFileSync('./src/' + fileName);
			let str = jade.renderFile('./views/layout.jade', {
				id : '1',
				title : fileName,
				href : '#',
				body : body
			} );
			fs.writeFileSync('./dist/' + fileName + '.html', str );

		}
	});
};

// let getData = GetData(api);

getLocalJs(dir)

