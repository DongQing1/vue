var Home = require('../vm/home/home')	
var Ticket = require('../vm/ticket/ticket')
var Play = require('../vm/play/play')
var Detail = require('../vm/detail/detail')
var Pay = require('../vm/pay/pay')
var VueRouter = require('../lib/vue-router')
//定义规则
var routes=[
	{
		path:'/home',
		component:Home
	},
	{
		path:'/ticket/:id',
		component:Ticket
	},
	{
		path:'/drift/:id',
		component:Play
	},
	{
		path:'/detail/:id',
		component:Detail
	},
	{
		path:'/pay/:id',
		component:Pay
	},
	{
		path:'*',
		redirect:'/home'
	}
]
//实例化路由对象
var router = new VueRouter({
	routes:routes
})
//暴露接口
module.exports =  router;
