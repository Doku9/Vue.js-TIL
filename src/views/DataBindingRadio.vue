<template>
    <div>
        <label><input type="radio" value="02" v-model="selectcity" />서울</label>
        <label><input type="radio" value="064" v-model="selectcity" />제주</label>
        <label><input type="radio" value="21" v-model="selectcity" />부산</label>
    </div>
     <br>
    <div>선택한 지역: {{ selectcity }}</div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
         return {
            selectcity: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>