
<template>
    <div @click="add">
        {{count}}
    </div>
    <!-- vue3中v-if优先级比v-for高 vue2中v-for优先级比v-if高 所有下面代码v-if中访问val是访问不到的 -->
    <!-- <template v-for="(val, key, index) in obj" :key="index" v-if="val"> -->
    <template v-for="(val, key, index) in obj" :key="index">
        <span>{{ val }} + {{ key }} + {{ index }}</span>
        <br/>
    </template>
    
    <a href="a" @click.prevent="warn('hhhhh', $event)">
        警告1
    </a>

    <input @keyup.enter="submit" type="text">

    <br />
    <div>Selected: {{ selected }}</div>

    <select v-model="selected" multiple>
    <option value="1">A</option>
    <option value="2">B</option>
    <option value="3">C</option>
    </select>

    <input v-model="checkedIpt" type="checkbox" true-value="yes" false-value="no">
    <input v-model.trim="numIpt" type="text">

    <br />
    <ul>
        <li v-for="i in itemRef" :key="i" :ref="refChange">哈哈：{{ i }}</li>
    </ul>
    <br />
    <div>
        <button @click="keyRef++;itemRef.push(keyRef)">点击</button>
    </div>
</template>
    
<script setup>
import { computed, ref, onMounted } from 'vue'
// import { useStore } from 'vuex'
import { useStore } from '../store/gvuex';
let store = useStore()
let count = computed(() => store.state.count)
const obj = ref({
    a: 'a',
    b: 'b',
    c: 'c'
})

function add() {
    store.commit('add')
}

/* 事件处理 test */
function warn(test, ele){
    if(ele){
        // ele.preventDefault();
    }
    console.log(test, ele)
}

function submit(){
    console.log(1111);
}

/* form */
const checkedNames = ref([]);
const selected = ref([]);
const checkedIpt = ref('yes');
const numIpt = ref();

/* 模板 */
const keyRef = (0);
const itemRef = ref([]);
function refChange(el) {
    console.log(el)
}
</script>