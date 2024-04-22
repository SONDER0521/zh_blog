<template>
  <div style="height: 70%;">
    <!-- 指定一个容器 -->

    <div id="vditor"></div>
    <div style="margin-left: 50%;">
      <a-space>
        <a-button type="primary" @click="getEditorContent">提交</a-button>
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
import { ref, onMounted } from 'vue';

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
const getEditorContent = () => {
  if (vditor.value) {
    const content = vditor.value.getValue();
    console.log(content);
  }
};
</script>
<style></style>