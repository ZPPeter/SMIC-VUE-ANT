<template>
  <div class="footer">
    <div class="copyright">
      Copyright
      <a-icon type="copyright" />
      <span style="padding-left:4px;">2020</span>
      地理信息仪检中心
      <div class="links">
        <a href="http://www.sdcehui.gov.cn/" target="_blank">
          <img alt="Logo" style="width: 21px; height: 21px" src="/img/Institution.png" />
        </a>
        <div style="margin-top: 2px;margin-right: 5px;">
          <a href="https://github.com/sendya/ant-design-pro-vue" target="_blank">
            <my-icon type="icon-oabangong-copy" style="font-size: 21px;" />
          </a>
        </div>
        <a href="https://vue.ant.design/" target="_blank">
          <img alt="ant.design" style="width: 21px; height: 21px" src="/logo.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
//import { Icon } from 'ant-design-vue'
//const MyIcon = Icon.createFromIconfontCN({
//  scriptUrl: '//at.alicdn.com/t/font_1055908_9r9e0blrp46.js' // 在 iconfont.cn 上生成
//})
export default {
  name: 'GlobalFooter',
  components: {
    //'my-icon': MyIcon
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.footer {
  padding: 0 16px;
  margin: 20px 0 16px;
  display: flex;
  justify-content: center; // css3 水平  
  .copyright {
    white-space:pre;//单词之间1个空格占位符
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center; //元素上下居中对齐
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    .links {
      //margin-bottom: 8px;
      display: flex;
      flex-direction: row;
      a {
        color: rgba(0, 0, 0, 0.45);
        &:hover {
          color: rgba(0, 0, 0, 0.65);
        }
        &:first-child{
        margin-left: 5px;
        }
        &:not(:last-child) {
          // 三个元素除最后一个
          margin-right: 3px;          
        }
      }
    }
  }
}
</style>
