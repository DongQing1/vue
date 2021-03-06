require('../../lib/vue-resource');
require('./detail.css');	
var Detail={
	template:"#tpl_detail",
	data:function(){
		return {
			data:[],
			list:[]
		}		
	},
	created:function(){
		this.$http.get("data/detail.json").then(function(res){
			console.log(res.data)
			if(res.data.errno === 0){
				this.data=res.data.data;
				this.list=res.data.list;
			}
			console.log(this.list)
		})
	}
}
module.exports =  Detail;