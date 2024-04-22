<template>
  <div style="width: 60%; background-color: #FFFFFF; margin: 0 auto; border: 1px solid #000;">
    <div style="text-align: center;">
      <h2>欢迎留言</h2>
      <a-form :model="form" :style="{ width: '70%',margin:'0 auto' }"  @submit="handleSubmit" >
        <a-form-item field="name" label="名字" required>
          <a-input v-model="form.name" placeholder="请输入你的名称" />
        </a-form-item>
        <a-form-item field="email" label="邮箱" required>
          <a-input v-model="form.post" placeholder="请输入邮箱" />
        </a-form-item>
        <a-form-item field="phone" label="手机号">
          <a-input v-model="form.post" placeholder="请输入手机号" />
        </a-form-item>
        <a-form-item field="livemassage" label="留言" required>
          <a-textarea  v-model="form.post" placeholder="留言的内容" />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" type="primary" style="margin: 0 auto;">提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';


const form = reactive({
  name: '',
  email: '',
  phone:'',
  livemassage:''
});
const handleSubmit = (data) => {
  console.log(data);
};



</script>

<style></style>