<template>
    <span>
        <a-button @click="goback">返回</a-button>
    </span>
</template>

<script setup>
import router from '@/router';
const goback = () => {
    router.back()
}
</script>

<style></style>