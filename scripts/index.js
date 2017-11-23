//目标：
//1. 只写js算法
//2. 使用node实现现在的页面
//3. 生成readme table，包含题目信息链接，以及我的答案链接

const https = require('https');
const jade = require('jade');
const path = require('path');
const child_process = require('child_process');
const fs = require('fs');

let api = 'https://leetcode.com/api/problems/algorithms/';
let qUrl = 'https://leetcode.com/problems/';
let dir = './src'

const print = str => {
	console.log(str + ' ' + new Date().toLocaleString());
}
//获取远程leetcode信息
const GetData = (api) => {
	return new Promise((resolve, reject) => {

		fs.readFile('./data/leetcode.json', (err, data) => {
			if(err){
				print('未从本地获取到leetcode统计数据----done');
				getDataFromInternet(api);
			}else{
				try{
					resolve(JSON.parse(data));
				}catch(e){
					getDataFromInternet(api);
				}
				
			}
		});
		function getDataFromInternet(api){
			https.get(api, res => {
					console.log('正在从leetcode官网获取最新的统计数据...');
					let rawData = '';
					res.on('data', (chunk) => {
						rawData += chunk;
					});
					res.on('end', () => {
						try {
					      	let parsedData = JSON.parse(rawData);
					      	print('leetcode数据获取完毕...');
					      	fs.writeFile('./data/leetcode.json', rawData, () => {
					      		print('已将获取到的统计数据写入./data/leetcode.json中');
					      	});
					      	resolve(parsedData);
					    } catch (e) {
					      	reject(e);
					    }
						
					});
				}).on('error', (e) => {
				  	reject(e);
				});
		}
		
	});
};
const getInfoById = (leetcode, id) => {
	id = id - 0;	//排除字符串干扰
	for(let i = 0; i < leetcode.length; i++){
		let v= leetcode[i];
		if(id === v.stat.question_id){
			return v;
		}
	}
};
const RunShellCmd = (cmd) => {
	return new Promise((resolve, reject) => {
		child_process.exec(cmd, () => {
			resolve();
		})
	});
};
const createHtml = (files) => {
	let deleteDir = RunShellCmd('rm -rf ./pages');
	let getLeetCode = GetData(api);
	Promise.all([deleteDir, getLeetCode]).then(values => {
		let leetcode = values[1].stat_status_pairs;
		
		fs.mkdirSync('./pages');
		let list = [];
		files.sort(function(a, b){
			return a.split('_')[0] - b.split('_')[0]
		});
		for(let i in files){
			let fileName = files[i];
			
			let qId = fileName.split('_')[0];
			let qInfo = getInfoById(leetcode, qId);
			let newName = qInfo.stat.question_id + '_' + qInfo.stat.question__title_slug.split('-').join('_') + '.html'
			let title = qInfo.stat.question_id + '. ' + qInfo.stat.question__title;
			let href = qUrl + qInfo.stat.question__title_slug;
			let newSrc = './pages/' + newName;
			let body = fs.readFileSync('./src/' + fileName);
			let str = jade.renderFile('./views/page.jade', {
				title,
				href,
				body
			});
			
			list.push({
				title,
				src: newSrc
			});

			fs.writeFileSync(newSrc, str);
		}
		print('创建html文件----done');
		createIndex(list);
	}).catch(reason => { 
	  	console.log(reason)
	});;
}
const createIndex = (list) => {
	let str = jade.renderFile('./views/index.jade', {
		title: 'leetcode list',
		list
	});
	fs.writeFileSync('./index.html', str );
}
fs.readdir(dir, (err, files) => {
	createHtml(files);
});

