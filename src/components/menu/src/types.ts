/*
 * @Descripttion: 菜单组件类型定义
 * @Author: armin
 * @Date: 2022-01-19 09:53:38
 * @LastEditors: armin
 * @LastEditTime: 2022-01-19 10:45:41
 */
export interface MenuItem {
  // 导航图标
  icon?: string
  // 处理之后的图标
  i?: any
  // 导航名字
  name: string
  // 导航标识
  index: string
  // 导航的子菜单
  children?: MenuItem[]
}