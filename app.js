/**
 * Created by Administrator on 2015/12/7 0007.
 */
//引入 path 内置模块
var path = require('path');
//引入 express 依赖模块，用来启动静态服务器
var express = require('express');
//引入转发请求插件
var proxy = require('http-proxy-middleware');
var sha1=require("sha1");


//实例 express
var app = express();

//定义通过 /api 访问的请求，转发到指定路径
app.use('/api',proxy({
	target: 'http://122.10.30.153:9901',
	pathRewrite: {
		'^/api': '/'
	}
}));
app.use("/weixin",function(req,res){
	var obj=req.query;
	console.log("weixin",obj);
	var arr=[obj.token,obj.timestamp, obj.nonce];
	arr.sort();
	var str=sha1(arr.join(""));
	console.log("sha1 ",str);
	console.log("signature",obj.signature==str);
	if(obj.signature===str){
		res.send(obj.echostr).end();
	}else{
		res.send("错误").end();
	}
});
//http://127.0.0.1:9888/api/index
//替换为 http://122.10.30.153:9901/index

console.log(__dirname);
console.log(__filename);
//拼接物理路径，用来指定虚拟路径的访问（静态页面文件）
var viewsPath = path.join(__dirname,'views');
console.log(viewsPath);

//指定访问 页面 的路径
app.use('/', express.static(viewsPath));

//拼接物理路径，用来指定虚拟路径的访问（静态资源文件）
var publicPath = path.join(__dirname,'public');

//指定访问静态资源文件的路径
app.use('/public', express.static(publicPath));

//定义一个接口
app.get('/login', function(req, res){
	res.send('longjuju')
});
app.use('/api',proxy({
	target:'http/122.10.30.153:16912',
	pathRewrite:{'^/api':'/'}
}));

//监听端口 16912，用来启动服务
app.listen(16912, function(){
	console.log('server run at port 16912');
});

//模块导出
module.exports = app;