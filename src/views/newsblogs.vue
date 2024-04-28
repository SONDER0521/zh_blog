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

            <a-input :style="{ width: '320px' }" placeholder="请输入文章标题" v-model="title"></a-input>
            <br>
            <!-- <a-input-tag :default-value="['test']" :style="{ width: '320px' }" placeholder="Please Enter" allow-clear /> -->
            <!-- <a-select :style="{ width: '320px' }" placeholder="请选择文章类型">
              <a-option v-for="i in form_title.value" :key="i.id">{{ i.name }}</a-option>
            </a-select> -->

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
    }
  })
})
const form_title = reactive({})
// const getEditorContent = () => {
//   if (vditor.value) {
//     const content = vditor.value.getValue();
//     console.log(content);
//     // axios.post(
//     //   '', {

//     // }
//     // )

//   }

// };


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
const handleOk = () => {
  const content = vditor.value.getValue();
  console.log("title",title.value,"markdown",content)
  axios.post(
    'http://127.0.0.1:8000/api/home/article/',
    {
      title: title.value,
      author:3,
      markdown: content,
      cover: '1',
      tags: ['1'],
      created_at:"2024-04-24",
      modified_at:"2024-04-24"
    }
  ).then(res=>{
    console.log("132",res.data)
  }).catch(err=>{
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