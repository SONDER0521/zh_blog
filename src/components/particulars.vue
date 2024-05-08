<template>
    
    <div style="width: 60%; margin: 0 auto; background-color: #FFFFFF;">
        <div style="width: 100%;  background-color: #FFFFFF; ">
            <!-- <goback/> -->
            <h2 style="text-align: center;">{{ content.value.article.title }}</h2>
            <span style="padding-left: 15px;">
                <a-avatar>
                    <a-image width="200"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" />
                </a-avatar>
            </span>
            <span> {{ content.value.article.created_at }} 字数阅读 {{ content.value.article.words }} 评论 0 喜欢 {{
                content.value.article.likes
            }}</span>
            <a-divider style="width: 95%; min-width: 90%; margin: 20px auto;" />
        </div>
        <div style=" display: flex;">
            <div style="width: 80%;  background-color: #FFFFFF; margin:0  0 0 40px; ">
                <div v-html="content.value.article.html"></div>

            </div>
            <!-- 
            <div style="width: 20%; background-color: #FFFFFF;  text-align: center; border: 1px solid #000;">
                <a-tree blockNode :data="treeData" />
            </div> -->
        </div>
        <div style="margin: 10px ;">
            <a-space direction="vertical" fill>
                <a-button type="primary" status="danger" @click="likes(content.value.article.id)">点赞</a-button>
                <a-textarea placeholder="请输入评论" v-model="comment" allow-clear />
                <a-button type="primary" @click="submit(content.value.article.id)">提交</a-button>
            </a-space>
            <hr color="#E5E6EB">
            <div>{{ content.value.comments.length }}条品论</div>
            <hr color="#E5E6EB">
            <div v-for="(comment) in content.value.comments" :key="comment.id"
                :v-if="comment.article == content.value.id">

                <span style="padding-left: 15px;">
                    <a-avatar>
                        <img alt="avatar"
                            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                    </a-avatar>
                </span>
                <span>
                    {{ comment.user }}评论时间 {{ comment.created_at }} </span>
                <div style="margin: 20px; ">{{ comment.content }}</div>
                <a-divider style="width: 95%; min-width: 90%; margin: 20px auto;" />
            </div>
        </div>
    </div>
    
</template>

<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import goback from './goback.vue'
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

//点赞的内容
const formData = new FormData();
formData.append("user_id", localStorage.getItem("token"))
const likes = (id) => {
    console.log(id)
    formData.append("article_id", id)
    axios.post(
        'http://127.0.0.1:8000/api/like/toggle_like/', formData
    ).then(res => {
        console.log(res.data)
        alert("点赞成功")
    }).catch(err => {
        console.log(err)
    })
}
//提交评论
const form_comment = new FormData()
const comment = ref()

const submit = (id) => {
    console.log(comment.value)
    form_comment.append("content", comment.value)
    form_comment.append("user", localStorage.getItem("token"))
    form_comment.append("article", id)
    form_comment.append("created_at", "2024-01-01 20:20")
    axios.post("http://127.0.0.1:8000/api/comment/",
        form_comment
    ).then(res => {
     
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

}

</script>
