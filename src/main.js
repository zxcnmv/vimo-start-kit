import Vue from 'vue'
import App from './App'
import AttachFastClick from 'fastclick'
import vimo from 'vimo'
import { Navbar } from 'vimo/components/navbar'
import { Buttons, Title, Toolbar } from 'vimo/components/toolbar'
import { Button } from 'vimo/components/button'
import APP_CONFIGS from './config/app-configs'
import PLATFORM_CONFIGS from './config/platform-configs'
import router from './router'
import VueI18n from 'vue-i18n'
import langCN from './lang/cn'
import langEN from './lang/en'

// theme
import './theme/index.scss'

// Create VueI18n instance with options
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'cn', // set locale
  fallbackLocale: 'cn',
  messages: {
    cn: langCN,
    en: langEN
  }
})

// fastclick init
/* eslint-disable no-new */
new AttachFastClick(document.body)

// 平台基础安装
Vue.use(vimo, {
  custConf: APP_CONFIGS,
  pltConf: PLATFORM_CONFIGS,
  router: router
})

// 基础组件
Vue.component(Navbar.name, Navbar)
Vue.component(Toolbar.name, Toolbar)
Vue.component(Buttons.name, Buttons)
Vue.component(Title.name, Title)
Vue.component(Button.name, Button)

if (process.env.NODE_ENV === 'development') {
  // 开发环境执行此代码
  Vue.config.productionTip = false
} else {
  // 发布环境执行此代码
  Vue.config.productionTip = false
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  mounted () {
    window.VM.platform.ready().then((data) => {
      console.log(`当前平台初始化完毕的信息: ${data}`)
    })
  },
  components: {
    App
  }
})

