<template>
    <div>
        <input type="text" v-model="txt1" />
        <button v-bind:disabled="txt1==''">조회</button>
    </div>
    <div>
        <div>입력한 텍스트: {{ txt1 }}</div>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            txt1: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>