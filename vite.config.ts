/*
 * @Descripttion: 
 * @Author: armin
 * @Date: 2022-01-05 10:12:48
 * @LastEditors: armin
 * @LastEditTime: 2022-01-19 10:32:47
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    port: 9527
  }
})
