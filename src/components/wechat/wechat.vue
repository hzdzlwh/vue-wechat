<template>
  <div id="wechat">
    <ul class="wechat-list">
    	<msg-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"></msg-item>
    </ul>
  </div>
</template>

<script>
  import msgItem from './msg-item'

  export default {
  	components: {
  		msgItem
  	},
  	data(){
  		return {
  			"pageName": "微信"
  		}
  	}
  }

</script>

<style>
	@import "../../assets/css/wechat.css";
</style>
