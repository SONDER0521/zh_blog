<template>

    <div style="width: 60%; margin: 0 auto; border: 1px solid #000; border: 1px solid #000;">
        <div style="width: 100%;  background-color: #FFFFFF;border: 1px solid #000; ">
            <h2 style="text-align: center;">复杂表单的设计提效思路</h2>
            <span style="padding-left: 15px;">
                <a-avatar>
                    <img alt="avatar"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                </a-avatar>
            </span>
            <span>2023-01-08 16:31:20字数 阅读 104评论 0 喜欢 0</span>
            <a-divider style="width: 95%; min-width: 90%; margin: 20px auto;" />
        </div>
        <div style=" display: flex;">
            <div style="width: 80%;  background-color: #FFFFFF;border: 1px solid #000; ">
                <div>这是详情展示页面</div>

            </div>

            <div style="width: 20%; background-color: #FFFFFF;  text-align: center; border: 1px solid #000;">
                <a-tree blockNode :data="treeData" />
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
const route = useRoute()
const xaingqing = route.query.key
console.log("这是详情页面的",xaingqing)
// axios.get(
//     'http://127.0.0.1:8000/api/home/article?id=route.query.key'
// ).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err0)
// })

const treeData = [
    {
        title: 'Trunk 0-0',
        key: '0-0',
        children: [
            {
                title: 'Branch 0-0-0',
                key: '0-0-0',
                children: [
                    {
                        title: 'Leaf',
                        key: '0-0-0-0',
                    }
                ]
            }
        ],
    },
];
</script>

<style></style>