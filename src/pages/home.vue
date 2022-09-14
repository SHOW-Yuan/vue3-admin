<template>
    <h3>评分组件</h3>

    <Rate :theme="color" v-model="score"></Rate>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Rate from '../components/Rate.vue';

const score = ref(3.5);
const color = ref('orange');

</script>

<style lang="scss" scoped>

</style>