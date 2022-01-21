/*
 * @Descripttion: 请填写简介
 * @Author: armin
 * @Date: 2022-01-18 16:01:23
 * @LastEditors: armin
 * @LastEditTime: 2022-01-18 16:04:13
 */
import {App} from 'vue'
import list from './src/index.vue'

// 让这个组件可以通过 use 的形式使用
export default {
  install(app:App) {
    app.component('m-list', list)
  }
}