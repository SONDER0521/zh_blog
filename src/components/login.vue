<template>
    <a-modal v-model:visible="visible" title="登录" @cancel="handleCancel" cancel-text="关闭" ok-text="登录" @close="register"
        @ok="login">
        <!-- @before-ok="handleBeforeOk" -->
        <a-form :model="form">
            <a-form-item field="name" label="Name">
                <a-input v-model="form.name" />
            </a-form-item>
            <a-form-item field="password" label="password">
                <a-input v-model="form.password" />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
import { reactive, ref, inject,provide } from 'vue';
import axios from 'axios'
export default {
    setup() {
        const visible = inject("msg")
        console.log(visible)
        const form = reactive({
            name: '',
            password: ''
        });

        const handleClick = () => {
            visible.value = true;
        };
        const handleCancel = () => {
            visible.value = false;
        }
        //登录按钮
        const login = () => {
            console.log("这是用户信息：")
            console.log(form)
            if (form.name != '' && form.password != '') {
                axios.post('http://127.0.0.1:8000/api/user/login/', form)
                    .then((res) => {
                        localStorage.setItem("token", res.data.id)
                        localStorage.setItem("token_user",form.name)
                        localStorage.setItem("show",true)
                        console.log(res.data)
                    }).catch(reasion => { //使用catch来获取异常  
                        console.log(reasion)
                    })
            } else {
                alert("用户名不能为空")
            }
            console.log(form)
        }
        const register = () => {
            visible.value = false

            // console.log("注册组件调用")
        }
        return {
            visible,
            form,
            handleClick,
            // handleBeforeOk,
            register,
            login,
            handleCancel
        }
    },
}
</script>