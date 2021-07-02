<template>
    <div>
        <input type="text" v-model.number="num1" />
        <button @click="changeValue()">값 변경</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            txt:"",
            num1:0,
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeValue() {
        var tx2 = "버튼실행";
        console.log(tx2);
        // this.txt1 = "South Korea";
        },
    }
}
</script>