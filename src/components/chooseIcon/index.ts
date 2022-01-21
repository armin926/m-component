/*
 * @Descripttion: 
 * @Author: armin
 * @Date: 2022-01-05 11:40:22
 * @LastEditors: armin
 * @LastEditTime: 2022-01-05 16:08:39
 */
import {App} from 'vue'
import chooseIcon from './src/index.vue'

// 让这个组件可以通过 use 的形式使用
export default {
  install(app:App) {
    app.component('m-choose-icon', chooseIcon)
  }
}