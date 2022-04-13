/*
 * @Descripttion: 请填写简介
 * @Author: armin
 * @Date: 2022-04-13 15:38:21
 * @LastEditors: armin
 * @LastEditTime: 2022-04-13 15:39:35
 */
import {App} from 'vue'
import modalForm from './src/index.vue'

// 让这个组件可以通过 use 的形式使用
export default {
  install(app:App) {
    app.component('m-modal-form', modalForm)
  }
}