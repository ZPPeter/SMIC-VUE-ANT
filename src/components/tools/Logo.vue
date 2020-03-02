<template>
  <div class="logo">
    <router-link :to="{name:'dashboard'}">
      <!-- LogoSvg alt="logo" /-->
      <!-- my-icon type="icon-BLOCK" style="font-size: 21px;" / -->
      <img alt="Logo" style="width: 21px; height: 21px" src="@/assets/logo.png" />
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
//import LogoSvg from '@/assets/logo.svg?inline' //svg
export default {
  name: 'Logo',
  components: {
    //LogoSvg
  },
  props: {
    title: {
      type: String,
      default: '测绘仪器检定', //Ant Design Pro
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
