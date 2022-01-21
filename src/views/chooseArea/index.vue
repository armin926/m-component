<!--
 * @Descripttion: 省市区选择器页面
 * @Author: armin
 * @Date: 2022-01-05 14:37:08
 * @LastEditors: armin
 * @LastEditTime: 2022-01-19 17:08:54
-->
<template>
  <m-choose-area @change="changeArea" />
</template>

<script lang="ts" setup>

const changeArea = (val: any) => {
  console.log(val);
  
}
</script>