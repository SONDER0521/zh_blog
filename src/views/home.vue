<template>

  <div class="layout-demo" style="margin-top: 70px;">
    <a-layout>
      <a-layout-content>

        <div style="width: 60%; margin: 0 auto; border: 1px solid #000; display: flex;">
          <div style="width: 78%;  background-color: #FFFFFF;  cursor: pointer;">
            
            <div v-for="(i, index) in form.value" :key="index">
              <div style="display: flex; align-items: center; " :v-model="form.views++" @click="particulars(index)">

                <a-typography :style="{ width: '70%', padding: ' 15px 15px 0px 15px' }">
                  <a-typography-title :heading="5">{{ i.title }}</a-typography-title>
                  <a-typography-paragraph spacing="close" type="secondary">
                    {{ i.markdown }}
                  </a-typography-paragraph>
                </a-typography>
                <a-image width="100" style="margin-left: 5%;" src="#" />
              </div>
              <div style="padding: 0px 15px 15px 15px;">
                <div>查看&nbsp;{{ i.views }}&nbsp;评论&nbsp;{{ i.comments }}&nbsp;赞&nbsp;{{ i.likes }}&nbsp;&nbsp;&nbsp;{{
              i.created_at }}</div>
              </div>
            </div>
            <a-divider margin="0" />
            <br>
          </div>

          <div style="width: 20%; margin-left: 10px; background-color: #FFFFFF;  text-align: center;">
            <a-avatar :size="100" style="margin-left: 5%; border-radius:50px ; margin: 60px 0 60px 0;">
              <img alt="avatar" src="#" />
            </a-avatar>
            <a-divider margin="0" />
          </div>
        </div>
      </a-layout-content>
      <!-- <a-layout-footer>Footer</a-layout-footer> -->
    </a-layout>
    <!-- <a-button @click="clog">点我</a-button> -->
  </div>
</template>
<script setup>
import router from "@/router";
import axios from "axios";
import { reactive } from "vue";

const form =reactive({})
axios.get(
  'http://127.0.0.1:8000/api/home/article/'
).then(res => {
  console.log("这是返回的数据")
  console.log(res)
  console.log("这是返回的rea.data")
  console.log(res.data)
  form.value = res.data
  console.log("这返回后的",form.value)

}).catch(r => {
  console.log("出错", r)
})


const particulars = (key) => {
  //console.log("这是首页传值",form.value[key])
  router.push({
    path: "/particulars",
    query: {
      key: key
    }
  })
}

</script>
<style></style>