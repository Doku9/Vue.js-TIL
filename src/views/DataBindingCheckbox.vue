<template>
    <div>
        <label> <input type="checkbox" v-bind:value="seoul" v-model="cities" /> 서울 </label>
        <label> <input type="checkbox" :value="jeju" v-model="cities" /> 제주 </label>
        <label> <input type="checkbox" value="21" v-model="cities" /> 부산 </label>
    <br>
    <div>선택한 지역: {{ cities }}</div>
    </div>

    <!-- v-model은 사용자가 수정할 수 있는 것에만 -->
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            cities: [],
            seoul: "02",
            jeju: "064",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
};
</script>