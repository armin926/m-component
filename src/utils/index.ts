/*
 * @Descripttion: 工具
 * @Author: armin
 * @Date: 2022-01-05 10:41:39
 * @LastEditors: armin
 * @LastEditTime: 2022-01-19 16:53:29
 */
// 驼峰命名转为横杠
export const toLine = (value:string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}

// 标准时间转换为自定义格式
export const convertDate = (date:Date, gap:string = '-') => {
  return date.getFullYear() + gap + (date.getMonth() + 1) + gap + date.getDate()
}