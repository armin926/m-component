/*
 * @Descripttion: 注册表单组件
 * @Author: armin
 * @Date: 2022-04-12 09:43:57
 * @LastEditors: armin
 * @LastEditTime: 2022-04-12 09:43:58
 */
import {App} from 'vue'
import form from './src/index.vue'

// 让这个组件可以通过 use 的形式使用
export default {
  install(app:App) {
    app.component('m-form', form)
  }
}