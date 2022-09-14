<template>
    <div :style="fontColor">
        <div class="rate" @mouseout="mouseOut">
            <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontWidth">
                <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed, ref } from 'vue';

let props = defineProps({
    modelValue: {
        type: Number,
        default: 0
    },
    theme: {
        type: String,
        default: 'black'
    }
})
let emits = defineEmits(['update:modelValue']);

const str = "★★★★★☆☆☆☆☆";
// let rate = computed(() => str.slice(5 - props.value, 10 - props.value));

// 颜色
const themeObj = { 'black': '#00', 'white': '#fff', 'red': '#f5222d', 'orange': '#fa541c', 'yellow': '#fadb14', 'green': '#73d13d', 'blue': '#40a9ff',}
const fontColor = computed(() => {
    return `color: ${ themeObj[props.theme] }`;
})

// 评分宽度
let width = ref(props.modelValue);
const mouseOver = (num: number) => {
    console.log(props);
    
    width.value = num;
}
const mouseOut = () => {
    width.value = props.modelValue;
}
const fontWidth = computed(()=> `width: ${width.value}em;`);

// 通知父级
const onRate = (num: number) => {
    emits('update:modelValue', num);
}

</script>

<style scoped>
.rate{
    position:relative;
    display: inline-block;
    font-size: 10px;
}
.rate > span.hollow {
    position:absolute;
    display: inline-block;
    top:0;
    left:0;
    width:0;
    overflow:hidden;
}
</style>
