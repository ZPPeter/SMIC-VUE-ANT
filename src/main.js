// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import config from './api/config'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './components/global.less'

import { Icon } from 'ant-design-vue'
Vue.use(Icon);
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1055908_9r9e0blrp46.js' // 在 iconfont.cn 上生成
})
Vue.component('my-icon', MyIcon); //设置组件名称

Vue.config.productionTip = false

// mount axios Vue.$http and this.$http
Vue.use(VueAxios)

// signalR
const connection = new signalR.HubConnectionBuilder()
  .withUrl(config.SignalR)
  .configureLogging(signalR.LogLevel.Information)
  .withAutomaticReconnect()
  .build();

connection.start().then(function () {
  window.console.log("connected");
  var msg = {
    messageType: 1, //消息类型 1.发送连接消息 2.普通内容消息 98.连接回执消息
    sendUserId: '[PC]',
    messageBody: 'online' //消息内容
  };
  connection.invoke("SendMessage", JSON.stringify(msg)).catch(err => window.console.error(err.toString()));
})

async function start() {
  try {
    await connection.start();
    console.log("connected");
  } catch (err) {
    console.log(err);
    setTimeout(() => start(), 5000);
  }
};

connection.onclose(async () => {
  await start();
});

connection.on('ReceiveMessage', async function(message) {
	console.log(JSON.parse(message));
	var msg = JSON.parse(message);
	if (msg.MessageType == 2) {
	} else if (msg.MessageType == 90) {// 首页数字刷新
	} else if (msg.MessageType == 98) { // 上线通知，不发给自己
	};
});

/*
connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
connection.start().catch(function (err) {
  return console.error(err.toString());
});
connection.onreconnecting((error) => {});
connection.onreconnected((connectionId) => {});
//withAutomaticReconnect() won't configure the HubConnection to retry initial start failures, so start failures need to be handled manually:
async function start() {
  try {
      await connection.start();
      console.assert(connection.state === signalR.HubConnectionState.Connected);
      console.log("connected");
  } catch (err) {
      console.assert(connection.state === signalR.HubConnectionState.Disconnected);
      console.log(err);
      setTimeout(() => start(), 5000);
  }
};
connection.onclose((error) => {
  console.assert(connection.state === signalR.HubConnectionState.Disconnected);

  document.getElementById("messageInput").disabled = true;

  const li = document.createElement("li");
  li.textContent = `Connection closed due to error "${error}". Try refreshing this page to restart the connection.`;
  document.getElementById("messagesList").appendChild(li);
});
*/
window.console.log(process.env.NODE_ENV + ',' + process.env.VUE_APP_PREVIEW + ',' + process.env.VUE_APP_API_BASE_URL)

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
