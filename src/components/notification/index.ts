/*
 * @Descripttion: notification
 * @Author: armin
 * @Date: 2022-01-18 15:42:01
 * @LastEditors: armin
 * @LastEditTime: 2022-01-18 15:46:24
 */
import {App} from 'vue'
import notification from './src/index.vue'

// 让这个组件可以通过 use 的形式使用
export default {
  install(app:App) {
    app.component('m-notification', notification)
  }
}