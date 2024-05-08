<template>
  <div style="height: 70%;">
    <!-- 指定一个容器 -->

    <div id="vditor"></div>
    <div style="margin-left: 50%;">
      <a-space>
        <!-- <a-button type="primary" @click="getEditorContent">提交</a-button> -->
        <a-button @click="handleClick">提交</a-button>
        <!-- 这是提交后要填写的内容 -->
        <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
          <template #title>
            提交内容
          </template>
          <div>
            <a-space direction="vertical">
              <a-input :style="{ width: '320px' }" placeholder="请输入文章标题" v-model="title"></a-input>

              <a-select v-model="value" :style="{ width: '320px' }" placeholder="请选择分类" multiple :scrollbar="scrollbar">
                <a-option v-for="(i, index) in form_title.value" :key="index" :value="i.id" :label="i.name" />
              </a-select>

              <!-- </a-select> -->
            </a-space>
          </div>
        </a-modal>
        <!-- <a-button type="primary" @click="clear">清空</a-button> -->
      </a-space>
    </div>
  </div>




</template>

<script setup>
// 1.1 引入Vditor 构造函数
import Vditor from 'vditor'
// 1.2 引入样式
import 'vditor/dist/index.css';
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
import router from '@/router';
const title = ref()

// 2. 获取DOM引用
const vditor = ref()
// 3. 在组件初始化时，就创建Vditor对象，并引用
onMounted(() => {
  vditor.value = new Vditor('vditor', {
    height: '80vh',
    // width: '55vw',
    outline: {
      enable: true,
      position: 'left'
    },

  })
})

const form_title = reactive({})

//提交后弹框的选择内容
const visible = ref(false);

const handleClick = () => {
  visible.value = true;
  axios.get(
    'http://127.0.0.1:8000/api/tag/name/'
  ).then(res => {
    form_title.value = res.data
    console.log(res.data)
  }).catch(err => {
    console.log(err)
  })

};
const form_markdown = new FormData();
const value = ref()
const handleOk = () => {
  console.log("这是tag的值",value.value)
  const value1 =  Array.from(value.value)
  console.log(value1)
  const content = vditor.value.getValue();

  form_markdown.append("title", title.value)
  form_markdown.append("author", localStorage.getItem("token"))
  form_markdown.append("markdown", content)
  form_markdown.append("cover", '1')
  form_markdown.append("tags", value1)
  form_markdown.append("created_at", "2024-04-24")
  form_markdown.append("modified_at", "2024-04-24")
  console.log("title", title.value, "markdown", content)
  axios.post(
    'http://127.0.0.1:8000/api/home/article/', form_markdown
  ).then(res => {
    console.log("132", res.data)
  }).catch(err => {
    console.log(err)
  })
  visible.value = false;
  router.push("/about")
};
const handleCancel = () => {
  visible.value = false;
}


</script>
<style></style>