import Vue from 'vue'
import Router from 'vue-router'
import wechat from '../components/wechat/wechat.vue'
import dialogue from '../components/wechat/dialogue.vue'
import dialogueInfo from '../components/wechat/dialogue-info.vue'
import dialogueDetail from '../components/wechat/dialogue-detail.vue'
import self from '../components/self/self.vue'
import contact from '../components/contact/contact.vue'
import explore from '../components/explore/explore.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "微信",
      component: wechat
    },
    {
      path: '/wechat/dialogue',
      name: "",
      components: {
        "default": wechat,
        "subPage": dialogue
      }
    },
    {
      path: '/wechat/dialogue/dialogue-info',
      name: "",
      components: {
        "subPage": dialogueInfo
      }
    },
    {
      path: '/wechat/dialogue/dialogue-detail',
      name: "",
      components: {
        "subPage": dialogueDetail
      }
    },
    {
      path: '/contact',
      name: '',
      component: contact
    },
    {
      path: '/explore',
      name: '',
      component: explore
    },
    {
      path: '/self',
      name: '',
      component: self
    }
  ]
})
