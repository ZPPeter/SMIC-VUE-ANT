<template>
  <div class="head-info" :class="center && 'center'" @click="onClick">
    <span>{{ title }}</span>
    <p>{{ content }}</p>
    <em v-if="bordered"/>
  </div>
</template>

<script>
export default {
  name: 'HeadInfo',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    bordered: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: true
    }
  },  
  methods: {
    onClick() {
        this.$emit('click')
		}  
  }  
}
</script>

<style lang="less" scoped>
  .head-info {
    //background-color: red;
    position: relative;
    text-align: right;
    //padding: 0 16px 0 0px;
    //min-width: 125px;//125
    &.center {
      text-align: right;//center;
      //padding: 0 32px;
    }
    span {
      color: rgba(0, 0, 0, .45);
      display: inline-block;
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 4px;
      margin-right: 10px;
    }
    p {
      color: rgba(0, 0, 0, .85);
      font-size: 24px;
      line-height: 32px;
      //margin: 0;
      margin-right: 10px;
    }
    em {
      background-color: #e8e8e8;
      position: absolute;
      height: 56px;
      width: 1px;
      top: 0;
      //right: 10px;
      left:5px;
    }
  }
  .mobile .head-info {
    //background-color: red;
    position: relative;
    text-align: left;
    //padding: 0 16px 0 0px;
    //min-width: 125px;//125
    &.center {
      text-align: left;//center;
      //padding: 0 32px;
    }
    span {
      color: rgba(0, 0, 0, .45);
      display: inline-block;
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 4px;
      width: 60px;
      //margin-right: 5px;
    }
    p {
      //background-color: red;
      color: rgba(0, 0, 0, .85);
      font-size: 24px;
      line-height: 32px;
      width: 60px;
      //margin: 0;
      //margin-right: 5px;
    }
    em {
      background-color: #e8e8e8;
      position:absolute;
      height: 56px;
      width: 1px;
      top: 0;
      //right: 50px;
      left:-10px;
    }
  }
</style>
