/*
 * @Descripttion: 
 * @Author: armin
 * @Date: 2022-01-05 14:36:09
 * @LastEditors: armin
 * @LastEditTime: 2022-01-05 16:08:12
 */
import {App} from 'vue'
import chooseArea from './src/index.vue'

// 让这个组件可以通过 use 的形式使用
export default {
  install(app:App) {
    app.component('m-choose-area', chooseArea)
  }
}