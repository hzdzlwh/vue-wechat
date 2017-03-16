<template>
  <div id="wx-header">
    <div class="other">
      <span class="iconfont icon-tips-jia" v-show="$route.path==='/'" @click="$store.commit('toggleTipsStatus')"></span>
      <router-link tag="span" to="/contact/add-friend" class="iconfont icon-tips-add-friend" v-show="$route.path==='/contact'"></router-link>
      <span v-show="$route.path==='/contact/new-friends'">添加朋友</span>
      <span class="iconfont icon-chat-friends" v-show="$route.path==='/wechat/dialogue'"></span>
      <ul class="tips-menu" :class="[$store.state.tipsStatus?'tips-open':'tips-close']">
        <li>
          <span class="iconfont icon-tips-xiaoxi"></span>
            <div>发起群聊</div>
        </li>
        <li> <span class="iconfont icon-tips-add-friend"></span>
          <div>添加朋友</div>
        </li>
        <li> <span class="iconfont icon-tips-saoyisao"></span>
          <div>扫一扫</div>
        </li>
        <li> <span class="iconfont icon-tips-fukuan"></span>
          <div>收付款</div>
        </li>
      </ul>
    </div>
    <div class="center">
      <span>{{$store.state.currentPageName}}</span>
      <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
    </div>
  </div>
</template>

<script>
  export default {
      props: ["pageName"],
      data(){
          return {
            chatCount: true
          }
      },
      methods: {
          goBack() {
              this.$router.go(-1)
          }
      }
  }


</script>

<style>

</style>
