/*
 * @Descripttion: 请填写简介
 * @Author: armin
 * @Date: 2022-01-19 13:50:32
 * @LastEditors: armin
 * @LastEditTime: 2022-01-19 13:50:32
 */
import {App} from 'vue'
import progress from './src/index.vue'

// 让这个组件可以通过 use 的形式使用
export default {
  install(app:App) {
    app.component('m-progress', progress)
  }
}