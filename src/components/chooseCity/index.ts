/*
 * @Descripttion: 请填写简介
 * @Author: armin
 * @Date: 2022-02-17 10:30:40
 * @LastEditors: armin
 * @LastEditTime: 2022-02-17 10:30:40
 */
import {App} from 'vue'
import chooseCity from './src/index.vue'

// 让这个组件可以通过 use 的形式使用
export default {
  install(app:App) {
    app.component('m-choose-city', chooseCity)
  }
}