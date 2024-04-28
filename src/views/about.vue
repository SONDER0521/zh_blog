<template>

    <div style="width: 60%; margin: 0 auto; border: 1px solid #000; border: 1px solid #000;">
        <div style="width: 100%;  background-color: #FFFFFF;border: 1px solid #000; ">
            <h2 style="text-align: center;">我的名称{{ token  }}</h2>
            <span style="padding-left: 15px;">
                <a-avatar>
                    <img alt="avatar"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                </a-avatar>
            </span>
            <a-divider style="width: 95%; min-width: 90%; margin: 20px auto;" />
        </div>
        <div style=" display: flex;">
            <div style="width: 80%; padding: 10px; background-color: #FFFFFF;border: 1px solid #000; ">
                <div v-for="(i, index) in form.value" :key="index">
                    <div style="display: flex; align-items: center; " @click="particulars(i.id)">

                        <a-typography :style="{ width: '70%', padding: ' 15px 15px 0px 15px' }">
                            <a-typography-title :heading="5">{{ i.title }}</a-typography-title>
                            <a-typography-paragraph  type="secondary">
                                {{ i.markdown }}
                            </a-typography-paragraph>
                        </a-typography>
                        <a-image width="100" style="margin-left: 5%;" src="#" />
                    </div>
                    <div style="padding: 0px 15px 15px 15px;">
                        <div>查看&nbsp;{{ i.views }}&nbsp;评论&nbsp;{{ i.comments }}&nbsp;赞&nbsp;{{ i.likes
                            }}&nbsp;&nbsp;&nbsp;{{
                i.created_at }}</div>
                    </div>
                </div>

            </div>

            <div style="width: 20%; background-color: #FFFFFF;  text-align: center; border: 1px solid #000;">
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import axios from 'axios';
const route = useRoute()
const token = ref(localStorage.getItem("token"))
console.log("token", token.value)
//在调用我发布的内容页面
const form = reactive({})
axios.get(
    'http://127.0.0.1:8000/api/personal/profile/', {
    params: {
        username: token.value
    }
}).then((res) => {
    form.value = res.data.articles
    console.log(form.value)
}).catch((err) => {
    console.log(err)
})

//点击跳转到详情页面
const particulars = (key) => {
    router.push({
        path: "/particulars",
        query: {
            key: key
        }
    })
}
</script>

<style></style>