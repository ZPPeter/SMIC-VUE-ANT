var fly=require("flyio");

// 配置请求根域名
fly.config.baseURL = 'http://192.168.3.43:21021';
fly.config.timeout = 30000; // 毫秒超时时间，为0时则无超时限制 

// 配置请求拦截器
fly.interceptors.request.use((request) => {
	if (!!request.body)
		request.params = request.body.params;	
	//console.log(JSON.stringify(request));
	return request;
})

// 配置响应拦截器
fly.interceptors.response.use((response) => {
			//console.log('全局响应拦截：' + JSON.stringify(response));		
			//console.log('fly response：' + response.request.url);
			//console.log(new Date().toLocaleString()); //不支持Android手机
		return response.data;
	},
	(err) => {
		return Promise.resolve(err); //  "网络请求：ERROR！")
	}
)
export default fly;
