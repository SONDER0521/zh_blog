<template>
    <div style="width: 60%; margin: 0 auto; border: 1px solid #000; display: flex;">

        <div style="width: 20%;  background-color: #FFFFFF;border: 1px solid #000; ">
            <a-tree :data="treeData" :default-expanded-keys="['0-0-0']" :default-selected-keys="['0-0-0', '0-0-1']" />
        </div>

        <div style="width: 78%; border: 1px solid #000; background-color: #FFFFFF; margin-left: 10px;cursor: pointer;">

            <div style="display: flex; align-items: center;" @click="particulars(1)">
                <a-typography :style="{ width: '70%', padding: ' 15px 15px 0px 15px' }">
                    <a-typography-title :heading="5">Default</a-typography-title>
                    <a-typography-paragraph spacing="close" type="secondary">
                        A design is a plan or specification for the construction of an object or system or for the
                        implementation of an activity or process, or the result of that plan or specification in the
                        form of
                        a
                        prototype, product or process. The verb to design expresses the process of developing a design.
                        In
                        some
                        cases, the direct construction of an object without an explicit prior plan (such as in
                        craftwork,
                        some
                        engineering, coding, and graphic design) may also be considered to be a design activity.
                    </a-typography-paragraph>
                </a-typography>
                <a-image width="100" style="margin-left: 5%;"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" />
            </div>
            <div style="padding: 0px 15px 15px 15px;">
                <div>查看&nbsp;{{ }}&nbsp;评论&nbsp;{{ }}&nbsp;赞&nbsp;{{ }}&nbsp;{{ }}</div>
            </div>
            <a-divider margin="0" />
            <br>

        </div>

    </div>
    <!-- <a-layout-footer>Footer</a-layout-footer> -->
</template>
<script setup>
import router from '@/router';
const particulars = (key) => {
    router.push({
        path: "/particulars",
        query: {
            key: key
        }
    })
}
const treeData = [
    {
        title: '全部分类',
        key: '0-0',
        children: [
            {
                title: 'Branch 0-0-0',
                key: '0-0-0',

            }
        ],
    },
];
</script>
<style scoped></style>