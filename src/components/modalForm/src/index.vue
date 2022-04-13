<!--
 * @Descripttion: 请填写简介
 * @Author: armin
 * @Date: 2022-04-13 15:38:28
 * @LastEditors: armin
 * @LastEditTime: 2022-04-13 16:27:45
-->
<script setup lang="ts">
import { ref, watch, PropType } from "vue"
import { FormOptions, FormInstance } from "../../form/src/types/types"

let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  // 只在屏幕区域内滚动
  isScroll: {
    type: Boolean,
    default: false,
  },
  // 下面全是处理上传事件的
  onPreview: {
    type: Function,
  },
  onRemove: {
    type: Function,
  },
  onExceed: {
    type: Function,
  },
  onSuccess: {
    type: Function,
  },
  beforeRemove: {
    type: Function,
  },
})
let emits = defineEmits(["update:visible"])

// 弹出框的显示与隐藏
let dialogVisible = ref<boolean>(props.visible)
// 表单实例
let form = ref<FormInstance | null>(null)

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val
  }
)

watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val)
  }
)
</script>

<template>
  <div :class="{ 'm-choose-icon-dialog-body-height': isScroll }">
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <el-scrollbar>
        <template #default>
          <m-form
            label-width="100px"
            ref="form"
            :options="options"
            @on-preview="onPreview"
            @on-remove="onRemove"
            @on-exceed="onExceed"
            @on-success="onSuccess"
            @before-remove="beforeRemove"
          >
            <template #uploadArea>
              <slot name="uploadArea"></slot>
            </template>
            <template #uploadTip>
              <slot name="uploadTip"></slot>
            </template>
          </m-form>
        </template>
        <template #footer>
          <slot name="footer" :form="form"></slot>
        </template>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>
