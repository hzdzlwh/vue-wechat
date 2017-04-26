<template>
  <div id="app">
    <welcome></welcome>
    <div class="outter" :class="{'hideLeft': $route.path.split('/').length>2}">
      <header class="app-header" :class="{'header-hide': !$store.state.headerStatus}">
        <wx-header :pageName="pageName"></wx-header>
      </header>
      <!--搜索框 只在“微信”和“通讯录”页面下显示-->
      <search v-show="$route.path.indexOf('explore')===-1&&$route.path.indexOf('self')===-1"></search>
      <!--四个门面页 “微信” “通讯录” “发现” “我”-->
      <section class="app-content">
        <keep-alive>
          <router-view name="default"></router-view>
        </keep-alive>
      </section>
      <!--底部导航 路由 -->
      <footer class="app-footer">
        <wx-nav></wx-nav>
      </footer>
    </div>
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view name="subPage" class="sub-page"></router-view>
    </transition>
  </div>
</template>

<script>
  import welcome from './components/common/welcome'
  import WxHeader from './components/common/wx-header'
  import search from './components/common/search'
  import WxNav from './components/common/wx-nav'


  export default {
    name: 'app',
    components: {
        welcome,
        WxHeader,
        search,
        WxNav
    },
    data(){
        return {
            "pageName": "",
            "routerAnimate": false,
            "enterAnimate": "",
            "leaveAnimate": ""
        }
    },
    created(){
      
    }
}
</script>

<style>
  /*将公用的样式统一在此导入*/

  @import "assets/css/base.css";
  @import "assets/css/common.css";
  @import "assets/css/wx-header.css";
  /*阿里 fonticon*/

  @import "assets/css/lib/iconfont.css";
  /*过渡效果需要的动画库*/

  @import "assets/css/lib/animate.css";
  /*weui 样式库 非常适合高仿微信*/

  @import "assets/css/lib/weui.min.css";
</style>
