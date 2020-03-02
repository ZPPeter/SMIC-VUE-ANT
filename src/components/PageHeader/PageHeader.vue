<template>
  <div class="page-header">
    <div class="page-header-index-wide">
      <s-breadcrumb />
      <div class="detail">
        <div class="main" v-if="!$route.meta.hiddenHeaderContent">
          <div class="row">
            <div class="ant-page-header-heading-title">工作台</div>
            <img v-if="logo" :src="logo" class="logo"/>
            <h1 v-if="title" class="title">{{ title }}</h1>
            <div class="action">
              <slot name="action"></slot>
            </div>
          </div>
          <div class="row">
            <div v-if="avatar" class="avatar">
              <a-avatar :src="avatar" />
            </div>
            <div v-if="this.$slots.content" class="headerContent">
              <slot name="content"></slot>
            </div>
            <div v-if="this.$slots.extra" class="extra">
              <slot name="extra"></slot>
            </div>
          </div>
          <div>
            <slot name="pageMenu"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'

export default {
  name: 'PageHeader',
  components: {
    's-breadcrumb': Breadcrumb
  },
  props: {
    title: {
      type: [String, Boolean],
      default: true,
      required: false
    },
    logo: {
      type: String,
      default: '',
      required: false
    },
    avatar: {
      type: String,
      default: '',
      required: false
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.page-header {
  background: #fff;  
  padding: 16px 24px 0 24px;
  border-bottom: 1px solid #e8e8e8;
  .breadcrumb {
    margin-bottom: 16px;
  }
  .detail {
    //background-color: rgb(0, 255, 34);
    display: flex;
    /*margin-bottom: 16px;*/
    .avatar {
      flex: 0 1 72px;
      margin: 0 24px 8px 0;

      & > span {
        border-radius: 72px;
        display: block;
        width: 72px;
        height: 72px;
      }
    }
    .main {
      width: 100%;
      flex: 0 1 auto;
      .row {
        display: flex;
        width: 100%;
        .avatar {
          margin-bottom: 16px;
        }
      }
      .title {
        font-size: 20px;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        margin-bottom: 16px;
        flex: auto;
      }
      .logo {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        margin-right: 16px;
      }
      .content,
      .headerContent {
        flex: auto;
        width: 100%;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;
        .link {
          margin-top: 16px;
          line-height: 24px;
          a {
            font-size: 14px;
            margin-right: 32px;
          }
        }
      }
      .extra {
        margin-left: 0px;
        //min-width: 245px;
        //background-color: rgb(0, 255, 34);
      }
      .action {
        margin-left: 56px;
        min-width: 266px;
        flex: 0 1 auto;
        text-align: right;
        &:empty {
          display: none;
        }
      }
    }
  }
}
.mobile .page-header {
  .main {
    .row {
      flex-wrap: wrap;
      .avatar {
        flex: 0 1 25%;
        margin: 0 2% 8px 0;
      }
      .content,
      .headerContent {
        //mobile
        flex: 0 1 70%;
        .link {
          margin-top: 16px;
          line-height: 24px;
          a {
            font-size: 14px;
            margin-right: 10px;
          }
        }
      }
      .extra {
        //mobile
        //background-color: rgb(0, 255, 34);
        margin-left: 0px;
      }
      .action {
        margin-left: unset;
        min-width: 266px;
        flex: 0 1 auto;
        text-align: left;
        margin-bottom: 12px;
        &:empty {
          display: none;
        }
      }
    }
  }
}
.tablet .page-header {
  .main {
    .row {
      //flex-wrap: wrap-reverse;
      white-space:nowrap;//超出不换行      
      .avatar {
        flex: 0 1 25%;
        margin: 0 2% 8px 0;
      }
      //.headerContent{
      //  display: none;
      //} 
      .content,.headerContent {
        //tablet
        flex: 0 1 70%;
        .link {
          margin-top: 16px;
          line-height: 24px;
          a {
            font-size: 14px;
            margin-right: 10px;
          }
        }
      }
      .extra {
        //mobile
        //background-color: rgb(0, 255, 34);
        margin-left: 0px;
      }
      .action {
        margin-left: unset;
        min-width: 266px;
        flex: 0 1 auto;
        text-align: left;
        margin-bottom: 12px;
        &:empty {
          display: none;
        }
      }
    }
  }
}
.ant-page-header-heading-title {
    display: block;
    float: left;
    margin-bottom: 0;
    padding-right: 12px;
    padding-bottom: 12px;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
}
</style>
