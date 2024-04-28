<template>
    <div style="width: 60%; margin: 0 auto; border: 1px solid #000; display: flex;">

        <div style="width: 20%;  background-color: #FFFFFF;border: 1px solid #000; ">
            <div class="menu-demo">
                <a-menu>
                    <a-sub-menu key="0">
                        <template #title>全部分类</template>
                        <a-menu-item v-for="(i) in form_title.value" :key="i.id" @click="show_class(i.name)">{{ i.name
                            }}</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </div>
            <!-- <a-tree :data="form_title.value" :default-expanded-keys="['0-0-0']" :default-selected-keys="['0-0-0', '0-0-1']" /> -->
        </div>

        <div style="width: 78%; border: 1px solid #000; background-color: #FFFFFF; margin-left: 10px;cursor: pointer;">
            <div v-for="(i, index) in form_details.value" :key="index">
                <div style="display: flex; align-items: center;" @click="particulars(i.id)">
                    <a-typography :style="{ width: '70%', padding: ' 15px 15px 0px 15px' }">
                        <a-typography-title :heading="5">{{ i.title }}</a-typography-title>
                        <a-typography-paragraph spacing="close" type="secondary">
                            {{ i.excerpt }}
                        </a-typography-paragraph>
                    </a-typography>
                
                    <img width="100" style="margin-left: 5%;"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" />
                    <!-- <a-image width="100" style="margin-left: 5%;"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" /> -->
                </div>
                <div style="padding: 0px 15px 15px 15px;">
                    <div>查看&nbsp;{{ i.views }}&nbsp;评论&nbsp;{{ i.comments }}&nbsp;赞&nbsp;{{ i.likes }}&nbsp;{{ }}</div>
                </div>
                <hr color="#E5E6EB">
                <!-- <a-divider margin="0" /> -->
                <br>
            </div>

        </div>

    </div>
    <!-- <a-layout-footer>Footer</a-layout-footer> -->
</template>
<script setup>
import router from '@/router';
import axios from 'axios';
import { reactive } from 'vue';
const particulars = (key) => {
    router.push({
        path: "/particulars",
        query: {
            key: key
        }
    })
}

const form_title = reactive({})
axios.get(
    'http://127.0.0.1:8000/api/tag/name/'
).then(res => {
    form_title.value = res.data
    console.log(res.data)
}).catch(err => {
    console.log(err)
})

const form_details = reactive({})
//获取全部的内容
axios.get(
    'http://127.0.0.1:8000/api/home/article/'
).then(res => {
    form_details.value = res.data
    console.log(form_details)
}).catch(r => {
    console.log("出错", r)
})
//获取分类后的内容
const show_class = (key) => {
    console.log(key)
    axios.get(
        'http://127.0.0.1:8000/api/tag/name/query/',
        {
            params: {
                tag: key
            }
        }
    ).then(res => {
        form_details.value = res.data
        console.log(form_details)
    }).catch(err => {
        console.log(err)
    })
}
</script>
