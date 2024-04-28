<template>
  <div class="menu-demo" style="border-bottom: 1px solid #EEEEEE; position: fixed; top: 0;">
    <login_denglu></login_denglu>
    <register1></register1>
    <a-menu mode="horizontal" :default-selected-keys="['1']" @menu-item-click="to">
      <div style="width: 60%; padding-left:20% ;">
        <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
          <div :style="{
      width: '80px',
      height: '30px',
      borderRadius: '2px',
      background: 'var(--color-fill-3)',
      cursor: 'text',
    }"></div>
        </a-menu-item>
        <a-menu-item key="1">主页</a-menu-item>
        <a-menu-item key="2">分类</a-menu-item>
        <a-menu-item key="3">归档</a-menu-item> <!-- 归档-->
        <a-menu-item key="4">留言</a-menu-item>
        <a-menu-item key="5">我的发布</a-menu-item>
        <!-- <a-menu-item key="6">发布</a-menu-item> -->

        <a-space style="float: right">
          <a-button type="primary" status="danger" @click="router.push('/newsblogs')">发布</a-button>
          <a-button @click="login" type="primary">登录</a-button>
          <a-button @click="register" type="primary" status="danger">注册</a-button>
        </a-space>
      </div>
    </a-menu>
  </div>
</template>
<script setup>
import router from "@/router"
import login_denglu from "../components/login.vue"
import register1 from "../components/register.vue"
import { provide, reactive, ref } from 'vue'
//控制路由的跳转
const to = (key) => {
  switch (key) {
    case "1":
      router.push('/home')
      break;
    case "2":
      router.push('/classify')
      break;
    case "3":
      router.push('/file')
      break;
    case "4":
      router.push('/livemassage')
      break;
    case "5":
      router.push('/about')
      break;
  }
}
//组件的传值登录组件
const msg = ref(false);
const login = () => {
  msg.value = !msg.value
}
provide("msg", msg)
//注册组件传值
const registe = ref(false);
const register = () => {
  registe.value = !registe.value
}
provide("registe", registe)

</script>
<style scoped>
body {
  min-width: 60%;
}

.menu-demo {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-neutral-2);
}
</style>