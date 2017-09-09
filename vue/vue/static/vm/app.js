var Vue = require('../lib/vue');
var VueRouter = require('../lib/vue-router');
var VueResource = require('../lib/vue-resource');
var router = require('../router/router');
require('./app.css');
require('../reset.css');
//创建vue实例化对象
Vue.use(VueRouter);
Vue.use(VueResource);
var app = new Vue({
	el:'#app',
	//注册路由
	router:router,
	data:{
	}
})
module.exports = app;