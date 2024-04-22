<template>
    <a-modal v-model:visible="visible" title="注册" @cancel="handleCancel" cancel-text="取消" ok-text="注册"
        @ok="registe_log">
        <!-- @before-ok="handleBeforeOk" -->
        <a-form :model="data">
            <a-form-item label="Name">
                <a-input v-model="data.name" />
            </a-form-item>
            <a-form-item label="password">
                <a-input v-model="data.password" />
            </a-form-item>
            <a-form-item label="password1">
                <a-input v-model="data.password1" />
            </a-form-item>
            <a-form-item label="email">
                <a-input v-model="data.email" />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
import { reactive, ref, inject } from 'vue';
import axios from 'axios'
export default {
    setup() {
        const visible = inject("registe")
        console.log(visible)
        const data = reactive({
            name: '',
            password: '',
            password1: '',
            email: ""
        });

        const handleClick = () => {
            visible.value = true;
        };
        // const handleBeforeOk = (done) => {
        //     console.log(form)
        //     window.setTimeout(() => {
        //         done()
        //         // prevent close
        //         // done(false)
        //     }, 3000)
        // };
        const handleCancel = () => {
            visible.value = false;
        }

        const registe_log = () => {
            if (data.name != '' && data.password != '') {
                console.log(data)
                axios.post(
                    'http://127.0.0.1:8000/api/user/register/', {
                        nickname: data.name,
                        password: data.password,
                        password_confirm: data.password1,
                        username: data.email,
                    }).then(res => {
                        // colsole.log("成功")
                        console.log("成功")
                        console.log(res.data.message)
                    }).catch(reasion => {
                        console.log("端口的一异常")
                        console.log(reasion)
                    })
            } else {
                alert("用户名不能为空")
            }
        }
        return {
            visible,
            data,
            handleClick,
            // handleBeforeOk,
            registe_log,
            handleCancel
        }
    },
}
</script>