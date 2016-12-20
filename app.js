//引入path内置模块
var path=require('path');
//引入express依赖模块，用来启动静态服务器
var express=require('express');
var proxy=require('http-proxy-middleware');
//实例express
var app=express();
console.log(__dirname);
//拼接物理路径
var viewsPath=path.join(__dirname,'views');
console.log(viewsPath);
//指定访问 页面 的路径
app.use('/',express.static(viewsPath))
//监听端口9999，用来启动服务器
var publicPath=path.join(__dirname,'public');
app.use('/public',express.static(publicPath));
app.use('/api',proxy({
	target:'http/122.10.30.153:9901',
	pathRewrite:{'^/api':'/'}
}))
app.listen(9996,function(){
	console.log('server run at port 9999');
})
module.exports=app;