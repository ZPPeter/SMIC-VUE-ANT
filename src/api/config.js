const isDebugRequest = false; //false 不显示request信息
const isDevelopment = process.env.NODE_ENV === 'development'; //是否发布到正式环境 production
const serverIP = '192.168.3.43';
const serverPort = ':21021';
const dataPort = ':8000';
const apiDomain = 'http://'+serverIP+serverPort;
//const SignalR = 'ws://'+serverIP+serverPort+'/signalr-myChatHub';
const SignalR = 'http://'+serverIP+serverPort+'/signalr-myChatHub';
const taskInfo = 'http://'+serverIP+dataPort+'/ShowDetail?id=';
const Settings = {
	useMockData() {
		let isUseMockData = false;
		/*
		uni.getStorage({
			key: 'useMkData',
			success: res => {
				//console.log(res.data);
				isUseMockData = res.data;
			}
		});*/
		return isUseMockData;
	}
}
export default{
	isDebugRequest,
	isDevelopment,
	apiDomain,
	SignalR,
	taskInfo,
	Settings
}