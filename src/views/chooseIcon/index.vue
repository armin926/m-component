<!--
 * @Descripttion: 图标选择器页面
 * @Author: armin
 * @Date: 2022-01-05 11:43:24
 * @LastEditors: armin
 * @LastEditTime: 2022-01-19 17:08:46
-->
<template>
<div>
  <m-choose-icon title="选择图标" v-model:visible="visible">选择图标</m-choose-icon>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>