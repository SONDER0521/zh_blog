<template>
  <title1 style=" position: fixed; z-index: 9999;"></title1>
  <keep-alive>
    <router-view style="margin-top: 90px; "></router-view>
  </keep-alive>
</template>

<script setup>
import title1 from './components/title.vue';

</script>

<style>
body {
  background-color: #F9F9F9;
}
</style>