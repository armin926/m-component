<!--
 * @Descripttion: 表单组件
 * @Author: armin
 * @Date: 2022-04-12 09:44:04
 * @LastEditors: armin
 * @LastEditTime: 2022-04-13 16:04:45
-->
<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  PropType,
  ref,
  shallowRef,
  watch,
} from "vue"
import { FormOptions, FormInstance } from "./types/types"
import cloneDeep from "lodash/cloneDeep"
import "@wangeditor/editor/dist/css/style.css" // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue"
import modalForm from "../../modalForm"

let emits = defineEmits([
  "on-preview",
  "on-remove",
  "on-success",
  "on-error",
  "on-progress",
  "on-change",
  "on-exceed",
  "before-upload",
  "before-remove",
])

let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  // 用户自定义上传方法
  httpRequest: {
    type: Function,
  },
})

let model = ref<any>(null)
let rules = ref<any>(null)
let form = ref<FormInstance | null>(null)
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref("")
const toolbarConfig = {}
const editorConfig = { placeholder: "请输入内容..." }

// 初始化表单
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
      if(item.type === 'editor') {
        valueHtml.value = item.value
      }
    })

    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

// 重置表单
let resetFields = () => {
  // 重置 element-plus 的表单
  form.value!.resetFields()
  // 重置富文本编辑器的内容
  if(props.options && props.options.length) {
    let editorItem = props.options.find(item => item.type === 'editor')!
    valueHtml.value = editorItem.value
  }
}

// 表单验证
let validate = () => {
  return form.value?.validate
}
// 获取表单数据
let getFormData = () => {
  return model.value
}
// 分发方法
defineExpose({
  resetFields,
  validate,
  getFormData
})

onMounted(() => {
  initForm()
})
onUnmounted(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
// 监听父组件传递进来的options
watch(
  () => props.options,
  () => {
    initForm()
  },
  { deep: true }
)

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const hanldeBlur = (editor: any) => {
  props.options.forEach(item => {
    if(item.type === 'editor') {
      model.value[item.prop!] = editor.getHtml()
    }
  })
}

let onPreview = (file: File) => {
  emits("on-preview", file)
}
let onRemove = (file: File, fileList: FileList) => {
  emits("on-remove", { file, fileList })
}
let onSuccess = (response: any, file: File, fileList: FileList) => {
  // 上传成功，给表单上传项赋值
  let uploadItem = props.options.find((item) => item.type === "upload")!
  model.value[uploadItem.prop!] = { response, file, fileList }
  emits("on-success", { response, file, fileList })
}
let onError = (err: any, file: File, fileList: FileList) => {
  emits("on-error", { err, file, fileList })
}
let onProgress = (event: any, file: File, fileList: FileList) => {
  emits("on-progress", { event, file, fileList })
}
let onChange = (file: File, fileList: FileList) => {
  emits("on-change", { file, fileList })
}
let onExceed = (file: File, fileList: FileList) => {
  emits("on-exceed", { file, fileList })
}
let beforeUpload = (file: File) => {
  emits("before-upload", file)
}
let beforeRemove = (file: File, fileList: FileList) => {
  emits("before-remove", { file, fileList })
}
</script>

<template>
  <el-form
    v-if="model"
    ref="form"
    :validate-on-rule-change="false"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children!.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
        ></component>
        <el-upload
          v-if="item.type === 'upload'"
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :on-exceed="onExceed"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
        <div v-if="item.type === 'editor'" style="border: 1px solid #ccc">
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            mode="default"
          />
          <Editor
            style="height: 500px; overflow-y: hidden"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            mode="default"
            @onCreated="handleCreated"
            @onBlur="hanldeBlur"
          />
        </div>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :label="child.label"
            :value="child.value"
            :is="`el-${child.type}`"
          >
          </component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>
