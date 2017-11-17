//目标：
//1. 只写js算法
//2. 使用node实现现在的页面
//3. 生成readme table，包含题目信息链接，以及我的答案链接

const https = require('https');
const jade = require('jade');
const child_process = require('child_process');
const fs = require('fs');

let api = 'https://leetcode.com/api/problems/algorithms/';
let dir = './src'

//获取远程leetcode信息
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

const createHtml = (files) => {
	child_process.exec('rm -rf ./dist', () => {
		console.log('dist文件夹删除完毕');
		fs.mkdirSync('./dist');
		for(let i in files){
			let fileName = files[i];
			let newName = files[i].split('.')[0];
			let body = fs.readFileSync('./src/' + fileName);
			let str = jade.renderFile('./views/layout.jade', {
				id : '1',
				title : newName,
				href : '#',
				body : body
			});
			
			fs.writeFileSync('./dist/' + newName + '.html', str );
		}
	})
}

//根据本地js文件创建html页面
const getLocalJs = (dir) => {

	fs.readdir(dir, (err, files) => {
		createHtml(files);
	});
};

// let getData = GetData(api);

getLocalJs(dir)

