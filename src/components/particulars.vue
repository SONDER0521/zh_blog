<template>
    <div style="width: 60%; margin: 0 auto; border: 1px solid #000; border: 1px solid #000; background-color: #FFFFFF;">
        <div style="width: 100%;  background-color: #FFFFFF;border: 1px solid #000; ">
            <h2 style="text-align: center;">{{ content.value.title }}</h2>
            <span style="padding-left: 15px;">
                <a-avatar>
                    <!-- <img alt="avatar"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" /> -->
                    <a-image width="200"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" />
                </a-avatar>
            </span>
            <span> {{ content.value.created_at }} 字数阅读 {{ content.value.words }} 评论 0 喜欢 {{ content.value.likes
                }}</span>
            <a-divider style="width: 95%; min-width: 90%; margin: 20px auto;" />
        </div>
        <div style=" display: flex;">
            <div style="width: 80%;  background-color: #FFFFFF;border: 1px solid #000; ">
                <div v-html="content.value.html"></div>

            </div>

            <div style="width: 20%; background-color: #FFFFFF;  text-align: center; border: 1px solid #000;">
                <a-tree blockNode :data="treeData" />
            </div>
        </div>
        <div style="margin: 10px ;">
            <a-space direction="vertical" fill>
                <a-button type="primary" status="danger">点赞</a-button>
                <a-textarea placeholder="请输入评论" allow-clear />
                <a-button type="primary">提交</a-button>
            </a-space>
            <hr color="#E5E6EB">
            <div>条品论</div>
            <hr color="#E5E6EB">
            <div>
                <span style="padding-left: 15px;">
                    <a-avatar>
                        <img alt="avatar"
                            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                    </a-avatar>
                </span>
                <span>
                    {{ token }}评论时间 {{ content.value.created_at }} </span>
                <div style="margin: 20px; ">正好看</div>
                <a-divider style="width: 95%; min-width: 90%; margin: 20px auto;" />
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const token = localStorage.getItem("token")
const route = useRoute()
const xaingqing = route.query.key
const content = reactive({})
axios.get(
    'http://127.0.0.1:8000/api/home/article_detail/',
    {
        params: {
            id: xaingqing
        }
    }
).then(res => {
    content.value = res.data
    console.log(content.value)
}).catch(err => {
    console.log(err)
})


</script>

<style></style>